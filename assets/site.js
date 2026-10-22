/* José Ravignon — interactions du site (sans dépendance) */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Éditeur du hero : les onglets réécrivent le projet ---------- */
  const PROJETS = {
    vitrine: { type: "site vitrine", objectif: "être trouvé et contacté", technologie: "adaptée au besoin", url: "votre-site.fr", desc: "Aperçu illustratif d'un site vitrine." },
    boutique: { type: "boutique en ligne", objectif: "vendre en ligne", technologie: "Shopify ou sur mesure", url: "votre-boutique.fr", desc: "Aperçu illustratif d'une boutique en ligne." },
    application: { type: "application métier", objectif: "en finir avec Excel", technologie: "adaptée au besoin", url: "app.votre-entreprise.fr", desc: "Aperçu illustratif d'une application métier." },
  };

  const tabs = [...document.querySelectorAll('.editor-hero [role="tab"]')];
  const panel = document.getElementById("apercu");
  const body = panel && panel.querySelector(".preview-body");
  const slot = (k) => document.querySelectorAll(`.stage [data-k="${k}"]`);
  let run = 0;

  const type = (el, text, id) => new Promise((done) => {
    if (reduce) { el.textContent = text; return done(); }
    el.classList.add("typing");
    el.textContent = "";
    let i = 0;
    const step = () => {
      if (id !== run) return done();
      el.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(step, 22 + Math.random() * 26);
      else { el.classList.remove("typing"); done(); }
    };
    setTimeout(step, 120);
  });

  const show = async (name, focus) => {
    const data = PROJETS[name];
    if (!data || !body) return;
    const id = ++run;
    tabs.forEach((t) => {
      const on = t.dataset.projet === name;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
      if (on) { panel.setAttribute("aria-labelledby", t.id); if (focus) t.focus(); }
    });
    document.querySelectorAll(".stage .typing").forEach((el) => el.classList.remove("typing"));
    slot("url").forEach((el) => (el.textContent = data.url));
    slot("desc").forEach((el) => (el.textContent = data.desc));
    body.dataset.show = name;
    for (const k of ["type", "objectif", "technologie"]) {
      const el = slot(k)[0];
      if (el && el.textContent !== data[k]) await type(el, data[k], id);
      if (id !== run) return;
    }
  };

  /* Lecture automatique tant que personne n'a touché l'éditeur */
  let auto = null;
  let stopped = false;
  const order = Object.keys(PROJETS);
  const stopAuto = () => { clearInterval(auto); auto = null; };
  const startAuto = () => {
    if (reduce || auto || stopped || !body) return;
    auto = setInterval(() => {
      const cur = order.indexOf(body.dataset.show);
      show(order[(cur + 1) % order.length]);
    }, 5200);
  };

  tabs.forEach((t, i) => {
    t.addEventListener("click", () => { stopped = true; stopAuto(); show(t.dataset.projet); });
    t.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (e.key === "Home" || e.key === "End" || d) {
        e.preventDefault(); stopped = true; stopAuto();
        const n = e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : (i + d + tabs.length) % tabs.length;
        show(tabs[n].dataset.projet, true);
      }
    });
  });

  const stage = document.querySelector(".stage");
  if (stage && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => (e.isIntersecting ? startAuto() : stopAuto()), { threshold: 0.4 }).observe(stage);
    document.addEventListener("visibilitychange", () => (document.hidden ? stopAuto() : startAuto()));
  }

  /* ---------- Onglet actif + fichier dans la barre d'état ---------- */
  const links = new Map([...document.querySelectorAll(".tabs a")].map((a) => [a.hash.slice(1), a]));
  const sbFile = document.querySelector(".sb-file");
  const sections = [...document.querySelectorAll("main section[data-file]")];
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const s = e.target;
        links.forEach((a, id) => {
          const on = id === s.id;
          a.classList.toggle("on", on);
          if (on) {
            a.setAttribute("aria-current", "true");
            const bar = a.closest(".tabs");
            if (bar.scrollWidth > bar.clientWidth) {
              const left = a.getBoundingClientRect().left - bar.getBoundingClientRect().left + bar.scrollLeft - 24;
              bar.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
            }
          }
          else a.removeAttribute("aria-current");
        });
        if (sbFile) sbFile.textContent = s.dataset.file;
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => io.observe(s));
  }
})();
