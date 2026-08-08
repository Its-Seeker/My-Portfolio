const APPS = {
  about: {
    title: "About Me",
    icon: '<svg viewBox="0 0 64 64"><use href="#folder-icon"/></svg>',
    width: 440, height: 400,
    html: `
      <h2>Hi, I'm Ketan Arora 👋</h2>
      <p>I'm Ketan Arora, a Full Stack Developer who goes by <strong>Seeker</strong> — always chasing the next interesting problem.</p>
      <p>I love building useful, real-world products that go beyond just being functional.</p>
      <p>Currently, I'm building <strong>FutureSeat</strong>, an intelligent platform that simplifies college admission cutoff data for engineering students.</p>
      <p>I work across the stack with React, Node.js, Express, MongoDB, and MySQL.</p>
      <p>I'm currently pursuing my B.Tech in Computer Science &amp; Engineering.</p>
      <p>My goal is to keep learning, building, and solving meaningful problems through real-world projects.</p>
      <div style="display:flex;gap:24px;margin-top:16px;">
        <div><div style="font-size:20px;font-weight:600;">2</div><div style="font-size:11px;color:var(--text-dim);">Projects shipped</div></div>
        <div><div style="font-size:20px;font-weight:600;">5+</div><div style="font-size:11px;color:var(--text-dim);">Languages</div></div>
        <div><div style="font-size:20px;font-weight:600;">∞</div><div style="font-size:11px;color:var(--text-dim);">Curiosity</div></div>
      </div>
    `
  },
  skills: {
    title: "Skills",
    icon: '<svg viewBox="0 0 64 64"><use href="#folder-icon"/></svg>',
    width: 440, height: 460,
    html: `
      <div class="skill-card" style="--cat-color:#c58bff;">
        <div class="skill-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M13 6l-2 12"/></svg>Languages</div>
        <div><span class="tag">Python</span><span class="tag">C</span><span class="tag">C++</span><span class="tag">JavaScript</span></div>
      </div>
      <div class="skill-card" style="--cat-color:#5ad1ff;">
        <div class="skill-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Frontend</div>
        <div><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span><span class="tag">React</span><span class="tag">Vite</span></div>
      </div>
      <div class="skill-card" style="--cat-color:#4ade80;">
        <div class="skill-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><circle cx="7" cy="7" r="0.8" fill="currentColor"/><circle cx="7" cy="17" r="0.8" fill="currentColor"/></svg>Backend</div>
        <div><span class="tag">Node.js</span><span class="tag">Express</span><span class="tag">REST APIs</span></div>
      </div>
      <div class="skill-card" style="--cat-color:#ffb15c;">
        <div class="skill-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>Database</div>
        <div><span class="tag">MongoDB</span><span class="tag">MySQL</span></div>
      </div>
      <div class="skill-card" style="--cat-color:#f472b6;">
        <div class="skill-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 0 0 1.4 1.4l3.6-3.6a5 5 0 0 1-6.7 6.7L4 19.8V21h1.2L14.2 12"/></svg>Tools</div>
        <div><span class="tag">Git</span><span class="tag">GitHub</span><span class="tag">VS Code</span><span class="tag">Postman</span><span class="tag">Vercel</span><span class="tag">Nodemon</span></div>
      </div>
    `
  },
  projects: {
    title: "Projects",
    icon: '<svg viewBox="0 0 64 64"><use href="#folder-icon"/></svg>',
    width: 500, height: 460,
    html: `
      <div class="card">
        <span class="status">Flagship · Group Project</span>
        <h4>FutureSeat</h4>
        <p style="color:var(--accent);font-size:12px;margin-top:-4px;">Smart College Admission Strategy Platform</p>
        <p>Transforms scattered engineering admission cutoff data into structured, interactive insights — helping students identify safe, target, and ambitious colleges based on their rank. Includes cutoff trend visualization, college comparison tools, and a strategy planner for counseling rounds.</p>
        <p style="font-size:12px;">My role: Frontend development — built the entire React (Vite) UI, CSS styling, and chart visualizations.</p>
        <span class="tag">React</span><span class="tag">Vite</span><span class="tag">CSS</span><span class="tag">Chart.js</span><span class="tag">Python</span><span class="tag">FastAPI</span><span class="tag">Scikit-learn</span><span class="tag">PostgreSQL</span>
        <br><a class="btn" href="https://github.com/Its-Seeker/FutureSeat" target="_blank">View on GitHub →</a>
      </div>
      <div class="card">
        <span class="status">Mini Project</span>
        <h4>Tic Tac Toe</h4>
        <p>A classic Tic Tac Toe game built with pure JavaScript — clean logic, interactive UI, win detection, and a reset flow.</p>
        <span class="tag">JavaScript</span><span class="tag">HTML</span><span class="tag">CSS</span>
        <br><a class="btn" href="https://github.com/Its-Seeker/Tic-Tac-Toe" target="_blank">View on GitHub →</a>
      </div>
      <div class="card dashed">
        <div style="font-size:22px;">+</div>
        <h4 style="font-size:14px;font-weight:500;">Next Project Loading...</h4>
        <p style="font-size:12px;">The Seeker never stops building.</p>
      </div>
    `
  },
  gallery: {
    title: "Gallery",
    icon: '<svg viewBox="0 0 48 48"><use href="#icon-photos"/></svg>',
    width: 460, height: 420,
    html: `
      <h2 style="margin-bottom:4px;">Gallery</h2>
      <p style="margin-bottom:14px;">A few moments — talks, hackathons, and everyday life.</p>
      <div class="gallery-grid">
        <img src="photo1.jpeg" alt="Speaking at an event" onclick="openLightbox(this.src)">
        <img src="photo2.jpeg" alt="At a GeeksforGeeks event" onclick="openLightbox(this.src)">
        <img src="photo3.jpeg" alt="Portrait" onclick="openLightbox(this.src)">
        <img src="photo4.jpeg" alt="Portrait" onclick="openLightbox(this.src)">
      </div>
    `
  },
  resume: {
    title: "Resume",
    icon: '<svg viewBox="0 0 64 64"><use href="#folder-icon"/></svg>',
    width: 380, height: 260,
    html: `
      <h2>Resume</h2>
      <p>Add a link to your hosted resume PDF (Google Drive, GitHub, etc.) below.</p>
      <a class="btn" href="#" onclick="return false;">Download Resume</a>
      <p style="margin-top:16px;font-size:12px;">Edit APPS.resume.html in the code to add your real link.</p>
    `
  },
  contact: {
    title: "Contact Me",
    icon: '<svg viewBox="0 0 64 64"><use href="#folder-icon"/></svg>',
    width: 460, height: 380,
    html: `
      <div style="display:flex;gap:18px;align-items:flex-start;margin-bottom:22px;">
        <div style="width:72px;height:72px;border-radius:50%;flex:0 0 auto;background:linear-gradient(135deg,var(--accent),var(--amber));display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#04121c;">KA</div>
        <div>
          <h2 style="margin:0 0 6px;">Let's Connect</h2>
          <p style="margin:0;">Feel free to reach out for collaborations, opportunities, or discussions around full-stack development and the MERN stack. Always open to connecting with fellow builders and creators.</p>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <a class="contact-card" style="--card-color:#ef5b62" href="https://github.com/Its-Seeker" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
          <div><div class="cc-label">GitHub</div><div class="cc-value">Its-Seeker</div></div>
        </a>
        <a class="contact-card" style="--card-color:#2fa8e0" href="https://www.linkedin.com/in/ketan-arora-028961325/" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z"/></svg>
          <div><div class="cc-label">LinkedIn</div><div class="cc-value">ketan-arora</div></div>
        </a>
        <a class="contact-card" style="--card-color:#ff8a5b" href="mailto:ketanarora482@gmail.com">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          <div><div class="cc-label">Email</div><div class="cc-value">ketanarora482@gmail.com</div></div>
        </a>
        <a class="contact-card" style="--card-color:#ff5700" href="https://www.reddit.com/user/U_seeker23/" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="14.2" r="6.2"/><circle cx="19" cy="8" r="1.6"/><path d="M13.5 3.2 12.2 8" stroke="currentColor" stroke-width="1.4"/><circle cx="9" cy="14" r="1.1" fill="#fff"/><circle cx="15" cy="14" r="1.1" fill="#fff"/></svg>
          <div><div class="cc-label">Reddit</div><div class="cc-value">U_seeker23</div></div>
        </a>
      </div>
    `
  }
};

