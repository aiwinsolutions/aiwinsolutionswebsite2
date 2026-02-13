// ========== Configuration ==========
// Supabase project settings (anon key is safe to expose — RLS protects data)
const SUPABASE_URL = 'https://izeamxdmfpvcadvskczf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6ZWFteGRtZnB2Y2FkdnNrY3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MzEwNzYsImV4cCI6MjA4NjUwNzA3Nn0.JPObhs93_BtEbclKTTbjZDVWC-gyDigwcXVAgq1quD4';

// ========== State ==========
let currentPage = 1;
const TOTAL_PAGES = 6;

const surveyState = {
  employeeId: '',
  jobFamily: '',
  competencies: [],
  sme: [],
  technical: []
};

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', () => {
  populateJobFamilyDropdown();
  buildSkillRows('competency-grid', 'Competency');
  buildSkillRows('sme-grid', 'SME');
  buildSkillRows('technical-grid', 'Technical');
  setupNavigation();
  setupPage1Validation();
  setupCertification();
});

// ========== Job Family Dropdown (Page 1) ==========
function populateJobFamilyDropdown() {
  const select = document.getElementById('jobFamilyInput');
  JOB_FAMILIES.filter(jf => jf !== 'General').forEach(jf => {
    const opt = document.createElement('option');
    opt.value = jf;
    opt.textContent = jf;
    select.appendChild(opt);
  });
}

// ========== Page 1 Validation ==========
function setupPage1Validation() {
  const employeeId = document.getElementById('employeeIdInput');
  const jf = document.getElementById('jobFamilyInput');
  const btn = document.getElementById('btn-next-1');

  const validate = () => {
    btn.disabled = !(employeeId.value.trim() && jf.value);
  };

  employeeId.addEventListener('input', validate);
  jf.addEventListener('change', validate);
}

// ========== Build Skill Rows ==========
// Skill types where Job Family is hardcoded to "General"
const HARDCODED_JF_TYPES = ['SME', 'Technical'];

function buildSkillRows(gridId, skillType) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';

  const isHardcodedJF = HARDCODED_JF_TYPES.includes(skillType);

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = 'skill-row';
    row.dataset.index = i;
    row.dataset.skillType = skillType;

    // Row number
    const num = document.createElement('div');
    num.className = 'skill-row-number';
    num.textContent = i + 1;
    row.appendChild(num);

    if (isHardcodedJF) {
      // Hidden Job Family dropdown pre-set to "General"
      const jfGroup = createDropdownGroup('Job Family', `${skillType}-${i}-jf`, ['General'], true);
      jfGroup.style.display = 'none';
      row.appendChild(jfGroup);

      // Show "General" as static text in the first column
      const jfLabel = document.createElement('div');
      jfLabel.className = 'skill-jf-static';
      jfLabel.textContent = 'General';
      row.appendChild(jfLabel);

      // Skill Cluster dropdown (visible immediately, populated with General's clusters)
      const clusters = SKILLS_DATA[skillType] && SKILLS_DATA[skillType]['General']
        ? Object.keys(SKILLS_DATA[skillType]['General']).sort()
        : [];
      row.appendChild(createDropdownGroup('Skill Cluster', `${skillType}-${i}-cluster`, clusters, true));
    } else {
      // Job Family dropdown
      row.appendChild(createDropdownGroup('Job Family', `${skillType}-${i}-jf`, getJobFamiliesForType(skillType), true));

      // Skill Cluster dropdown (hidden)
      row.appendChild(createDropdownGroup('Skill Cluster', `${skillType}-${i}-cluster`, [], false));
    }

    // Skill dropdown (hidden)
    row.appendChild(createDropdownGroup('Skill', `${skillType}-${i}-skill`, [], false));

    // Proficiency Level dropdown (hidden)
    row.appendChild(createDropdownGroup('Proficiency Level', `${skillType}-${i}-level`, [], false));

    grid.appendChild(row);

    // Pre-select "General" for hardcoded types
    if (isHardcodedJF) {
      const jfSelect = document.getElementById(`${skillType}-${i}-jf`);
      jfSelect.value = 'General';
    }

    // Setup cascading logic
    setupCascade(skillType, i);
  }
}

function getJobFamiliesForType(skillType) {
  const data = SKILLS_DATA[skillType];
  return data ? Object.keys(data).sort() : [];
}

