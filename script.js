// =============================================================
//  CANVAS + SCALING (minimal)
// =============================================================
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const LW = 800, LH = 520;
let SCALE = 1;

function resize() {
  SCALE = Math.min(window.innerWidth / LW, window.innerHeight / LH);
  const dpr = devicePixelRatio || 1;
  canvas.width = LW * SCALE * dpr;
  canvas.height = LH * SCALE * dpr;
  canvas.style.width = LW * SCALE + 'px';
  canvas.style.height = LH * SCALE + 'px';
  ctx.setTransform(SCALE * dpr, 0, 0, SCALE * dpr, 0, 0);
}
resize();
window.addEventListener('resize', resize);

// =============================================================
//  SIMPLE GAME STATE (demo)
// =============================================================
let G = { state: 'daySelect', coins: 400 };
let goT = 0, lastT = 0;

function drawDaySelect() {
  ctx.fillStyle = '#1a0800';
  ctx.fillRect(0, 0, LW, LH);
  ctx.font = '28px "Fredoka One", cursive';
  ctx.fillStyle = '#f4a820';
  ctx.textAlign = 'center';
  ctx.fillText('☕ COFFEE SHOP TYCOON', LW/2, 180);
  ctx.font = '16px monospace';
  ctx.fillStyle = '#fdf6ec';
  ctx.fillText('Click to start the game', LW/2, 260);
  ctx.fillText(`💰 ${G.coins} coins`, LW/2, 320);
  
  // Simple button
  if (G.state === 'daySelect') {
    const btn = { x: LW/2-80, y: 360, w: 160, h: 50 };
    ctx.fillStyle = '#f4a820';
    ctx.fillRect(btn.x, btn.y, btn.w, btn.h);
    ctx.fillStyle = '#1a0800';
    ctx.fillText('PLAY DAY 1', LW/2, btn.y+32);
    G.btn = btn;
  }
}

function startGame() {
  G.state = 'playing';
  G.coins = 400;
  G.served = 0;
  document.getElementById('upgrade-panel').classList.add('visible');
  document.getElementById('event-log').classList.add('visible');
}

function drawPlaying() {
  ctx.fillStyle = '#6b3a1f';
  ctx.fillRect(0, 0, LW, LH);
  ctx.font = '20px monospace';
  ctx.fillStyle = '#fdf6ec';
  ctx.fillText(`💰 ${G.coins}`, 20, 50);
  ctx.fillText(`☕ Served: ${G.served}`, 20, 90);
  ctx.fillText('Click canvas to earn!', 20, 130);
}

canvas.addEventListener('click', (e) => {
  let { x, y } = toLogical(e);
  if (G.state === 'daySelect' && G.btn && x > G.btn.x && x < G.btn.x+G.btn.w && y > G.btn.y && y < G.btn.y+G.btn.h) {
    startGame();
  } else if (G.state === 'playing') {
    G.coins += 10;
    G.served++;
    addLog(`+10 coins! Total: $${G.coins}`, 'good');
  }
});

function toLogical(e) {
  const r = canvas.getBoundingClientRect();
  return { x: (e.clientX - r.left) / SCALE, y: (e.clientY - r.top) / SCALE };
}

function addLog(msg, type) {
  const log = document.getElementById('event-log');
  const d = document.createElement('div');
  d.className = 'log-' + type;
  d.textContent = msg;
  log.appendChild(d);
  while (log.children.length > 5) log.removeChild(log.firstChild);
}

// =============================================================
//  DRAW LOOP
// =============================================================
function loop() {
  ctx.clearRect(0, 0, LW, LH);
  if (G.state === 'daySelect') drawDaySelect();
  else if (G.state === 'playing') drawPlaying();
  requestAnimationFrame(loop);
}

initGame();   // you can define initGame to reset G if needed
function initGame() { G = { state: 'daySelect', coins: 400, served: 0 }; }
loop();