const winContainer = document.getElementById('windows-container');
const tbRunning = document.getElementById('tb-running');
let zTop = 10;
let openWins = {};
let cascade = 0;

function bringToFront(win){ zTop += 1; win.style.zIndex = zTop; }

function openApp(id){
  if(openWins[id]){
    const w = openWins[id];
    w.classList.remove('hidden');
    bringToFront(w);
    return;
  }
  const app = APPS[id];
  if(!app) return;

  const win = document.createElement('div');
  win.className = 'win';
  const offset = (cascade % 6) * 26;
  cascade++;
  const left = Math.min(window.innerWidth - app.width - 20, 90 + offset);
  const top = Math.min(window.innerHeight - app.height - 110, 90 + offset);
  win.style.left = left + 'px';
  win.style.top = top + 'px';
  win.style.width = app.width + 'px';
  win.style.height = app.height + 'px';

  win.innerHTML = `
    <div class="win-titlebar">
      <div class="win-title">${app.icon}<span>${app.title}</span></div>
      <div class="win-controls">
        <button class="win-btn min" aria-label="Minimize">–</button>
        <button class="win-btn max" aria-label="Maximize">▢</button>
        <button class="win-btn close" aria-label="Close">✕</button>
      </div>
    </div>
    <div class="win-body">${app.html}</div>
  `;
  winContainer.appendChild(win);
  openWins[id] = win;
  bringToFront(win);
  makeDraggable(win);
  addTaskbarEntry(id, app);

  win.addEventListener('mousedown', () => bringToFront(win));
  win.querySelector('.close').addEventListener('click', () => closeApp(id));
  win.querySelector('.min').addEventListener('click', () => { win.classList.add('hidden'); });
  win.querySelector('.max').addEventListener('click', () => { win.classList.toggle('maximized'); });
}