function createDropdownGroup(label, id, options, visible) {
  const group = document.createElement('div');
  group.className = `skill-dropdown-group ${visible ? 'visible' : 'hidden'}`;
  group.id = `group-${id}`;

  const lbl = document.createElement('label');
  lbl.setAttribute('for', id);
  lbl.textContent = label;
  group.appendChild(lbl);

  const select = document.createElement('select');
  select.id = id;
  select.disabled = !visible;

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = `-- Select ${label} --`;
  select.appendChild(placeholder);

  options.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt;
    o.textContent = opt;
    select.appendChild(o);
  });

  group.appendChild(select);
  return group;
}

// ========== Cascading Dropdown Logic ==========
function setupCascade(skillType, index) {
  const jfSelect = document.getElementById(`${skillType}-${index}-jf`);
  const clusterSelect = document.getElementById(`${skillType}-${index}-cluster`);
  const skillSelect = document.getElementById(`${skillType}-${index}-skill`);
  const levelSelect = document.getElementById(`${skillType}-${index}-level`);

  // Job Family -> Cluster
  jfSelect.addEventListener('change', () => {
    const jf = jfSelect.value;
    resetDropdown(clusterSelect);
    resetDropdown(skillSelect);
    resetDropdown(levelSelect);
    hideGroup(`${skillType}-${index}-skill`);
    hideGroup(`${skillType}-${index}-level`);
    updateRowStatus(skillType, index);

    if (jf && SKILLS_DATA[skillType] && SKILLS_DATA[skillType][jf]) {
      const clusters = Object.keys(SKILLS_DATA[skillType][jf]).sort();
      populateDropdown(clusterSelect, clusters, 'Skill Cluster');
      showGroup(`${skillType}-${index}-cluster`);
    } else {
      hideGroup(`${skillType}-${index}-cluster`);
    }
  });

  // Cluster -> Skill
  clusterSelect.addEventListener('change', () => {
    const jf = jfSelect.value;
    const cluster = clusterSelect.value;
    resetDropdown(skillSelect);
    resetDropdown(levelSelect);
    hideGroup(`${skillType}-${index}-level`);
    updateRowStatus(skillType, index);

    if (cluster && SKILLS_DATA[skillType] && SKILLS_DATA[skillType][jf] && SKILLS_DATA[skillType][jf][cluster]) {
      const skills = SKILLS_DATA[skillType][jf][cluster].slice().sort();
      populateDropdown(skillSelect, skills, 'Skill');
      showGroup(`${skillType}-${index}-skill`);
    } else {
      hideGroup(`${skillType}-${index}-skill`);
    }
  });

  // Skill -> Level
  skillSelect.addEventListener('change', () => {
    const skill = skillSelect.value;
    resetDropdown(levelSelect);
    updateRowStatus(skillType, index);

    if (skill) {
      const levels = PROFICIENCY_LEVELS.map(l => `Level ${l.level} - ${l.summary}`);
      populateDropdown(levelSelect, levels, 'Proficiency Level');
      showGroup(`${skillType}-${index}-level`);
    } else {
      hideGroup(`${skillType}-${index}-level`);
    }
  });

  // Level change -> update row status
  levelSelect.addEventListener('change', () => {
    updateRowStatus(skillType, index);
  });

  // Validate page on every dropdown change
  [jfSelect, clusterSelect, skillSelect, levelSelect].forEach(sel => {
    sel.addEventListener('change', () => validateSkillPage(skillType));
  });
}

function populateDropdown(select, options, label) {
  select.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = `-- Select ${label} --`;
  select.appendChild(placeholder);

  options.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt;
    o.textContent = opt;
    select.appendChild(o);
  });

  select.disabled = false;
}

function resetDropdown(select) {
  select.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-- Select --';
  select.appendChild(placeholder);
  select.disabled = true;
}

function showGroup(id) {
  const group = document.getElementById(`group-${id}`);
  if (group) {
    group.classList.remove('hidden');
    group.classList.add('visible');
    group.querySelector('select').disabled = false;
  }
}

function hideGroup(id) {
  const group = document.getElementById(`group-${id}`);
  if (group) {
    group.classList.remove('visible');
    group.classList.add('hidden');
    group.querySelector('select').disabled = true;
  }
}

