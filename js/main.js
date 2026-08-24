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
    if (filter === "tools")                   items = items.concat(PROJECTS.tools.map(p => ({ ...p, category: "tools" })));
    if (!filter || filter === "games")        items = items.concat(PROJECTS.games.map(p => ({ ...p, category: "games" })));
    if (!filter || filter === "levelDesign")  items = items.concat(PROJECTS.levelDesign.map(p => ({ ...p, category: "levelDesign" })));
    if (!filter || filter === "applications") items = items.concat(PROJECTS.applications.map(p => ({ ...p, category: "applications" })));

    // All view: inject tools right after the first game (so Kaiju is 1st, tools 2nd, rest of games after)
    if (!filter && PROJECTS.tools?.length) {
      const toolItems = PROJECTS.tools.map(p => ({ ...p, category: "tools" }));
      items.splice(1, 0, ...toolItems);
    }

    // Cross-listed projects: shown first under an extra filter, but not duplicated in the "All" view
    if (filter) {
      const already = new Set(items.map(p => p.id));
      const crossListed = [...PROJECTS.games, ...PROJECTS.levelDesign, ...PROJECTS.applications, ...PROJECTS.tools]
        .filter(p => p.extraCategories?.includes(filter) && !already.has(p.id))
        .map(p => ({ ...p, category: filter }));
      items = crossListed.concat(items);
    }

    container.innerHTML = items.map(p => `
      <div class="project-card-wrapper" data-id="${p.id}" data-category="${p.category}">
        <div class="project-card">
          <div class="card-thumb${p.thumbnailContain ? ' thumb-contain' : ''}" style="--thumb-src: url('${p.thumbnail}')">
            <img src="${p.thumbnail}" alt="${p.title}" style="${p.thumbnailPosition ? `object-position:${p.thumbnailPosition};` : ''}${p.thumbnailPad ? `padding:${p.thumbnailPad};` : ''}" onerror="this.parentElement.classList.add('no-thumb')">
            <div class="thumb-placeholder"><span>${p.title[0]}</span></div>
          </div>
          <div class="card-body">
            <div class="card-role-top">
              <span class="card-role-eyebrow">Role</span>
              <span class="card-role">${p.roles.join(" · ")}</span>
            </div>
            <h3 class="card-title">${p.title}</h3>
            <div class="card-genre">${p.genre}</div>
            <p class="card-summary">${p.summary}</p>
            <div class="card-skills">
              ${p.skills.map(s => `<span class="skill-tag">${s}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `).join("");

    container.querySelectorAll(".project-card-wrapper").forEach(wrapper => {
      wrapper.addEventListener("click", (e) => {
        e.stopPropagation();
        openProjectDetail(wrapper.dataset.id);
      });
    });

  }

  // ── Project Detail ───────────────────────────────────────────────────────
  function findProject(id) {
    for (const key of ["games", "levelDesign", "applications", "tools"]) {
      const found = PROJECTS[key].find(p => p.id === id);
      if (found) return found;
    }
    return null;
  }

  function renderProjectDetail(id) {
    const p = findProject(id);
    if (!p) return;

    // Combined media: trailer(s) first, then screenshots
    const media = [];
    if (Array.isArray(p.youtubeIds)) p.youtubeIds.forEach(id => media.push({ type: "youtube", id }));
    else if (p.youtubeId) media.push({ type: "youtube", id: p.youtubeId });
    else if (p.video) media.push({ type: "video", src: p.video });
    (p.screenshots || []).forEach(s => {
      if (typeof s === "string") media.push({ type: "image", src: s });
      else media.push({ type: "image", src: s.src, caption: s.caption });
    });

    const section = document.getElementById("section-project-detail");
    section.innerHTML = `
      <div class="detail-back">
        <button class="btn-back" id="btn-back">← Back</button>
      </div>
      <div class="detail-hero${media.length ? ' has-media' : ''}">
        <div class="detail-header">
          <div class="detail-role">
            <span class="detail-role-eyebrow">Role</span>
            <span class="detail-role-value">${p.roles.join(" · ")}</span>
          </div>
          <h1 class="detail-title">${p.title}</h1>
          <div class="detail-genre">${p.genre}</div>
          <p class="detail-summary">${p.summary}</p>
          <div class="detail-meta">
            <span class="meta-label">Platform:</span>
            ${p.platform.map(pl => `<span class="meta-value">${pl}</span>`).join("")}
          </div>
        </div>
        ${media.length ? `
        <div class="detail-media">
          <div class="media-gallery">
            <div class="media-stage">
              <div class="media-stage-inner" id="media-stage-inner"></div>
              ${media.length > 1 ? `
              <button class="media-arrow media-prev" aria-label="Previous">&#8592;</button>
              <button class="media-arrow media-next" aria-label="Next">&#8594;</button>
              <div class="media-counter"><span id="media-current">1</span> / ${media.length}</div>
              ` : ""}
            </div>
            <div class="media-caption" id="media-caption"></div>
            ${media.length > 1 ? `
            <div class="media-strip">
              ${media.map((m, i) => `
                <button class="media-thumb${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Media ${i + 1}">
                  ${m.type === "video" || m.type === "youtube"
                    ? `<span class="media-thumb-video"><span class="media-play">&#9654;</span></span>`
                    : `<img src="${m.src}" alt="">`}
                </button>
              `).join("")}
            </div>
            ` : ""}
          </div>
        </div>
        ` : ""}
      </div>
      <div class="detail-body">
        <div class="detail-text-grid">
          <div class="detail-col detail-col-left">
            <div class="detail-block">
              <h2>Overview</h2>
              <p>${p.detail.overview}</p>
            </div>
            <div class="detail-block">
              <h2>My Contribution</h2>
              ${Array.isArray(p.detail.contribution)
                ? `<ul class="contribution-list">${p.detail.contribution.map(b => `<li>${b}</li>`).join("")}</ul>`
                : `<p>${p.detail.contribution}</p>`
              }
            </div>
          </div>
          <div class="detail-col detail-col-right">
            ${p.detail.challenge ? `
            <div class="detail-block">
              <h2>Biggest Challenge</h2>
              <p>${p.detail.challenge}</p>
            </div>
            ` : ""}
            ${p.detail.solution ? `
            <div class="detail-block">
              <h2>How I Solved It</h2>
              <p>${p.detail.solution}</p>
            </div>
            ` : ""}
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-back").addEventListener("click", (e) => {
      e.stopPropagation();
      closeProjectDetail();
    });

    // Media gallery: one stage cycling video + screenshots
    // Cross-project links inside detail text
    section.querySelectorAll("a.detail-link[data-project-id]").forEach(a => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        renderProjectDetail(a.dataset.projectId);
        const overlay = document.getElementById("project-detail-overlay");
        if (overlay) overlay.scrollTop = 0;
        window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      });
    });

    if (media.length) {
      const stage = section.querySelector("#media-stage-inner");
      const counter = section.querySelector("#media-current");
      const captionEl = section.querySelector("#media-caption");
      const thumbs = section.querySelectorAll(".media-thumb");
      const images = media.filter(m => m.type === "image").map(m => m.src);
      let idx = 0;

      function show(i) {
        idx = (i + media.length) % media.length;
        const m = media[idx];
        stage.innerHTML = m.type === "video"
          ? `<video class="media-video" controls preload="metadata" playsinline><source src="${m.src}" type="video/mp4"></video>`
          : m.type === "youtube"
          ? `<iframe class="media-youtube" src="https://www.youtube.com/embed/${m.id}?rel=0" title="YouTube trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
          : `<img class="media-image" src="${m.src}" alt="">`;
        if (counter) counter.textContent = idx + 1;
        if (captionEl) {
          captionEl.textContent = m.caption || "";
          captionEl.style.display = m.caption ? "block" : "none";
        }
        thumbs.forEach((t, j) => t.classList.toggle("active", j === idx));
        const active = thumbs[idx];
        if (active) active.scrollIntoView({ block: "nearest", inline: "nearest" });
      }

      section.querySelector(".media-prev")?.addEventListener("click", (e) => { e.stopPropagation(); show(idx - 1); });
      section.querySelector(".media-next")?.addEventListener("click", (e) => { e.stopPropagation(); show(idx + 1); });
      thumbs.forEach(t => t.addEventListener("click", (e) => { e.stopPropagation(); show(parseInt(t.dataset.index)); }));

      // Click a screenshot in the stage to open it fullscreen in the lightbox
      stage.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG" && images.length) {
          e.stopPropagation();
          const imgIdx = images.indexOf(media[idx].src);
          LIGHTBOX.open(images, imgIdx < 0 ? 0 : imgIdx);
        }
      });

      show(0);
    }

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
  function renderFeaturedProject(projectId) {
    const host = document.getElementById("home-featured");
    if (!host) return;
    const p = findProject(projectId);
    if (!p) return;

    // Build gallery: screenshots first, trailer(s) last
    const items = (p.screenshots || []).map(s => typeof s === "string" ? { type: "image", src: s } : { type: "image", src: s.src, caption: s.caption });
    if (Array.isArray(p.youtubeIds)) p.youtubeIds.forEach(id => items.push({ type: "youtube", id, caption: "Trailer" }));
    else if (p.youtubeId) items.push({ type: "youtube", id: p.youtubeId, caption: "Trailer" });
    else if (p.video) items.push({ type: "video", src: p.video, caption: "Trailer" });
    if (!items.length) return;

    function stageHtml(it) {
      if (it.type === "youtube") return `<iframe class="featured-frame" src="https://www.youtube.com/embed/${it.id}?rel=0" title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      if (it.type === "video") return `<video class="featured-frame" controls preload="metadata" playsinline><source src="${it.src}" type="video/mp4"></video>`;
      return `<img class="featured-img" src="${it.src}" alt="">`;
    }
    function thumbHtml(it, i, active) {
      const inner = (it.type === "youtube" || it.type === "video")
        ? `<span class="featured-thumb-video"><span class="featured-play">&#9654;</span></span>`
        : `<img src="${it.src}" alt="">`;
      return `<button class="featured-thumb${active ? ' active' : ''}" data-i="${i}" aria-label="Item ${i + 1}">${inner}</button>`;
    }

    host.innerHTML = `
      <div class="featured-card">
        <div class="featured-stage" id="featured-stage">${stageHtml(items[0])}</div>
        <div class="featured-caption" id="featured-caption" style="${items[0].caption ? '' : 'display:none'}">${items[0].caption || ''}</div>
        <div class="featured-strip">
          ${items.map((it, i) => thumbHtml(it, i, i === 0)).join("")}
        </div>
        <div class="featured-meta">
          <div class="featured-title-row">
            <span class="featured-name">${p.title}</span>
            <span class="featured-genre">${p.genre}</span>
          </div>
          <a href="#project-${p.id}" class="featured-cta" data-project-id="${p.id}">See the full breakdown &rarr;</a>
        </div>
      </div>
    `;

    const stage = host.querySelector("#featured-stage");
    const captionEl = host.querySelector("#featured-caption");
    const thumbs = host.querySelectorAll(".featured-thumb");
    thumbs.forEach(t => t.addEventListener("click", (e) => {
      e.preventDefault();
      const i = parseInt(t.dataset.i);
      stage.innerHTML = stageHtml(items[i]);
      thumbs.forEach((x, j) => x.classList.toggle("active", j === i));
      captionEl.textContent = items[i].caption || "";
      captionEl.style.display = items[i].caption ? "block" : "none";
    }));
    host.querySelector(".featured-cta").addEventListener("click", (e) => {
      e.preventDefault();
      openProjectDetail(p.id);
    });
  }

  function init() {
    initNav();
    initScrollSpy();
    initProjectFilter();
    initCategoryButtons();
    renderProjectGrid();
    renderFeaturedProject("kaiju-corp");
    handleHash();
    document.getElementById("project-detail-overlay").addEventListener("click", (e) => {
      if (e.target.id === "project-detail-overlay") closeProjectDetail();
    });
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

// ── Lightbox ──────────────────────────────────────────────────────────────────
const LIGHTBOX = (() => {
  let images = [];
  let index = 0;

  function update() {
    document.getElementById("lightbox-img").src = images[index];
    document.getElementById("lightbox-prev").style.visibility = images.length > 1 ? "visible" : "hidden";
    document.getElementById("lightbox-next").style.visibility = images.length > 1 ? "visible" : "hidden";
  }

  function open(imgs, i) {
    images = imgs;
    index = i;
    update();
    document.getElementById("lightbox").classList.add("lightbox-open");
  }

  function close() {
    document.getElementById("lightbox").classList.remove("lightbox-open");
  }

  function prev() { index = (index - 1 + images.length) % images.length; update(); }
  function next() { index = (index + 1) % images.length; update(); }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("lightbox-close").addEventListener("click", (e) => { e.stopPropagation(); close(); });
    document.getElementById("lightbox-prev").addEventListener("click",  (e) => { e.stopPropagation(); prev(); });
    document.getElementById("lightbox-next").addEventListener("click",  (e) => { e.stopPropagation(); next(); });
    document.getElementById("lightbox").addEventListener("click", close);

    document.addEventListener("keydown", (e) => {
      if (!document.getElementById("lightbox").classList.contains("lightbox-open")) return;
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    });
  });

  return { open, close };
})();

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
