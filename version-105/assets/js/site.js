(function () {
  var toggle = document.querySelector('[data-mobile-toggle]');
  var panel = document.querySelector('[data-mobile-panel]');

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      panel.classList.toggle('is-open');
    });
  }

  var searchForm = document.querySelector('[data-search-form]');
  if (searchForm) {
    searchForm.addEventListener('submit', function (event) {
      var input = searchForm.querySelector('input[name="q"]');
      if (!input || !input.value.trim()) {
        event.preventDefault();
      }
    });
  }

  var resultBox = document.querySelector('[data-search-results]');
  var resultCount = document.querySelector('[data-search-count]');
  var searchInput = document.querySelector('[data-search-input]');

  function card(item) {
    return [
      '<a class="movie-card" href="' + item.url + '">',
      '<span class="poster">',
      '<img src="' + item.cover + '" alt="' + escapeHtml(item.title) + '" loading="lazy">',
      '<span class="year-badge">' + escapeHtml(item.year) + '</span>',
      '<span class="type-badge">' + escapeHtml(item.type) + '</span>',
      '<span class="play-hover">▶</span>',
      '</span>',
      '<h3>' + escapeHtml(item.title) + '</h3>',
      '<p>' + escapeHtml(item.genre) + '</p>',
      '</a>'
    ].join('');
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function runSearch(query) {
    if (!resultBox || typeof SEARCH_ITEMS === 'undefined') {
      return;
    }

    var q = String(query || '').trim().toLowerCase();
    if (!q) {
      resultBox.innerHTML = '<div class="empty-state">输入关键词开始搜索</div>';
      if (resultCount) {
        resultCount.textContent = '';
      }
      return;
    }

    var matched = SEARCH_ITEMS.filter(function (item) {
      return [item.title, item.genre, item.tags, item.region, item.type, item.year].join(' ').toLowerCase().indexOf(q) !== -1;
    }).slice(0, 120);

    if (resultCount) {
      resultCount.textContent = '找到 ' + matched.length + ' 部相关影片';
    }

    if (!matched.length) {
      resultBox.innerHTML = '<div class="empty-state">未找到相关内容</div>';
      return;
    }

    resultBox.innerHTML = matched.map(card).join('');
  }

  if (searchInput && resultBox) {
    var params = new URLSearchParams(window.location.search);
    var initial = params.get('q') || '';
    searchInput.value = initial;
    runSearch(initial);

    searchInput.addEventListener('input', function () {
      runSearch(searchInput.value);
    });
  }
})();
