(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var panel = document.querySelector('[data-mobile-panel]');

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      panel.classList.toggle('is-open');
    });
  }

  var hero = document.querySelector('[data-hero]');

  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var index = 0;

    function showSlide(nextIndex) {
      if (!slides.length) {
        return;
      }

      index = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === index);
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === index);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showSlide(Number(dot.getAttribute('data-hero-dot')) || 0);
      });
    });

    window.setInterval(function () {
      showSlide(index + 1);
    }, 5200);
  }

  function applyInlineFilter(input) {
    var selector = input.getAttribute('data-inline-filter');
    var value = input.value.trim().toLowerCase();

    if (!selector) {
      return;
    }

    document.querySelectorAll(selector).forEach(function (card) {
      var haystack = (card.getAttribute('data-search') || '').toLowerCase();
      card.hidden = value && haystack.indexOf(value) === -1;
    });
  }

  document.querySelectorAll('[data-inline-filter]').forEach(function (input) {
    input.addEventListener('input', function () {
      applyInlineFilter(input);
    });

    var panel = input.closest('.filter-panel');

    if (panel) {
      panel.querySelectorAll('[data-filter-button]').forEach(function (button) {
        button.addEventListener('click', function () {
          panel.querySelectorAll('[data-filter-button]').forEach(function (other) {
            other.classList.remove('is-active');
          });
          button.classList.add('is-active');
          input.value = button.getAttribute('data-filter-button') || '';
          applyInlineFilter(input);
        });
      });
    }
  });

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, function (match) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[match];
    });
  }

  function createSearchCard(item) {
    return [
      '<article class="movie-card">',
      '<a class="poster-link" href="' + escapeHtml(item.detail) + '">',
      '<div class="poster-wrap">',
      '<img src="./' + escapeHtml(item.cover) + '.jpg" alt="' + escapeHtml(item.title) + '" loading="lazy">',
      '<span class="year-badge">' + escapeHtml(item.year) + '</span>',
      '<span class="play-hover">▶</span>',
      '</div>',
      '<div class="movie-info">',
      '<h3>' + escapeHtml(item.title) + '</h3>',
      '<p>' + escapeHtml(item.oneLine) + '</p>',
      '<div class="movie-meta"><span>' + escapeHtml(item.region) + '</span><span>' + escapeHtml(item.genre) + '</span></div>',
      '<div class="tag-row"><span>' + escapeHtml(item.type) + '</span><span>' + escapeHtml(item.category) + '</span></div>',
      '</div>',
      '</a>',
      '</article>'
    ].join('');
  }

  var results = document.getElementById('search-results');
  var searchInput = document.querySelector('[data-search-input]');
  var searchTitle = document.querySelector('[data-search-title]');
  var searchSubtitle = document.querySelector('[data-search-subtitle]');

  if (results && window.MOVIES_SEARCH_DATA) {
    var params = new URLSearchParams(window.location.search);
    var query = params.get('q') || '';

    if (searchInput) {
      searchInput.value = query;
    }

    function renderSearch(value) {
      var keyword = value.trim().toLowerCase();
      var items = window.MOVIES_SEARCH_DATA;

      if (keyword) {
        items = items.filter(function (item) {
          return item.search.indexOf(keyword) !== -1;
        });
      }

      var rendered = items.slice(0, 96);

      if (searchTitle) {
        searchTitle.textContent = keyword ? '搜索结果' : '热门推荐';
      }

      if (searchSubtitle) {
        searchSubtitle.textContent = keyword ? '与关键词匹配的影片内容' : '输入关键词后可查看匹配影片';
      }

      if (!rendered.length) {
        results.innerHTML = '<div class="empty-state">没有找到匹配影片</div>';
        return;
      }

      results.innerHTML = rendered.map(createSearchCard).join('');
    }

    renderSearch(query);

    var form = document.querySelector('[data-search-page-form]');

    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var value = searchInput ? searchInput.value : '';
        var nextUrl = value.trim() ? './search.html?q=' + encodeURIComponent(value.trim()) : './search.html';
        window.history.replaceState(null, '', nextUrl);
        renderSearch(value);
      });
    }
  }
})();