function closeApp(id){
  const w = openWins[id];
  if(w){ w.remove(); delete openWins[id]; }
  const tb = document.getElementById('tb-run-' + id);
  if(tb) tb.remove();
}

function addTaskbarEntry(id, app){
  if(document.getElementById('tb-run-' + id)) return;
  const btn = document.createElement('button');
  btn.className = 'tb-btn tb-running';
  btn.id = 'tb-run-' + id;
  btn.innerHTML = app.icon;
  btn.addEventListener('click', () => {
    const w = openWins[id];
    if(w.classList.contains('hidden')){ w.classList.remove('hidden'); bringToFront(w); }
    else { w.classList.add('hidden'); }
  });
  tbRunning.appendChild(btn);
}

function makeDraggable(win){
  const bar = win.querySelector('.win-titlebar');
  let sx=0, sy=0, ox=0, oy=0, dragging=false;

  function start(x,y){
    if(win.classList.contains('maximized')) return;
    dragging = true;
    sx=x; sy=y;
    ox = win.offsetLeft; oy = win.offsetTop;
    bringToFront(win);
  }
  function move(x,y){
    if(!dragging) return;
    let nx = ox + (x - sx);
    let ny = oy + (y - sy);
    ny = Math.max(0, ny);
    win.style.left = nx + 'px';
    win.style.top = ny + 'px';
  }
  function end(){ dragging = false; }

  bar.addEventListener('mousedown', e => start(e.clientX, e.clientY));
  window.addEventListener('mousemove', e => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', end);

  bar.addEventListener('touchstart', e => { const t=e.touches[0]; start(t.clientX,t.clientY); }, {passive:true});
  window.addEventListener('touchmove', e => { const t=e.touches[0]; move(t.clientX,t.clientY); }, {passive:true});
  window.addEventListener('touchend', end);
}

document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('dblclick', () => openApp(icon.dataset.app));
  icon.addEventListener('click', () => {
    document.querySelectorAll('.icon').forEach(i => i.classList.remove('selected'));
    icon.classList.add('selected');
  });
  icon.addEventListener('keydown', e => { if(e.key === 'Enter') openApp(icon.dataset.app); });
});

document.querySelectorAll('.sm-tile').forEach(tile => {
  tile.addEventListener('click', () => {
    openApp(tile.dataset.app);
    document.getElementById('start-menu').classList.add('hidden');
    document.getElementById('start-btn').classList.remove('active');
  });
});

document.querySelectorAll('#topbar nav button').forEach(btn => {
  btn.addEventListener('click', () => openApp(btn.dataset.app));
});

document.querySelectorAll('#tb-pinned .tb-btn[data-app]').forEach(btn => {
  btn.addEventListener('click', () => openApp(btn.dataset.app));
});

const startBtn = document.getElementById('start-btn');
const startMenu = document.getElementById('start-menu');
startBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  startMenu.classList.toggle('hidden');
  startBtn.classList.toggle('active');
});
document.addEventListener('click', (e) => {
  if(!startMenu.classList.contains('hidden') && !startMenu.contains(e.target)){
    startMenu.classList.add('hidden');
    startBtn.classList.remove('active');
  }
});

function updateClock(){
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes().toString().padStart(2,'0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if(h === 0) h = 12;
  const timeStr = `${h}:${m} ${ampm}`;
  document.getElementById('tb-time').textContent = timeStr;
  document.getElementById('tb-date').textContent = now.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
  document.getElementById('topbar-time').textContent = now.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'}) + ', ' + timeStr;
}
updateClock();
setInterval(updateClock, 1000 * 15);

document.getElementById('theme-btn').addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  document.getElementById('theme-icon-dark').style.display = isLight ? 'none' : '';
  document.getElementById('theme-icon-light').style.display = isLight ? '' : 'none';
});

function openLightbox(src){
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
}
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', (e) => {
  if(e.target.id === 'lightbox') closeLightbox();
});
