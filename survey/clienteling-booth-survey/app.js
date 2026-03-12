// ========== Supabase Client ==========
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========== State ==========
let currentPage = 1;
const TOTAL_PAGES = 3;

const surveyState = {
  name:    '',
  email:   '',
  cohort:  '',
  clients: '',
  answers: {}  // { q5: 1, q6: 2, ... } — value is 1, 2, or 3 (choice index)
};

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', () => {
  populateCohorts();
  buildSegmentQuestions();
  setupPage1Validation();
  setupNavigation();
});

// ========== Page 1: Cohort dropdown ==========
function populateCohorts() {
  const select = document.getElementById('q3-select');
  COHORTS.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });
}

// ========== Page 1: Validation ==========
function setupPage1Validation() {
  const nameInput    = document.getElementById('q1-input');
  const usernameInput = document.getElementById('q2-username');
  const cohortSelect = document.getElementById('q3-select');
  const clientsInput = document.getElementById('q4-input');
  const nextBtn      = document.getElementById('btn-next-1');

  const validate = () => {
    const nameOk    = nameInput.value.trim().length > 0;
    // For button enable: just needs some text, no @ or spaces (dot checked on click)
    const emailFilled = usernameInput.value.trim().length > 0 && !/[@\s]/.test(usernameInput.value.trim());
    const cohortOk  = cohortSelect.value !== '';
    const clientsOk = clientsInput.value.trim().length > 0;
    nextBtn.disabled = !(nameOk && emailFilled && cohortOk && clientsOk);
  };

  [nameInput, usernameInput, cohortSelect, clientsInput].forEach(el => {
    el.addEventListener('input', validate);
    el.addEventListener('change', validate);
  });

  // Show email error on blur if invalid
  const q2Error = document.getElementById('q2-error');
  usernameInput.addEventListener('blur', () => {
    const username = usernameInput.value.trim();
    if (username.length > 0 && !isValidUsername(username)) {
      q2Error.style.display = 'block';
    } else {
      q2Error.style.display = 'none';
    }
  });
  usernameInput.addEventListener('input', () => {
    if (q2Error.style.display === 'block' && isValidUsername(usernameInput.value.trim())) {
      q2Error.style.display = 'none';
    }
  });
}

function isValidUsername(username) {
  // Must be non-empty, contain a '.', and not contain @ or spaces
  return username.length > 0 && username.includes('.') && !/[@\s]/.test(username);
}

// ========== Page 2: Build segment questions ==========
function buildSegmentQuestions() {
  const container = document.getElementById('questions-container');

  SEGMENT_QUESTIONS.forEach(q => {
    const block = document.createElement('div');
    block.className = 'question-block';

    const qText = document.createElement('div');
    qText.className = 'question-text';

    const qNum = document.createElement('span');
    qNum.className = 'q-num';
    qNum.textContent = q.id.replace('q', '');
    qText.appendChild(qNum);
    qText.appendChild(document.createTextNode(q.text));
    block.appendChild(qText);

    const grid = document.createElement('div');
    grid.className = 'options-grid';

    q.options.forEach((opt, idx) => {
      const card = document.createElement('div');
      card.className = 'option-card';

      const indicator = document.createElement('div');
      indicator.className = 'option-indicator';
      indicator.textContent = String.fromCharCode(65 + idx); // A, B, C

      const text = document.createElement('div');
      text.className = 'option-text';
      text.textContent = opt;

      card.appendChild(indicator);
      card.appendChild(text);

      card.addEventListener('click', () => {
        grid.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        surveyState.answers[q.id] = idx + 1; // store as 1, 2, or 3
        validatePage2();
      });

      grid.appendChild(card);
    });

    block.appendChild(grid);
    container.appendChild(block);
  });
}

function validatePage2() {
  const allAnswered = SEGMENT_QUESTIONS.every(q => surveyState.answers[q.id] !== undefined);
  document.getElementById('btn-next-2').disabled = !allAnswered;
}

