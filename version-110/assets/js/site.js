(function () {
  function ready(callback) {
    if (document.readyState !== "loading") {
      callback();
      return;
    }
    document.addEventListener("DOMContentLoaded", callback);
  }

  function normalize(value) {
    return (value || "").toString().trim().toLowerCase();
  }

  function setupMenu() {
    var button = document.querySelector("[data-menu-toggle]");
    var menu = document.querySelector("[data-mobile-menu]");
    if (!button || !menu) {
      return;
    }
    button.addEventListener("click", function () {
      menu.classList.toggle("is-open");
    });
  }

  function setupHero() {
    var slider = document.querySelector("[data-hero-slider]");
    if (!slider) {
      return;
    }
    var slides = Array.prototype.slice.call(slider.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
    var current = 0;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        if (slideIndex === current) {
          slide.removeAttribute("hidden");
          slide.setAttribute("aria-hidden", "false");
        } else {
          slide.setAttribute("hidden", "");
          slide.setAttribute("aria-hidden", "true");
        }
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === current);
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        show(index);
      });
    });

    if (slides.length > 1) {
      window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }
    show(0);
  }

  function applyFilters(scope) {
    var input = scope.querySelector("[data-filter-input]");
    var region = scope.querySelector("[data-filter-region]");
    var year = scope.querySelector("[data-filter-year]");
    var cards = Array.prototype.slice.call(scope.querySelectorAll("[data-movie-card]"));
    var empty = scope.querySelector("[data-no-results]");
    var query = normalize(input && input.value);
    var selectedRegion = normalize(region && region.value);
    var selectedYear = normalize(year && year.value);
    var shown = 0;

    cards.forEach(function (card) {
      var searchable = normalize(card.getAttribute("data-search"));
      var cardRegion = normalize(card.getAttribute("data-region"));
      var cardYear = normalize(card.getAttribute("data-year"));
      var ok = true;

      if (query && searchable.indexOf(query) === -1) {
        ok = false;
      }
      if (selectedRegion && cardRegion !== selectedRegion) {
        ok = false;
      }
      if (selectedYear && cardYear !== selectedYear) {
        ok = false;
      }

      card.style.display = ok ? "" : "none";
      if (ok) {
        shown += 1;
      }
    });

    if (empty) {
      empty.classList.toggle("is-visible", shown === 0);
    }
  }

  function setupFilters() {
    var scopes = Array.prototype.slice.call(document.querySelectorAll("[data-filter-scope]"));
    var params = new URLSearchParams(window.location.search);
    var q = params.get("q") || "";

    scopes.forEach(function (scope) {
      var input = scope.querySelector("[data-filter-input]");
      var region = scope.querySelector("[data-filter-region]");
      var year = scope.querySelector("[data-filter-year]");
      if (q && input) {
        input.value = q;
      }
      [input, region, year].forEach(function (element) {
        if (element) {
          element.addEventListener("input", function () {
            applyFilters(scope);
          });
          element.addEventListener("change", function () {
            applyFilters(scope);
          });
        }
      });
      applyFilters(scope);
    });
  }

  ready(function () {
    setupMenu();
    setupHero();
    setupFilters();
  });
})();
