
const ready = (callback) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
};

const normalize = (value) => (value || "").toString().trim().toLowerCase();

const setupMobileNav = () => {
  const toggle = document.querySelector("[data-mobile-toggle]");
  const nav = document.querySelector("[data-main-nav]");
  if (!toggle || !nav) {
    return;
  }
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
};

const setupHero = () => {
  const hero = document.querySelector("[data-hero]");
  if (!hero) {
    return;
  }
  const slides = Array.from(hero.querySelectorAll(".hero-slide"));
  const dots = Array.from(hero.querySelectorAll(".hero-dot"));
  const prev = hero.querySelector("[data-hero-prev]");
  const next = hero.querySelector("[data-hero-next]");
  let index = 0;
  let timer = null;

  const activate = (target) => {
    index = (target + slides.length) % slides.length;
    slides.forEach((slide, position) => slide.classList.toggle("active", position === index));
    dots.forEach((dot, position) => dot.classList.toggle("active", position === index));
  };

  const move = (step) => {
    activate(index + step);
  };

  const start = () => {
    stop();
    timer = window.setInterval(() => move(1), 5200);
  };

  const stop = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      activate(Number(dot.dataset.heroDot || 0));
      start();
    });
  });

  if (prev) {
    prev.addEventListener("click", () => {
      move(-1);
      start();
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      move(1);
      start();
    });
  }

  hero.addEventListener("mouseenter", stop);
  hero.addEventListener("mouseleave", start);
  start();
};

const setupCardFilter = () => {
  const lists = Array.from(document.querySelectorAll("[data-card-list]"));
  if (!lists.length) {
    return;
  }
  const searchInputs = Array.from(document.querySelectorAll("[data-card-search], [data-search-page-input]"));
  const chips = Array.from(document.querySelectorAll(".filter-chip"));
  let activeFilter = "all";

  const params = new URLSearchParams(window.location.search);
  const q = params.get("q") || "";
  if (q) {
    searchInputs.forEach((input) => {
      input.value = q;
    });
  }

  const matches = (card, term, filter) => {
    const haystack = normalize([
      card.dataset.title,
      card.dataset.genre,
      card.dataset.region,
      card.dataset.type,
      card.dataset.year,
      card.dataset.category,
      card.textContent
    ].join(" "));
    const termPass = !term || haystack.includes(term);
    const filterPass = filter === "all" || haystack.includes(normalize(filter));
    return termPass && filterPass;
  };

  const apply = () => {
    const term = normalize(searchInputs.find((input) => input.value)?.value || "");
    lists.forEach((list) => {
      Array.from(list.querySelectorAll(".searchable-card")).forEach((card) => {
        card.classList.toggle("is-hidden", !matches(card, term, activeFilter));
      });
    });
  };

  searchInputs.forEach((input) => {
    input.addEventListener("input", apply);
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeFilter = chip.dataset.filter || "all";
      chips.forEach((item) => item.classList.toggle("active", item === chip));
      apply();
    });
  });

  apply();
};

ready(() => {
  setupMobileNav();
  setupHero();
  setupCardFilter();
});