function updateRowStatus(skillType, index) {
  const row = document.querySelector(`.skill-row[data-index="${index}"][data-skill-type="${skillType}"]`);
  if (!row) {
    // Find by grid context
    const gridId = skillType === 'Competency' ? 'competency-grid' : skillType === 'SME' ? 'sme-grid' : 'technical-grid';
    const rows = document.querySelectorAll(`#${gridId} .skill-row`);
    if (rows[index]) {
      const levelSelect = document.getElementById(`${skillType}-${index}-level`);
      if (levelSelect && levelSelect.value) {
        rows[index].classList.add('completed-row');
      } else {
        rows[index].classList.remove('completed-row');
      }
    }
    return;
  }
  const levelSelect = document.getElementById(`${skillType}-${index}-level`);
  if (levelSelect && levelSelect.value) {
    row.classList.add('completed-row');
  } else {
    row.classList.remove('completed-row');
  }
}

// ========== Skill Page Validation ==========
// Maps page number to skill type
const PAGE_SKILL_MAP = {
  3: 'Competency',
  4: 'SME',
  5: 'Technical'
};

// Only page 3 (Competencies) is mandatory; SME and Technical are optional
const MANDATORY_SKILL_PAGES = [3];

function isSkillPageComplete(skillType) {
  for (let i = 0; i < 5; i++) {
    const jf = document.getElementById(`${skillType}-${i}-jf`)?.value || '';
    const cluster = document.getElementById(`${skillType}-${i}-cluster`)?.value || '';
    const skill = document.getElementById(`${skillType}-${i}-skill`)?.value || '';
    const level = document.getElementById(`${skillType}-${i}-level`)?.value || '';
    if (!jf || !cluster || !skill || !level) {
      return false;
    }
  }
  return true;
}

function getIncompleteRowCount(skillType) {
  let incomplete = 0;
  for (let i = 0; i < 5; i++) {
    const jf = document.getElementById(`${skillType}-${i}-jf`)?.value || '';
    const cluster = document.getElementById(`${skillType}-${i}-cluster`)?.value || '';
    const skill = document.getElementById(`${skillType}-${i}-skill`)?.value || '';
    const level = document.getElementById(`${skillType}-${i}-level`)?.value || '';
    if (!jf || !cluster || !skill || !level) {
      incomplete++;
    }
  }
  return incomplete;
}

function validateSkillPage(skillType) {
  // Find the page number for this skill type
  const pageNum = Object.keys(PAGE_SKILL_MAP).find(k => PAGE_SKILL_MAP[k] === skillType);
  if (!pageNum) return;

  const isMandatory = MANDATORY_SKILL_PAGES.includes(parseInt(pageNum));
  const btn = document.getElementById(`btn-next-${pageNum}`);
  const complete = isSkillPageComplete(skillType);

  // Optional pages always allow navigation; mandatory pages require completion
  btn.disabled = isMandatory ? !complete : false;

  // Update validation message (only for mandatory pages)
  const msgId = `validation-msg-${pageNum}`;
  let msg = document.getElementById(msgId);
  if (isMandatory && !complete) {
    const remaining = getIncompleteRowCount(skillType);
    if (!msg) {
      msg = document.createElement('div');
      msg.id = msgId;
      msg.className = 'validation-message';
      btn.parentElement.insertBefore(msg, btn);
    }
    msg.textContent = `Please complete all 5 rows (${remaining} remaining)`;
    msg.style.display = 'block';
  } else if (msg) {
    msg.style.display = 'none';
  }
}

// ========== Navigation ==========
function setupNavigation() {
  // Next buttons
  for (let i = 1; i < TOTAL_PAGES; i++) {
    const btn = document.getElementById(`btn-next-${i}`);
    if (btn) {
      // Disable Next on mandatory skill pages by default
      if (MANDATORY_SKILL_PAGES.includes(i)) {
        btn.disabled = true;
      }
      btn.addEventListener('click', () => {
        if (i === 1) {
          surveyState.employeeId = document.getElementById('employeeIdInput').value.trim();
          surveyState.jobFamily = document.getElementById('jobFamilyInput').value;
        }
        // Validate mandatory skill pages before allowing navigation
        if (MANDATORY_SKILL_PAGES.includes(i)) {
          const skillType = PAGE_SKILL_MAP[i];
          if (!isSkillPageComplete(skillType)) {
            validateSkillPage(skillType); // show message
            return; // block navigation
          }
        }
        goToPage(i + 1);
      });
    }
  }

  // Back buttons
  for (let i = 2; i <= TOTAL_PAGES; i++) {
    const btn = document.getElementById(`btn-back-${i}`);
    if (btn) {
      btn.addEventListener('click', () => goToPage(i - 1));
    }
  }

  // Submit button
  const submitBtn = document.getElementById('btn-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', handleSubmit);
  }
}

