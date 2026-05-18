// ─── Campfire System ───────────────────────────────────────────────────────
const CAMPFIRE = (() => {
  const MAX_CLICKS = 50;
  const STORAGE_KEY = "portfolio_fire_clicks";

  let clicks = 0;
  let sparkleInterval = null;
  let resetTimeout = null;
  let particles = [];
  let canvas, ctx, animFrame;
  let isMaxed = false;

  function load() {
    clicks = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    if (clicks > MAX_CLICKS) clicks = MAX_CLICKS;
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, clicks);
  }

  function getLevel() {
    // 0–5
    return Math.min(5, Math.floor((clicks / MAX_CLICKS) * 5) + (clicks > 0 ? 1 : 0));
  }

  function getPercent() {
    return Math.min(1, clicks / MAX_CLICKS);
  }

  // ── Sparkle Particle System ──────────────────────────────────────────────
  function initCanvas() {
    canvas = document.getElementById("fire-sparkle-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  }

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function spawnParticle() {
    const campfireEl = document.getElementById("campfire-icon");
    if (!campfireEl) return;
    const rect = campfireEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 3;

    const level = getLevel();
    const count = level >= 5 ? 4 : level >= 4 ? 2 : 1;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: cx + (Math.random() - 0.5) * 30,
        y: cy + Math.random() * 10,
        vx: (Math.random() - 0.5) * 2.5,
        vy: -(Math.random() * 3 + 1.5),
        life: 1,
        decay: Math.random() * 0.015 + 0.008,
        size: Math.random() * 4 + 2,
        hue: Math.random() > 0.5 ? 30 : 45, // orange or yellow
      });
    }
  }

  function drawParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.life > 0);

    for (const p of particles) {
      ctx.save();
      ctx.globalAlpha = p.life * 0.9;
      ctx.fillStyle = `hsl(${p.hue}, 100%, 65%)`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `hsl(${p.hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      p.x += p.vx;
      p.y += p.vy;
      p.vy -= 0.05; // gravity-like upward acceleration
      p.life -= p.decay;
      p.size *= 0.99;
    }
  }

  function animateParticles() {
    drawParticles();
    animFrame = requestAnimationFrame(animateParticles);
  }

  // ── DOM Updates ────────────────────────────────────────────────────────
  function updateDOM() {
    const level = getLevel();
    const pct = getPercent();

    // Progress bar
    const bar = document.getElementById("fire-bar-fill");
    if (bar) bar.style.width = (pct * 100) + "%";

    // Click counter
    const counter = document.getElementById("fire-click-count");
    if (counter) counter.textContent = clicks;

    // Flame size via CSS variable
    const icon = document.getElementById("campfire-icon");
    if (!icon) return;

    // Remove all level classes
    for (let i = 0; i <= 5; i++) icon.classList.remove(`fire-level-${i}`);
    icon.classList.add(`fire-level-${level}`);

    // Max state
    if (level >= 5 && !isMaxed) {
      isMaxed = true;
      icon.classList.add("fire-maxed");
      document.body.classList.add("fire-bg-active");
      startMaxSparkles();
      scheduleReset();
    } else if (level < 5 && isMaxed) {
      isMaxed = false;
      icon.classList.remove("fire-maxed");
      document.body.classList.remove("fire-bg-active");
      stopMaxSparkles();
    }

    // Ambient sparkles at level 3+
    if (level >= 3) spawnParticle();
  }

  function startMaxSparkles() {
    if (sparkleInterval) return;
    sparkleInterval = setInterval(() => {
      for (let i = 0; i < 3; i++) spawnParticle();
    }, 80);
  }

  function stopMaxSparkles() {
    clearInterval(sparkleInterval);
    sparkleInterval = null;
  }

  function scheduleReset() {
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(() => {
      clicks = 0;
      save();
      updateDOM();
    }, 5000);
  }

  // ── Public API ───────────────────────────────────────────────────────────
  function increment() {
    if (clicks >= MAX_CLICKS) return;
    clicks++;
    save();
    updateDOM();
  }

  function init() {
    load();
    initCanvas();
    animateParticles();
    updateDOM();
  }

  return { init, increment, getLevel, getPercent };
})();
