// Get DOM elements
const editBtn = document.getElementById('edit-btn');
const modal = document.getElementById('edit-modal');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');

// Form inputs
const editName = document.getElementById('edit-name');
const editUsername = document.getElementById('edit-username');
const editCountry = document.getElementById('edit-country');
const editAvatarFile = document.getElementById('edit-avatar-file');


// Profile display elements
const nameEl = document.getElementById('name');
const usernameEl = document.getElementById('username');
const locationEl = document.getElementById('location');
const avatarImg = document.getElementById('avatar-img');

// 🟢 Open modal and prefill values
editBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  editName.value = nameEl.textContent;
  editUsername.value = usernameEl.textContent.replace("@", "");
  editCountry.value = locationEl.textContent.split("•").pop().trim().replace("🇮🇳", "").trim();
  editAvatarFile.value = ""; // reset file input
});

// 🔴 Cancel modal
cancelBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// ✅ Save and update profile
saveBtn.addEventListener('click', () => {
  nameEl.textContent = editName.value;
  usernameEl.textContent = `@${editUsername.value}`;
  locationEl.innerHTML = `🏆 Rank: 1256 • 🌍 Global Score: 8950 • 🇮🇳 ${editCountry.value}`;
  // Handle avatar file upload and preview
  const file = editAvatarFile.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      avatarImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  modal.classList.add('hidden');
});


// Problem Stats Section

// Problem stats elements
// Stats data
const easySolved = 125, easyTotal = 200;
const mediumSolved = 100, mediumTotal = 150;
const hardSolved = 50, hardTotal = 50;

// Update stats UI
document.getElementById('easy-solved').textContent = easySolved;
document.getElementById('easy-total').textContent = easyTotal;
document.getElementById('medium-solved').textContent = mediumSolved;
document.getElementById('medium-total').textContent = mediumTotal;
document.getElementById('hard-solved').textContent = hardSolved;
document.getElementById('hard-total').textContent = hardTotal;

// Render circular progress
function renderProgress(solved, total, chartId) {
  const percent = total ? Math.round((solved / total) * 100) : 0;
  const chart = document.getElementById(chartId);
  chart.querySelector('.chart-percentage').textContent = `${percent}%`;
  chart.querySelector('.circle-fg').setAttribute('stroke-dasharray', `${percent} ${100 - percent}`);
}
renderProgress(easySolved, easyTotal, 'easy-chart');
renderProgress(mediumSolved, mediumTotal, 'medium-chart');
renderProgress(hardSolved, hardTotal, 'hard-chart');

// Monthly Badges data (sample icons)
const monthlyBadges = [
  { month: 'Jan 2025', icon: 'assets/download.png'},
  { month: 'Feb 2025', icon: 'assets/download.png' },
  { month: 'Mar 2025', icon: 'assets/download.png' },
];

// Render badges
const badgesList = document.getElementById('badges-list');
badgesList.innerHTML = monthlyBadges.map(b => `
   <div class="badge-item" data-month="${b.month}">
    <img src="${b.icon}" alt="Badge ${b.month}" />
  </div>
`).join('');


// streak days
// Example streak data
const codingData = {
 
  "2025-07-07": true,
  "2025-05-04": true,
  "2025-05-05": true,
  "2025-05-06": true,
  "2025-05-07": true,
  "2025-05-08": true,
  "2025-05-09": true,
  "2025-05-10": true,
  "2025-06-11": true,
  "2025-06-08": true,
  "2025-06-09": true,
  "2025-06-10": true,
  "2025-06-11": true,
 "2025-07-02": true,
  "2025-07-03": true,
  "2025-07-04": true,
  "2025-07-05": true,
  "2025-07-06": true
 
};
const aptitudeData = {
  "2025-07-01": true,
  "2025-07-04": true,
  "2025-07-05": true,
  "2025-07-06": true,
  "2025-05-04": true,
  "2025-05-05": true,
  "2025-05-06": true,
  "2025-05-07": true,
  "2025-05-08": true,
  "2025-05-09": true,
  "2025-05-10": true,
  "2025-06-11": true,
  "2025-06-08": true,
  "2025-06-09": true,
  "2025-06-10": true,
  "2025-06-11": true
};

