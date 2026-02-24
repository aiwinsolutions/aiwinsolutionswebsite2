// ========== Configuration ==========
// Supabase project settings (anon key is safe to expose — RLS protects data)
const SUPABASE_URL = 'https://mytwbqzdoeyvfryailaz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15dHdicXpkb2V5dmZyeWFpbGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzODkwMTIsImV4cCI6MjA4Njk2NTAxMn0.szWgDoagFyczW60VWoId89hICtNIuybMoViVJ7p06vo';

// ========== State ==========
let currentPage = 1;
const TOTAL_PAGES = 4;
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
      errMsg.textContent = 'Please enter a valid employee ID.';
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

        // If already submitted, block re-entry with inline message
        if (existing.is_submitted) {
          if (errMsg) {
            errMsg.textContent = 'You have already submitted this survey. Thank you for your participation!';
            errMsg.style.display = 'block';
          }
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
      // Job Family dropdown locked to "General" (visible but disabled for alignment)
      const jfGroup = createDropdownGroup('Job Family', `${skillType}-${i}-jf`, ['General'], true);
      row.appendChild(jfGroup);

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

    // Add "Other" text input inside the Skill dropdown group (below the <select>)
    const skillGroup = document.getElementById(`group-${skillType}-${i}-skill`);
    if (skillGroup) {
      const otherInput = document.createElement('input');
      otherInput.type = 'text';
      otherInput.id = `${skillType}-${i}-other`;
      otherInput.placeholder = 'Type your skill (max 140 chars)';
      otherInput.maxLength = 140;
      otherInput.disabled = true;
      otherInput.className = 'other-skill-input';
      otherInput.style.display = 'none';
      otherInput.autocomplete = 'off';
      skillGroup.appendChild(otherInput);
    }

    // Pre-select "General" and lock JF dropdown for hardcoded types
    if (isHardcodedJF) {
      const jfSelect = document.getElementById(`${skillType}-${i}-jf`);
      jfSelect.value = 'General';
      jfSelect.disabled = true;
      jfSelect.classList.add('locked-jf');
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
    // Reset "Other" text input
    const otherInputJF = document.getElementById(`${skillType}-${index}-other`);
    if (otherInputJF) { otherInputJF.style.display = 'none'; otherInputJF.value = ''; otherInputJF.disabled = true; }
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
    // Reset "Other" text input
    const otherInputCL = document.getElementById(`${skillType}-${index}-other`);
    if (otherInputCL) { otherInputCL.style.display = 'none'; otherInputCL.value = ''; otherInputCL.disabled = true; }
    updateRowStatus(skillType, index);

    if (cluster && SKILLS_DATA[skillType] && SKILLS_DATA[skillType][jf] && SKILLS_DATA[skillType][jf][cluster]) {
      const skills = SKILLS_DATA[skillType][jf][cluster].slice().sort();
      skills.push('Other');  // Add "Other" as last option
      populateDropdown(skillSelect, skills, 'Skill');
      showGroup(`${skillType}-${index}-skill`);
    } else {
      hideGroup(`${skillType}-${index}-skill`);
    }
  });

  // Skill -> Level (with "Other" handling)
  const otherInput = document.getElementById(`${skillType}-${index}-other`);

  skillSelect.addEventListener('change', () => {
    const skill = skillSelect.value;
    resetDropdown(levelSelect);
    updateRowStatus(skillType, index);

    if (skill === 'Other') {
      // Show "Other" text input below the Skill dropdown, hide Level until text entered
      if (otherInput) {
        otherInput.style.display = 'block';
        otherInput.disabled = false;
        otherInput.value = '';
        otherInput.focus();
      }
      hideGroup(`${skillType}-${index}-level`);
    } else {
      // Hide "Other" text input
      if (otherInput) {
        otherInput.style.display = 'none';
        otherInput.disabled = true;
        otherInput.value = '';
      }
      if (skill) {
        const levels = PROFICIENCY_LEVELS.map(l => `Level ${l.level} - ${l.summary}`);
        populateDropdown(levelSelect, levels, 'Proficiency Level');
        showGroup(`${skillType}-${index}-level`);
      } else {
        hideGroup(`${skillType}-${index}-level`);
      }
    }
  });

  // "Other" text input -> show Level when text is entered
  if (otherInput) {
    otherInput.addEventListener('input', () => {
      if (otherInput.value.trim()) {
        // Only populate Level if it isn't already populated (preserve user's selection)
        if (levelSelect.options.length <= 1 || levelSelect.disabled) {
          const levels = PROFICIENCY_LEVELS.map(l => `Level ${l.level} - ${l.summary}`);
          populateDropdown(levelSelect, levels, 'Proficiency Level');
        }
        showGroup(`${skillType}-${index}-level`);
      } else {
        resetDropdown(levelSelect);
        hideGroup(`${skillType}-${index}-level`);
      }
      updateRowStatus(skillType, index);
      validateSkillsPage();
    });
  }

  // Level change -> update row status
  levelSelect.addEventListener('change', () => {
    updateRowStatus(skillType, index);
  });

  // Validate skills page on every dropdown change (cross-grid validation)
  [jfSelect, clusterSelect, skillSelect, levelSelect].forEach(sel => {
    sel.addEventListener('change', () => validateSkillsPage());
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

function isRowComplete(skillType, index) {
  const jf = document.getElementById(`${skillType}-${index}-jf`)?.value || '';
  const cluster = document.getElementById(`${skillType}-${index}-cluster`)?.value || '';
  const skill = document.getElementById(`${skillType}-${index}-skill`)?.value || '';
  const level = document.getElementById(`${skillType}-${index}-level`)?.value || '';

  if (skill === 'Other') {
    const otherText = document.getElementById(`${skillType}-${index}-other`)?.value?.trim() || '';
    return !!(jf && cluster && otherText && level);
  }
  return !!(jf && cluster && skill && level);
}

function updateRowStatus(skillType, index) {
  const row = document.querySelector(`.skill-row[data-index="${index}"][data-skill-type="${skillType}"]`);
  const complete = isRowComplete(skillType, index);

  if (!row) {
    // Find by grid context
    const gridId = skillType === 'Competency' ? 'competency-grid' : skillType === 'SME' ? 'sme-grid' : 'technical-grid';
    const rows = document.querySelectorAll(`#${gridId} .skill-row`);
    if (rows[index]) {
      rows[index].classList.toggle('completed-row', complete);
    }
    return;
  }
  row.classList.toggle('completed-row', complete);
}

// ========== Skills Page Validation (Cross-Grid) ==========
function getCompletedRowCount(skillType) {
  let completed = 0;
  for (let i = 0; i < 5; i++) {
    if (isRowComplete(skillType, i)) completed++;
  }
  return completed;
}

function getTotalCompletedRows() {
  return getCompletedRowCount('Competency')
       + getCompletedRowCount('SME')
       + getCompletedRowCount('Technical');
}

function validateSkillsPage() {
  const btn = document.getElementById('btn-next-3');
  if (!btn) return;

  const total = getTotalCompletedRows();
  const isComplete = total >= 3;

  btn.disabled = !isComplete;

  // Update validation message
  const msgId = 'validation-msg-3';
  let msg = document.getElementById(msgId);
  if (!isComplete) {
    const moreNeeded = 3 - total;
    if (!msg) {
      msg = document.createElement('div');
      msg.id = msgId;
      msg.className = 'validation-message';
      btn.parentElement.insertBefore(msg, btn);
    }
    msg.textContent = `Please complete at least 3 skill rows across all sections (${moreNeeded} more needed)`;
    msg.style.display = 'block';
  } else if (msg) {
    msg.style.display = 'none';
  }
}

// ========== Navigation ==========
function setupNavigation() {
  // Page 1 Next button
  const btn1 = document.getElementById('btn-next-1');
  if (btn1) {
    btn1.addEventListener('click', async () => {
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
      goToPage(2);
    });
  }

  // Page 2 Next button (Instructions → Skills, no validation needed)
  const btn2 = document.getElementById('btn-next-2');
  if (btn2) {
    btn2.addEventListener('click', () => {
      goToPage(3);
    });
  }

  // Page 3 Next button (Skills → Submit, requires cross-grid validation)
  const btn3 = document.getElementById('btn-next-3');
  if (btn3) {
    btn3.disabled = true; // start disabled
    btn3.addEventListener('click', () => {
      if (getTotalCompletedRows() < 3) {
        validateSkillsPage(); // show message
        return; // block navigation
      }
      goToPage(4);
      autoSave();
    });
  }

  // Back buttons
  const btnBack2 = document.getElementById('btn-back-2');
  if (btnBack2) {
    btnBack2.addEventListener('click', () => goToPage(1));
  }

  const btnBack3 = document.getElementById('btn-back-3');
  if (btnBack3) {
    btnBack3.addEventListener('click', () => {
      goToPage(2);
      autoSave();
    });
  }

  const btnBack4 = document.getElementById('btn-back-4');
  if (btnBack4) {
    btnBack4.addEventListener('click', () => goToPage(3));
  }

  // Submit button
  const submitBtn = document.getElementById('btn-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', handleSubmit);
  }
}

function goToPage(pageNum) {
  // If going to page 4 (Submit), build summary
  if (pageNum === 4) {
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

    // Handle "Other" skill with custom text
    if (skill === 'Other') {
      const otherText = document.getElementById(`${skillType}-${i}-other`)?.value?.trim() || '';
      if (jf && cluster && otherText && level) {
        skills.push({ jobFamily: jf, cluster, skill, level, otherSkill: otherText });
      }
    } else if (jf && cluster && skill && level) {
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
    { title: 'Competencies', data: surveyState.competencies },
    { title: 'Technical Skills', data: surveyState.technical },
    { title: 'SME Skills', data: surveyState.sme }
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
        const displaySkill = entry.skill === 'Other' && entry.otherSkill
          ? `Other: "${entry.otherSkill}"`
          : entry.skill;
        text.textContent = `${entry.jobFamily} \u2192 ${entry.cluster} \u2192 ${displaySkill} \u2192 ${entry.level}`;
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
// Map old 6-page numbers to new 4-page numbers (for existing drafts)
function mapOldPageToNew(oldPage) {
  if (oldPage <= 2) return oldPage;     // 1→1, 2→2
  if (oldPage <= 5) return 3;           // 3,4,5→3 (all skill pages → single skills page)
  return 4;                              // 6→4 (submit)
}

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

  // Navigate to saved page (mapped from old page numbers, minimum page 2)
  let targetPage = data.current_page && data.current_page > 1 ? data.current_page : 2;
  // Map old page numbers (if draft was saved with 6-page layout)
  if (targetPage > 4) {
    targetPage = mapOldPageToNew(targetPage);
  }
  goToPage(targetPage);

  // Re-validate skills page
  validateSkillsPage();
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
    // Trigger cascade: populate skills (include "Other")
    const jf = isHardcoded ? 'General' : skillData.jobFamily;
    if (SKILLS_DATA[skillType] && SKILLS_DATA[skillType][jf] && SKILLS_DATA[skillType][jf][skillData.cluster]) {
      const skills = SKILLS_DATA[skillType][jf][skillData.cluster].slice().sort();
      skills.push('Other');
      const skillSelect = document.getElementById(`${skillType}-${index}-skill`);
      populateDropdown(skillSelect, skills, 'Skill');
      showGroup(`${skillType}-${index}-skill`);
    }
  }

  // Step 3: Set Skill
  if (skillData.skill) {
    const skillSelect = document.getElementById(`${skillType}-${index}-skill`);
    skillSelect.value = skillData.skill;

    // If "Other", show and populate the text input
    if (skillData.skill === 'Other' && skillData.otherSkill) {
      const otherInput = document.getElementById(`${skillType}-${index}-other`);
      if (otherInput) {
        otherInput.style.display = 'block';
        otherInput.disabled = false;
        otherInput.value = skillData.otherSkill;
      }
    }

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
    current_page: 4,
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
  document.querySelector('#page4 .closing-content').style.display = 'none';
  document.querySelector('#page4 .nav-buttons').style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
}
