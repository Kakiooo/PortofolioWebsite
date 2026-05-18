// ─── Router / SPA Logic ────────────────────────────────────────────────────
const App = (() => {
  let currentSection = "home";

  // ── Navigation ──────────────────────────────────────────────────────────
  function navigate(section, extra) {
    currentSection = section;
    document.querySelectorAll(".page-section").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(`section-${section}`);
    if (target) target.classList.add("active");

    document.querySelectorAll(".nav-link").forEach(l => {
      l.classList.toggle("active", l.dataset.section === section);
    });

    if (section === "project-detail" && extra) {
      renderProjectDetail(extra);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState({ section, extra }, "", `#${section}${extra ? "/" + extra : ""}`);
  }

  // ── Project Grid ─────────────────────────────────────────────────────────
  function renderProjectGrid(filter) {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    let items = [];
    if (!filter || filter === "games") items = items.concat(PROJECTS.games.map(p => ({ ...p, category: "games" })));
    if (!filter || filter === "levelDesign") items = items.concat(PROJECTS.levelDesign.map(p => ({ ...p, category: "levelDesign" })));
    if (!filter || filter === "applications") items = items.concat(PROJECTS.applications.map(p => ({ ...p, category: "applications" })));

    container.innerHTML = items.map(p => `
      <div class="project-card" data-id="${p.id}" data-category="${p.category}">
        <div class="card-thumb">
          <img src="${p.thumbnail}" alt="${p.title}" onerror="this.parentElement.classList.add('no-thumb')">
          <div class="thumb-placeholder"><span>${p.title[0]}</span></div>
        </div>
        <div class="card-body">
          <div class="card-genre">${p.genre}</div>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-summary">${p.summary}</p>
          <div class="card-skills">
            ${p.skills.map(s => `<span class="skill-tag">${s}</span>`).join("")}
          </div>
          <div class="card-footer">
            <span class="card-role">${p.roles[0]}</span>
            ${p.links?.browser ? `<span class="play-badge">Play in browser</span>` : ""}
          </div>
        </div>
      </div>
    `).join("");

    // Bind click events (these count as project navigation, not campfire clicks)
    container.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", (e) => {
        e.stopPropagation();
        navigate("project-detail", card.dataset.id);
      });
    });
  }

  // ── Project Detail ───────────────────────────────────────────────────────
  function findProject(id) {
    for (const key of ["games", "levelDesign", "applications"]) {
      const found = PROJECTS[key].find(p => p.id === id);
      if (found) return found;
    }
    return null;
  }

  function renderProjectDetail(id) {
    const p = findProject(id);
    if (!p) return;

    const section = document.getElementById("section-project-detail");
    section.innerHTML = `
      <div class="detail-back">
        <button class="btn-back" id="btn-back">← Back</button>
      </div>
      <div class="detail-hero">
        <div class="detail-thumb">
          <img src="${p.thumbnail}" alt="${p.title}" onerror="this.parentElement.classList.add('no-thumb')">
          <div class="thumb-placeholder large"><span>${p.title[0]}</span></div>
        </div>
        <div class="detail-header">
          <div class="detail-genre">${p.genre}</div>
          <h1 class="detail-title">${p.title}</h1>
          <p class="detail-summary">${p.summary}</p>
          <div class="detail-meta">
            <span class="meta-label">Platform:</span>
            ${p.platform.map(pl => `<span class="meta-value">${pl}</span>`).join("")}
          </div>
          ${p.links?.browser ? `<a href="${p.links.browser}" class="btn-play" target="_blank">Play in Browser</a>` : ""}
        </div>
      </div>
      <div class="detail-body">
        <div class="detail-block">
          <h2>Overview</h2>
          <p>${p.detail.overview}</p>
        </div>
        <div class="detail-block">
          <h2>My Contribution</h2>
          <div class="role-chips">
            ${p.roles.map(r => `<span class="role-chip">${r}</span>`).join("")}
          </div>
          <p>${p.detail.contribution}</p>
        </div>
        <div class="detail-block">
          <h2>What I Learned</h2>
          <p>${p.detail.learnings}</p>
          <div class="detail-skills">
            ${p.skills.map(s => `<span class="skill-tag large">${s}</span>`).join("")}
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-back").addEventListener("click", (e) => {
      e.stopPropagation();
      navigate("projects");
    });
  }

  // ── Skills Filter Tabs ────────────────────────────────────────────────────
  function initProjectFilter() {
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", (e) => {
        e.stopPropagation();
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        renderProjectGrid(tab.dataset.filter || null);
      });
    });
  }

  // ── Campfire click tracking ────────────────────────────────────────────────
  function initCampfireTracking() {
    document.addEventListener("click", () => {
      CAMPFIRE.increment();
    });
  }

  // ── Nav links ─────────────────────────────────────────────────────────────
  function initNav() {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const section = link.dataset.section;
        navigate(section);
        if (section === "projects") renderProjectGrid();
      });
    });

    document.querySelectorAll(".hero-cta").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        navigate("projects");
        renderProjectGrid();
      });
    });
  }

  // ── Category section buttons ──────────────────────────────────────────────
  function initCategoryButtons() {
    document.querySelectorAll("[data-nav]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const target = el.dataset.nav;
        if (target === "projects") {
          navigate("projects");
          renderProjectGrid(el.dataset.filter);
          // Activate matching tab
          if (el.dataset.filter) {
            document.querySelectorAll(".filter-tab").forEach(t => {
              t.classList.toggle("active", t.dataset.filter === el.dataset.filter);
            });
          }
        } else {
          navigate(target);
        }
      });
    });
  }

  // ── Hash routing ────────────────────────────────────────────────────────
  function handleHash() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const [section, id] = hash.split("/");
    if (section === "projects") {
      navigate("projects");
      renderProjectGrid();
    } else if (section === "project-detail" && id) {
      navigate("project-detail", id);
    } else if (section) {
      navigate(section);
    }
  }

  // ── Init ─────────────────────────────────────────────────────────────────
  function init() {
    CAMPFIRE.init();
    initNav();
    initProjectFilter();
    initCategoryButtons();
    initCampfireTracking();
    renderProjectGrid();
    handleHash();
    window.addEventListener("popstate", (e) => {
      if (e.state) navigate(e.state.section, e.state.extra);
    });
  }

  return { init, navigate };
})();

document.addEventListener("DOMContentLoaded", App.init);
