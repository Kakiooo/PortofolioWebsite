const App = (() => {

  // ── Scroll to section ────────────────────────────────────────────────────
  function scrollToSection(sectionId) {
    const target = document.getElementById(`section-${sectionId}`);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    history.pushState({ section: sectionId }, "", `#${sectionId}`);
  }

  // ── Scroll spy ───────────────────────────────────────────────────────────
  function initScrollSpy() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace("section-", "");
          document.querySelectorAll(".nav-link").forEach(l => {
            l.classList.toggle("active", l.dataset.section === id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -60% 0px" });

    ["home", "projects", "about"].forEach(id => {
      const el = document.getElementById(`section-${id}`);
      if (el) observer.observe(el);
    });
  }

  // ── Project overlay ──────────────────────────────────────────────────────
  function openProjectDetail(id) {
    renderProjectDetail(id);
    document.getElementById("project-detail-overlay").classList.add("overlay-open");
    document.body.style.overflow = "hidden";
    history.pushState({ overlay: id }, "", `#project/${id}`);
  }

  function closeProjectDetail() {
    document.getElementById("project-detail-overlay").classList.remove("overlay-open");
    document.body.style.overflow = "";
    history.back();
  }

  // ── Project Grid ─────────────────────────────────────────────────────────
  function renderProjectGrid(filter) {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    let items = [];
    if (!filter || filter === "games")       items = items.concat(PROJECTS.games.map(p => ({ ...p, category: "games" })));
    if (!filter || filter === "levelDesign") items = items.concat(PROJECTS.levelDesign.map(p => ({ ...p, category: "levelDesign" })));
    if (!filter || filter === "applications") items = items.concat(PROJECTS.applications.map(p => ({ ...p, category: "applications" })));

    container.innerHTML = items.map(p => `
      <div class="project-card-wrapper" data-id="${p.id}" data-category="${p.category}">
        <div class="project-card">
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
            </div>
          </div>
        </div>
        ${p.links?.browser
          ? `<a class="card-tab card-tab-play" href="${p.links.browser}" target="_blank"><span>▶ Play</span></a>`
          : `<div class="card-tab"></div>`
        }
      </div>
    `).join("");

    container.querySelectorAll(".project-card-wrapper").forEach(wrapper => {
      wrapper.addEventListener("click", (e) => {
        e.stopPropagation();
        openProjectDetail(wrapper.dataset.id);
      });
    });

    container.querySelectorAll(".card-tab-play").forEach(tab => {
      tab.addEventListener("click", (e) => e.stopPropagation());
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
        ${p.links?.browser ? `<a href="${p.links.browser}" class="btn-play" target="_blank">▶ Play in Browser</a>` : ""}
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
          <h2>What I Built</h2>
          <p>${p.detail.learnings}</p>
          <div class="detail-skills">
            ${p.skills.map(s => `<span class="skill-tag large">${s}</span>`).join("")}
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-back").addEventListener("click", (e) => {
      e.stopPropagation();
      closeProjectDetail();
    });

    document.getElementById("project-detail-overlay").scrollTop = 0;
  }

  // ── Filter tabs ───────────────────────────────────────────────────────────
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

  // ── Campfire click tracking ───────────────────────────────────────────────
  function initCampfireTracking() {
    document.addEventListener("click", () => CAMPFIRE.increment());
  }

  // ── Nav links ─────────────────────────────────────────────────────────────
  function initNav() {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("nav-hamburger");

    if (hamburger) {
      hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navbar.classList.toggle("nav-open");
      });

      document.addEventListener("click", (e) => {
        if (navbar.classList.contains("nav-open") && !navbar.contains(e.target)) {
          navbar.classList.remove("nav-open");
        }
      });
    }

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        navbar.classList.remove("nav-open");
        scrollToSection(link.dataset.section);
      });
    });

    document.getElementById("nav-logo").addEventListener("click", (e) => {
      e.stopPropagation();
      navbar.classList.remove("nav-open");
      scrollToSection("home");
    });
  }

  // ── Category buttons ──────────────────────────────────────────────────────
  function initCategoryButtons() {
    document.querySelectorAll("[data-nav]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const target = el.dataset.nav;
        if (target === "projects") {
          scrollToSection("projects");
          renderProjectGrid(el.dataset.filter || null);
          if (el.dataset.filter) {
            document.querySelectorAll(".filter-tab").forEach(t => {
              t.classList.toggle("active", t.dataset.filter === el.dataset.filter);
            });
          }
        } else {
          scrollToSection(target);
        }
      });
    });
  }

  // ── Hash routing ─────────────────────────────────────────────────────────
  function handleHash() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    if (hash.startsWith("project/")) {
      openProjectDetail(hash.replace("project/", ""));
    } else {
      const el = document.getElementById(`section-${hash}`);
      if (el) el.scrollIntoView();
    }
  }

  // ── Init ─────────────────────────────────────────────────────────────────
  function init() {
    CAMPFIRE.init();
    initNav();
    initScrollSpy();
    initProjectFilter();
    initCategoryButtons();
    initCampfireTracking();
    renderProjectGrid();
    handleHash();
    window.addEventListener("popstate", (e) => {
      const overlay = document.getElementById("project-detail-overlay");
      if (e.state?.overlay) {
        openProjectDetail(e.state.overlay);
      } else if (overlay.classList.contains("overlay-open")) {
        overlay.classList.remove("overlay-open");
        document.body.style.overflow = "";
      }
    });
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", App.init);

// ── Toast ─────────────────────────────────────────────────────────────────────
function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("toast-show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("toast-show"), 2200);
}

// ── Resume preview ────────────────────────────────────────────────────────────
function downloadResume() {
  window.open("assets/resume.pdf", "_blank", "noopener,noreferrer");
}

// ── Copy email ────────────────────────────────────────────────────────────────
function copyEmail() {
  const email = "kakiorrah99@outlook.com";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email)
      .then(() => showToast("Email copied!"))
      .catch(() => {
        prompt("Copy this address:", email);
      });
  } else {
    prompt("Copy this address:", email);
  }
}