// ========== Navigation ==========
function setupNavigation() {
  document.getElementById('btn-next-1').addEventListener('click', () => {
    const username = document.getElementById('q2-username').value.trim();
    const q2Error  = document.getElementById('q2-error');

    // Validate email dot on click
    if (!isValidUsername(username)) {
      q2Error.style.display = 'block';
      return;
    }
    q2Error.style.display = 'none';

    surveyState.name    = document.getElementById('q1-input').value.trim();
    surveyState.email   = username + '@bcg.com';
    surveyState.cohort  = document.getElementById('q3-select').value;
    surveyState.clients = document.getElementById('q4-input').value.trim();
    goToPage(2);
  });

  document.getElementById('btn-next-2').addEventListener('click', async () => {
    surveyState.segment = calculateSegment();
    buildResultsPage(surveyState.segment);
    goToPage(3);
    await submitResponse(surveyState.segment);
  });

  document.getElementById('btn-back-2').addEventListener('click', () => goToPage(1));
}

function goToPage(pageNum) {
  document.getElementById(`page${currentPage}`).classList.remove('active');
  document.getElementById(`page${pageNum}`).classList.add('active');
  currentPage = pageNum;
  updateProgressBar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBar() {
  document.getElementById('progressBar').style.width = `${(currentPage / TOTAL_PAGES) * 100}%`;
  document.querySelectorAll('.progress-step').forEach(step => {
    const page = parseInt(step.dataset.page);
    step.classList.remove('active', 'completed');
    if (page === currentPage) step.classList.add('active');
    else if (page < currentPage) step.classList.add('completed');
  });
}

// ========== Segment Calculation ==========
function calculateSegment() {
  const counts = { 1: 0, 2: 0, 3: 0 };

  SEGMENT_QUESTIONS.forEach(q => {
    const answer = surveyState.answers[q.id];
    if (answer !== undefined) counts[answer]++;
  });

  const max = Math.max(counts[1], counts[2], counts[3]);
  const leaders = [1, 2, 3].filter(c => counts[c] === max);

  // Clear winner
  if (leaders.length === 1) {
    return choiceToSegment(leaders[0]);
  }

  // Tie — use Q7 answer as tiebreaker
  const q7 = surveyState.answers['q7'];
  return choiceToSegment(q7);
}

function choiceToSegment(choice) {
  if (choice === 1) return 'Airport Athlete';
  if (choice === 2) return 'Innovation Fanatic';
  return 'Brand Loyalist';
}

// ========== Build Results Page ==========
function buildResultsPage(segmentKey) {
  const container = document.getElementById('resultsContent');
  const seg = SEGMENTS[segmentKey];
  const firstName = surveyState.name.split(' ')[0];

  const displayName = 'THE ' + segmentKey.toUpperCase() + '!';

  container.innerHTML = `
    <div class="segment-card">
      <div class="segment-icon">${seg.icon}</div>
      <div class="congrats-text">Congratulations, ${escapeHtml(firstName)}! You are&hellip;</div>
      <div class="segment-name">${displayName}</div>
      <p class="segment-description">${seg.description}</p>
      <div class="merchandise-badge">
        <span class="merch-label">Your exclusive merchandise:</span>
        <span class="merch-name">${seg.merchandise}</span>
      </div>
    </div>
  `;
}

// ========== Supabase Submit ==========
async function submitResponse(segmentKey) {
  try {
    const { error } = await _supabase.from('clienteling_responses').insert([{
      name:    surveyState.name,
      email:   surveyState.email,
      cohort:  surveyState.cohort,
      clients: surveyState.clients,
      q5:      surveyState.answers.q5,
      q6:      surveyState.answers.q6,
      q7:      surveyState.answers.q7,
      q8:      surveyState.answers.q8,
      q9:      surveyState.answers.q9,
      q10:     surveyState.answers.q10,
      segment: segmentKey
    }]);
    if (error) console.error('Supabase error:', error.message);
  } catch (err) {
    console.error('Submit failed:', err);
  }
}

// ========== Helpers ==========
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
