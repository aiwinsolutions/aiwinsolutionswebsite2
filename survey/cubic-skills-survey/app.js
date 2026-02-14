// ========== Configuration ==========
// Supabase project settings (anon key is safe to expose — RLS protects data)
const SUPABASE_URL = 'https://izeamxdmfpvcadvskczf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6ZWFteGRtZnB2Y2FkdnNrY3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MzEwNzYsImV4cCI6MjA4NjUwNzA3Nn0.JPObhs93_BtEbclKTTbjZDVWC-gyDigwcXVAgq1quD4';

// ========== State ==========
let currentPage = 1;
const TOTAL_PAGES = 6;
let isRestoringData = false; // flag to prevent auto-save during restore
let existingRowFound = false; // track whether a row already exists for this employee

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
let employeeIdLookupTimer = null;
let lastLookedUpId = '';

function setupPage1Validation() {
  const employeeIdInput = document.getElementById('employeeIdInput');
  const jf = document.getElementById('jobFamilyInput');
  const btn = document.getElementById('btn-next-1');
  const jfGroup = document.getElementById('jobFamilyGroup');

  const validate = () => {
    btn.disabled = !(employeeIdInput.value.trim() && jf.value);
  };

  // When Employee ID changes, trigger lookup immediately when 6 digits entered
  employeeIdInput.addEventListener('input', () => {
    const id = employeeIdInput.value.trim();

    // Hide JF and disable Next if ID is cleared
    if (!id) {
      jfGroup.style.display = 'none';
      btn.disabled = true;
      lastLookedUpId = '';
      // Clear any error message
      const errMsg = document.getElementById('employee-id-error');
      if (errMsg) errMsg.style.display = 'none';
      return;
    }

    // Trigger immediately when exactly 6 digits are entered
    if (/^\d{6}$/.test(id) && id !== lastLookedUpId) {
      clearTimeout(employeeIdLookupTimer);
      lookupEmployeeId(id);
    } else if (id.length < 6) {
      // Clear previous results while still typing
      clearTimeout(employeeIdLookupTimer);
      jfGroup.style.display = 'none';
      btn.disabled = true;
      const errMsg = document.getElementById('employee-id-error');
      if (errMsg) errMsg.style.display = 'none';
    }
  });

  // Also trigger lookup on blur (tab/click away)
  employeeIdInput.addEventListener('blur', () => {
    const id = employeeIdInput.value.trim();
    if (id && id !== lastLookedUpId) {
      clearTimeout(employeeIdLookupTimer);
      lookupEmployeeId(id);
    }
  });

  jf.addEventListener('change', validate);
}

