(function () {
  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  var toggle = $('[data-menu-toggle]');
  var panel = $('[data-mobile-panel]');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      panel.classList.toggle('is-open');
    });
  }

  $all('.site-search').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      var input = form.querySelector('input[name="q"]');
      if (!input || !input.value.trim()) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      window.location.href = 'search.html?q=' + encodeURIComponent(input.value.trim());
    });
  });

  var hero = $('[data-hero]');
  if (hero) {
    var slides = $all('[data-hero-slide]', hero);
    var dots = $all('[data-hero-dot]', hero);
    var current = 0;
    var show = function (index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === current);
      });
    };
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        show(i);
      });
    });
    if (slides.length > 1) {
      window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }
  }

  function filterCards(root) {
    var input = $('[data-card-filter]', root);
    var year = $('[data-year-filter]', root);
    var cards = $all('[data-title]', root);
    if (!input && !year) {
      return;
    }
    var run = function () {
      var q = input ? input.value.trim().toLowerCase() : '';
      var y = year ? year.value : '';
      cards.forEach(function (card) {
        var text = [card.dataset.title, card.dataset.region, card.dataset.year, card.dataset.genre, card.dataset.tags].join(' ').toLowerCase();
        var matchText = !q || text.indexOf(q) >= 0;
        var matchYear = !y || card.dataset.year === y;
        card.style.display = matchText && matchYear ? '' : 'none';
      });
    };
    if (input) {
      input.addEventListener('input', run);
    }
    if (year) {
      year.addEventListener('change', run);
    }
  }

  $all('.site-section').forEach(filterCards);

  var searchRoot = $('[data-search-page]');
  if (searchRoot && window.SEARCH_MOVIES) {
    var searchInput = $('[data-search-input]', searchRoot);
    var results = $('[data-search-results]', searchRoot);
    var status = $('[data-search-status]', searchRoot);
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q') || '';
    if (searchInput) {
      searchInput.value = q;
    }

    var makeCard = function (movie) {
      var tags = (movie.tags || []).slice(0, 3).map(function (tag) {
        return '<span>' + escapeHtml(tag) + '</span>';
      }).join('');
      return '<article class="movie-card">' +
        '<a class="card-poster" href="' + movie.url + '" aria-label="' + escapeHtml(movie.title) + '">' +
        '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
        '<span class="card-shade"></span><span class="card-play">▶</span><span class="card-chip">' + escapeHtml(movie.category) + '</span></a>' +
        '<div class="card-body"><h2><a href="' + movie.url + '">' + escapeHtml(movie.title) + '</a></h2>' +
        '<p>' + escapeHtml(movie.oneLine) + '</p>' +
        '<div class="card-meta"><span>' + escapeHtml(movie.year) + '</span><span>' + escapeHtml(movie.region) + '</span><span>' + escapeHtml(movie.type) + '</span></div>' +
        '<div class="tag-list">' + tags + '</div></div></article>';
    };

    var render = function () {
      var keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
      var source = window.SEARCH_MOVIES;
      var matched = keyword ? source.filter(function (movie) {
        return [movie.title, movie.region, movie.year, movie.type, movie.genre, movie.category, (movie.tags || []).join(' '), movie.oneLine]
          .join(' ')
          .toLowerCase()
          .indexOf(keyword) >= 0;
      }) : source.slice(0, 24);
      var list = matched.slice(0, 120);
      if (results) {
        results.innerHTML = list.map(makeCard).join('');
      }
      if (status) {
        status.textContent = keyword ? '已找到 ' + matched.length + ' 条相关影片' : '推荐浏览以下精选影片';
      }
    };

    if (searchInput) {
      searchInput.addEventListener('input', render);
    }
    render();
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
})();