function Calendar(cardId, data) {
  this.card = document.getElementById(cardId);
  this.grid = this.card.querySelector('.calendar-grid');
  this.monthLabel = this.card.querySelector('h2');
  this.currentEl = this.card.querySelector('.summary #'+cardId.split('-')[0]+'-current');
  this.longestEl = this.card.querySelector('.summary #'+cardId.split('-')[0]+'-longest');
  this.prev = this.card.querySelector('#'+cardId.split('-')[0]+'-prev');
  this.next = this.card.querySelector('#'+cardId.split('-')[0]+'-next');
  this.data = data;
  this.date = new Date();
  const self = this;
  this.prev.onclick = () => { this.date.setMonth(this.date.getMonth()-1); this.render(); };
  this.next.onclick = () => { this.date.setMonth(this.date.getMonth()+1); this.render(); };
  this.render();
}
Calendar.prototype.render = function() {
  this.grid.innerHTML = '';
  const m = this.date.getMonth(), y = this.date.getFullYear();
  this.monthLabel.textContent = this.date.toLocaleString('default', { month:'long', year:'numeric' });

  const firstDay = new Date(y,m,1).getDay();
  const daysInM = new Date(y,m+1,0).getDate();

  for(let i=0;i<firstDay;i++) this.grid.appendChild(this._createDay(''));
  for(let d=1; d<=daysInM; d++){
    const key = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const cls = this.data[key]? 'streak-day':'day';
    this.grid.appendChild(this._createDay(d,cls));
  }

  // calculate streaks
  let current=0, longest=0, temp=0;
  for(let d=1; d<=daysInM; d++){
    const key = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    if(this.data[key]) { temp++; if(temp>longest) longest=temp; }
    else temp=0;
  }
  // current: count backwards till break
  for(let d=daysInM; d>=1; d--){
    const key = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    if(this.data[key]) current++;
    else break;
  }

  this.currentEl.textContent = current;
  this.longestEl.textContent = longest;
};

Calendar.prototype._createDay = function(num, cls='day'){
  const div = document.createElement('div');
  div.className = cls;
  div.textContent = num||'';
  return div;
};

// Initialize both calendars
new Calendar('coding-card', codingData);
new Calendar('aptitude-card', aptitudeData);


// 1. Yearly solved data (Easy, Medium, Hard)
    const yearlyData = {
      2018: {easy:12, medium:90, hard:20},
      2019: {easy:80, medium:10, hard:25},
      2020: {easy:50, medium:40, hard:40},
      2021: {easy:90, medium:60, hard:10},
      2022: {easy:120, medium:90, hard:20},
      2023: {easy:180, medium:110, hard:25},
      2024: {easy:50, medium:140, hard:40},
      2025: {easy:80, medium:50, hard:10},
      2026: {easy:0, medium:0, hard:0}
    };
    const totals = {easy:200, medium:150, hard:50};
    let currentYear = new Date().getFullYear();

    const yearList = document.getElementById('year-list');
    function renderYearCards(){
      yearList.innerHTML = '';
      for(const y in yearlyData){
        const div = document.createElement('div');
        div.className = 'year-card' + (Number(y) === currentYear ? ' selected' : '');
        div.textContent = y;
        div.addEventListener('click', ()=>{
          currentYear = Number(y);
          renderYearCards();
          updateStats();
        });
        yearList.appendChild(div);
      }
    }

    function updateStats(){
      document.getElementById('easy-solved').textContent = yearlyData[currentYear]?.easy || 0;
      document.getElementById('easy-total').textContent = totals.easy;
      document.getElementById('medium-solved').textContent = yearlyData[currentYear]?.medium || 0;
      document.getElementById('medium-total').textContent = totals.medium;
      document.getElementById('hard-solved').textContent = yearlyData[currentYear]?.hard || 0;
      document.getElementById('hard-total').textContent = totals.hard;

      ['easy','medium','hard'].forEach(type=>{
        const solved = yearlyData[currentYear]?.[type] || 0;
        const total = totals[type];
        const pct = Math.round(solved/total * 100);
        const fg = document.querySelector(`#${type}-chart .circle-fg${type==='easy'?'': type==='medium'?'1':'2'}`);
        fg.setAttribute('stroke-dasharray', `${pct},100`);
        document.querySelector(`#${type}-chart .chart-percentage`).textContent = pct+'%';
      });
    }

    renderYearCards();
    updateStats();

// problem submission
const recentProblems = [
  { name: "Two Sum", difficulty: "Easy", date: "2025-07-16", url: "https://leetcode.com/problems/two-sum/" },
  { name: "Reverse Linked List", difficulty: "Medium", date: "2025-07-15", url: "https://leetcode.com/problems/reverse-linked-list/" },
  { name: "Word Ladder", difficulty: "Hard", date: "2025-07-14", url: "https://leetcode.com/problems/word-ladder/" },
  { name: "Valid Parentheses", difficulty: "Easy", date: "2025-07-13", url: "https://leetcode.com/problems/valid-parentheses/" },
];

const container = document.getElementById('problem-list');


recentProblems.forEach(p => {
  const li = document.createElement('li');
  li.className = 'problem-item';
  li.innerHTML = `
    <div class="problem-info">
      <h4>${p.name}</h4>
      <div class="meta">${p.difficulty} • ${p.date}</div>
    </div>
    <div class="problem-link">
      <a href="${p.url}" target="_blank">View</a>
    </div>
  `;
  container.appendChild(li);
});