function goToPage(pageNum) {
  // If going to page 6, build summary
  if (pageNum === 6) {
    collectAllSkills();
    buildSummary();
  }

  // Hide current page
  document.getElementById(`page${currentPage}`).classList.remove('active');
  // Show new page
  document.getElementById(`page${pageNum}`).classList.add('active');

  currentPage = pageNum;
  updateProgressBar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBar() {
  const progress = (currentPage / TOTAL_PAGES) * 100;
  document.getElementById('progressBar').style.width = `${progress}%`;

  document.querySelectorAll('.progress-step').forEach(step => {
    const page = parseInt(step.dataset.page);
    step.classList.remove('active', 'completed');
    if (page === currentPage) {
      step.classList.add('active');
    } else if (page < currentPage) {
      step.classList.add('completed');
    }
  });
}

// ========== Certification ==========
function setupCertification() {
  const checkbox = document.getElementById('certifyCheckbox');
  const submitBtn = document.getElementById('btn-submit');

  checkbox.addEventListener('change', () => {
    submitBtn.disabled = !checkbox.checked;
  });
}

// ========== Collect Skills ==========
function collectSkillsFromGrid(skillType) {
  const skills = [];
  for (let i = 0; i < 5; i++) {
    const jf = document.getElementById(`${skillType}-${i}-jf`)?.value || '';
    const cluster = document.getElementById(`${skillType}-${i}-cluster`)?.value || '';
    const skill = document.getElementById(`${skillType}-${i}-skill`)?.value || '';
    const level = document.getElementById(`${skillType}-${i}-level`)?.value || '';

    if (jf && cluster && skill && level) {
      skills.push({ jobFamily: jf, cluster, skill, level });
    }
  }
  return skills;
}

function collectAllSkills() {
  surveyState.competencies = collectSkillsFromGrid('Competency');
  surveyState.sme = collectSkillsFromGrid('SME');
  surveyState.technical = collectSkillsFromGrid('Technical');
}

// ========== Summary ==========
function buildSummary() {
  const container = document.getElementById('responseSummary');
  container.innerHTML = '<h3>Your Selections Summary</h3>';

  const sections = [
    { title: 'Competencies Skills', data: surveyState.competencies },
    { title: 'SME Skills', data: surveyState.sme },
    { title: 'Technical Skills', data: surveyState.technical }
  ];

  sections.forEach(section => {
    const group = document.createElement('div');
    group.className = 'summary-group';

    const h4 = document.createElement('h4');
    h4.textContent = section.title;
    group.appendChild(h4);

    if (section.data.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'summary-empty';
      empty.textContent = 'No skills selected';
      group.appendChild(empty);
    } else {
      section.data.forEach((entry, idx) => {
        const item = document.createElement('div');
        item.className = 'summary-item';

        const num = document.createElement('span');
        num.className = 'summary-num';
        num.textContent = `${idx + 1}.`;
        item.appendChild(num);

        const text = document.createElement('span');
        text.textContent = `${entry.jobFamily} \u2192 ${entry.cluster} \u2192 ${entry.skill} \u2192 ${entry.level}`;
        item.appendChild(text);

        group.appendChild(item);
      });
    }

    container.appendChild(group);
  });
}

// ========== Submit ==========
async function handleSubmit() {
  const submitBtn = document.getElementById('btn-submit');
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;

  collectAllSkills();

  const payload = {
    employee_id: surveyState.employeeId,
    job_family: surveyState.jobFamily,
    competencies: surveyState.competencies,
    sme: surveyState.sme,
    technical: surveyState.technical
  };

  if (!SUPABASE_URL) {
    // No Supabase URL configured - show data in console and succeed
    console.log('Survey Response:', JSON.stringify(payload, null, 2));
    showSuccess();
    return;
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/survey_responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Server responded with ${response.status}: ${errorBody}`);
    }

    showSuccess();
  } catch (error) {
    console.error('Submission error:', error);
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    alert('There was an error submitting your survey. Please try again.');
  }
}

function showSuccess() {
  const submitBtn = document.getElementById('btn-submit');
  submitBtn.classList.remove('loading');

  // Hide form content, show success
  document.querySelector('#page6 .closing-content').style.display = 'none';
  document.querySelector('#page6 .nav-buttons').style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
}
