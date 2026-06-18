(function () {
  function ready(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function setupMobileMenu() {
    var button = document.querySelector('[data-menu-toggle]');
    if (!button) {
      return;
    }
    button.addEventListener('click', function () {
      document.body.classList.toggle('mobile-menu-open');
    });
  }

  function setupHero() {
    var root = document.querySelector('[data-hero]');
    if (!root) {
      return;
    }

    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(root.querySelectorAll('[data-hero-dot]'));
    var thumbs = Array.prototype.slice.call(root.querySelectorAll('[data-hero-thumb]'));
    var prev = root.querySelector('[data-hero-prev]');
    var next = root.querySelector('[data-hero-next]');
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === current);
      });
      thumbs.forEach(function (thumb, thumbIndex) {
        thumb.classList.toggle('is-active', thumbIndex === current);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
      }
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        show(index);
        start();
      });
    });

    thumbs.forEach(function (thumb, index) {
      thumb.addEventListener('mouseenter', function () {
        show(index);
      });
    });

    if (prev) {
      prev.addEventListener('click', function () {
        show(current - 1);
        start();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        show(current + 1);
        start();
      });
    }

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    show(0);
    start();
  }

  function setupCategoryFilter() {
    var scope = document.querySelector('[data-filter-scope]');
    var results = document.querySelector('[data-filter-results]');
    if (!scope || !results) {
      return;
    }

    var input = scope.querySelector('[data-filter-input]');
    var year = scope.querySelector('[data-filter-year]');
    var type = scope.querySelector('[data-filter-type]');
    var count = scope.querySelector('[data-filter-count]');
    var cards = Array.prototype.slice.call(results.querySelectorAll('[data-movie-card]'));

    function normalize(value) {
      return String(value || '').trim().toLowerCase();
    }

    function applyFilter() {
      var query = normalize(input ? input.value : '');
      var yearValue = year ? year.value : '';
      var typeValue = type ? type.value : '';
      var visible = 0;

      cards.forEach(function (card) {
        var haystack = normalize([
          card.dataset.title,
          card.dataset.genre,
          card.dataset.tags,
          card.dataset.year,
          card.dataset.type
        ].join(' '));
        var matchesQuery = !query || haystack.indexOf(query) !== -1;
        var matchesYear = !yearValue || card.dataset.year === yearValue;
        var matchesType = !typeValue || card.dataset.type === typeValue;
        var shouldShow = matchesQuery && matchesYear && matchesType;
        card.classList.toggle('is-hidden', !shouldShow);
        if (shouldShow) {
          visible += 1;
        }
      });

      if (count) {
        count.textContent = '显示 ' + visible + ' 部';
      }
    }

    [input, year, type].forEach(function (control) {
      if (control) {
        control.addEventListener('input', applyFilter);
        control.addEventListener('change', applyFilter);
      }
    });

    applyFilter();
  }

  function setupShareButtons() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-copy-link]'));
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var value = button.getAttribute('data-copy-link') || window.location.href;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(value);
          button.textContent = '已复制';
          window.setTimeout(function () {
            button.textContent = '分享';
          }, 1600);
        }
      });
    });
  }

  ready(function () {
    setupMobileMenu();
    setupHero();
    setupCategoryFilter();
    setupShareButtons();
  });
})();