async function lookupEmployeeId(id) {
  lastLookedUpId = id;
  const jfGroup = document.getElementById('jobFamilyGroup');
  const jfSelect = document.getElementById('jobFamilyInput');
  const btn = document.getElementById('btn-next-1');

  // Validate against whitelist
  const errMsg = document.getElementById('employee-id-error');
  if (typeof VALID_EMPLOYEE_IDS !== 'undefined' && !VALID_EMPLOYEE_IDS.has(id)) {
    if (errMsg) {
      errMsg.textContent = 'Invalid Employee ID. Please enter a valid employee ID.';
      errMsg.style.display = 'block';
    }
    jfGroup.style.display = 'none';
    btn.disabled = true;
    return;
  }

  // Clear any previous error
  if (errMsg) errMsg.style.display = 'none';

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/survey_responses?employee_id=eq.${encodeURIComponent(id)}&select=*`,
      {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.length > 0) {
        const existing = data[0];
        existingRowFound = true;

        // If already submitted, block re-entry
        if (existing.is_submitted) {
          alert('You have already submitted this survey. Thank you for your participation!');
          jfGroup.style.display = 'none';
          btn.disabled = true;
          return;
        }

        // Pre-fill Job Family from saved data
        if (existing.job_family) {
          jfSelect.value = existing.job_family;
          surveyState.jobFamily = existing.job_family;
        }

        // Store existing data for resume later
        window._existingDraft = existing;
      } else {
        existingRowFound = false;
        window._existingDraft = null;
        jfSelect.value = '';
      }
    }
  } catch (error) {
    console.error('Employee ID lookup error:', error);
  }

  // Show the Job Family dropdown (table-row for <tr> element)
  jfGroup.style.display = 'table-row';

  // Validate
  btn.disabled = !(document.getElementById('employeeIdInput').value.trim() && jfSelect.value);
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
  let completed = 0;
  for (let i = 0; i < 5; i++) {
    const jf = document.getElementById(`${skillType}-${i}-jf`)?.value || '';
    const cluster = document.getElementById(`${skillType}-${i}-cluster`)?.value || '';
    const skill = document.getElementById(`${skillType}-${i}-skill`)?.value || '';
    const level = document.getElementById(`${skillType}-${i}-level`)?.value || '';
    if (jf && cluster && skill && level) {
      completed++;
    }
  }
  return completed >= 3;
}

function getCompletedRowCount(skillType) {
  let completed = 0;
  for (let i = 0; i < 5; i++) {
    const jf = document.getElementById(`${skillType}-${i}-jf`)?.value || '';
    const cluster = document.getElementById(`${skillType}-${i}-cluster`)?.value || '';
    const skill = document.getElementById(`${skillType}-${i}-skill`)?.value || '';
    const level = document.getElementById(`${skillType}-${i}-level`)?.value || '';
    if (jf && cluster && skill && level) {
      completed++;
    }
  }
  return completed;
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
    const completed = getCompletedRowCount(skillType);
    const moreNeeded = 3 - completed;
    if (!msg) {
      msg = document.createElement('div');
      msg.id = msgId;
      msg.className = 'validation-message';
      btn.parentElement.insertBefore(msg, btn);
    }
    msg.textContent = `Please complete at least 3 rows (${moreNeeded} more needed)`;
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
      btn.addEventListener('click', async () => {
        if (i === 1) {
          surveyState.employeeId = document.getElementById('employeeIdInput').value.trim();
          surveyState.jobFamily = document.getElementById('jobFamilyInput').value;

          // Check for existing draft and offer to resume
          if (window._existingDraft) {
            const existing = window._existingDraft;
            const hasData = (existing.competencies && existing.competencies.length > 0) ||
                            (existing.sme && existing.sme.length > 0) ||
                            (existing.technical && existing.technical.length > 0);
            if (hasData) {
              const resume = confirm('We found your previous progress. Would you like to continue where you left off?');
              if (resume) {
                await restoreState(existing);
                return;
              }
            }
          }
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

        // Auto-save progress after navigating away from skill pages
        if (i >= 2 && i <= 5) {
          autoSave();
        }
      });
    }
  }

  // Back buttons
  for (let i = 2; i <= TOTAL_PAGES; i++) {
    const btn = document.getElementById(`btn-back-${i}`);
    if (btn) {
      btn.addEventListener('click', () => {
        goToPage(i - 1);
        // Auto-save when going back from skill pages
        if (i >= 3 && i <= 6) {
          autoSave();
        }
      });
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

// ========== Auto-Save ==========
async function saveToSupabase(payload, isUpdate) {
  const headers = {
    'Content-Type': 'application/json',
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Prefer': 'return=minimal'
  };

  if (isUpdate) {
    // PATCH existing row by employee_id
    return fetch(
      `${SUPABASE_URL}/rest/v1/survey_responses?employee_id=eq.${encodeURIComponent(payload.employee_id)}`,
      { method: 'PATCH', headers, body: JSON.stringify(payload) }
    );
  } else {
    // INSERT new row
    return fetch(
      `${SUPABASE_URL}/rest/v1/survey_responses`,
      { method: 'POST', headers, body: JSON.stringify(payload) }
    );
  }
}

async function autoSave() {
  if (!surveyState.employeeId || !SUPABASE_URL || isRestoringData) return;

  collectAllSkills();

  const payload = {
    employee_id: surveyState.employeeId,
    job_family: surveyState.jobFamily,
    competencies: surveyState.competencies,
    sme: surveyState.sme,
    technical: surveyState.technical,
    current_page: currentPage,
    is_submitted: false
  };

  try {
    const response = await saveToSupabase(payload, existingRowFound);

    if (response.ok) {
      existingRowFound = true; // after first successful save, always update
      console.log('Progress auto-saved');
    } else if (response.status === 409) {
      // Conflict = row already exists, switch to update mode
      existingRowFound = true;
      const retryResponse = await saveToSupabase(payload, true);
      if (retryResponse.ok) console.log('Progress auto-saved (retry)');
    }
  } catch (error) {
    console.error('Auto-save error:', error);
  }
}

// ========== Restore State from Saved Data ==========
async function restoreState(data) {
  isRestoringData = true;

  // Restore job family
  if (data.job_family) {
    document.getElementById('jobFamilyInput').value = data.job_family;
    surveyState.jobFamily = data.job_family;
  }

  // Restore skill grids
  const skillTypes = [
    { key: 'competencies', type: 'Competency' },
    { key: 'sme', type: 'SME' },
    { key: 'technical', type: 'Technical' }
  ];

  for (const { key, type } of skillTypes) {
    const skills = data[key] || [];
    for (let i = 0; i < skills.length && i < 5; i++) {
      await restoreSkillRow(type, i, skills[i]);
    }
  }

  // Update surveyState
  surveyState.competencies = data.competencies || [];
  surveyState.sme = data.sme || [];
  surveyState.technical = data.technical || [];

  isRestoringData = false;

  // Navigate to saved page (or page 2 minimum, since they just passed page 1)
  const targetPage = data.current_page && data.current_page > 1 ? data.current_page : 2;
  goToPage(targetPage);

  // Re-validate skill pages
  Object.values(PAGE_SKILL_MAP).forEach(st => validateSkillPage(st));
}

async function restoreSkillRow(skillType, index, skillData) {
  const isHardcoded = HARDCODED_JF_TYPES.includes(skillType);

  // Step 1: Set Job Family
  const jfSelect = document.getElementById(`${skillType}-${index}-jf`);
  if (!isHardcoded && skillData.jobFamily) {
    jfSelect.value = skillData.jobFamily;
    // Trigger cascade: populate clusters
    const jf = skillData.jobFamily;
    if (SKILLS_DATA[skillType] && SKILLS_DATA[skillType][jf]) {
      const clusters = Object.keys(SKILLS_DATA[skillType][jf]).sort();
      const clusterSelect = document.getElementById(`${skillType}-${index}-cluster`);
      populateDropdown(clusterSelect, clusters, 'Skill Cluster');
      showGroup(`${skillType}-${index}-cluster`);
    }
  }

  // Step 2: Set Skill Cluster
  if (skillData.cluster) {
    const clusterSelect = document.getElementById(`${skillType}-${index}-cluster`);
    clusterSelect.value = skillData.cluster;
    // Trigger cascade: populate skills
    const jf = isHardcoded ? 'General' : skillData.jobFamily;
    if (SKILLS_DATA[skillType] && SKILLS_DATA[skillType][jf] && SKILLS_DATA[skillType][jf][skillData.cluster]) {
      const skills = SKILLS_DATA[skillType][jf][skillData.cluster].slice().sort();
      const skillSelect = document.getElementById(`${skillType}-${index}-skill`);
      populateDropdown(skillSelect, skills, 'Skill');
      showGroup(`${skillType}-${index}-skill`);
    }
  }

  // Step 3: Set Skill
  if (skillData.skill) {
    const skillSelect = document.getElementById(`${skillType}-${index}-skill`);
    skillSelect.value = skillData.skill;
    // Trigger cascade: populate levels
    const levels = PROFICIENCY_LEVELS.map(l => `Level ${l.level} - ${l.summary}`);
    const levelSelect = document.getElementById(`${skillType}-${index}-level`);
    populateDropdown(levelSelect, levels, 'Proficiency Level');
    showGroup(`${skillType}-${index}-level`);
  }

  // Step 4: Set Level
  if (skillData.level) {
    const levelSelect = document.getElementById(`${skillType}-${index}-level`);
    levelSelect.value = skillData.level;
  }

  // Update row status
  updateRowStatus(skillType, index);
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
    technical: surveyState.technical,
    current_page: 6,
    is_submitted: true
  };

  if (!SUPABASE_URL) {
    // No Supabase URL configured - show data in console and succeed
    console.log('Survey Response:', JSON.stringify(payload, null, 2));
    showSuccess();
    return;
  }

  try {
    // Save as submitted (update if row exists, insert if new)
    let response = await saveToSupabase(payload, existingRowFound);

    // If insert failed with conflict, retry as update
    if (!response.ok && response.status === 409) {
      existingRowFound = true;
      response = await saveToSupabase(payload, true);
    }

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
