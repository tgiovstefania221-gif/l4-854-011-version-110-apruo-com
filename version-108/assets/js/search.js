(function () {
  function getQuery() {
    var params = new URLSearchParams(window.location.search);
    return (params.get('q') || '').trim();
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function card(movie) {
    var tags = movie.tags.slice(0, 3).map(function (tag) {
      return '<span>' + escapeHtml(tag) + '</span>';
    }).join('');

    return '' +
      '<a class="movie-card" href="' + escapeHtml(movie.detailUrl) + '" data-movie-card>' +
      '  <span class="poster-wrap">' +
      '    <img src="' + escapeHtml(movie.image) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
      '    <span class="poster-overlay"><span class="play-icon">▶</span></span>' +
      '    <span class="badge year-badge">' + escapeHtml(movie.year) + '</span>' +
      '    <span class="badge score-badge">' + escapeHtml(movie.score) + '</span>' +
      '  </span>' +
      '  <span class="movie-card-body">' +
      '    <strong>' + escapeHtml(movie.title) + '</strong>' +
      '    <span class="movie-meta-line">' + escapeHtml(movie.region) + ' · ' + escapeHtml(movie.type) + '</span>' +
      '    <span class="movie-genre">' + escapeHtml(movie.genre) + '</span>' +
      '    <span class="tag-row">' + tags + '</span>' +
      '  </span>' +
      '</a>';
  }

  function matches(movie, query) {
    var text = [
      movie.title,
      movie.region,
      movie.type,
      movie.year,
      movie.genre,
      movie.tags.join(' '),
      movie.oneLine,
      movie.summary
    ].join(' ').toLowerCase();
    return text.indexOf(query.toLowerCase()) !== -1;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('[data-search-page-input]');
    var title = document.querySelector('[data-search-title]');
    var note = document.querySelector('[data-search-note]');
    var results = document.querySelector('[data-search-results]');
    var query = getQuery();

    if (input) {
      input.value = query;
    }

    if (!query || !results) {
      return;
    }

    fetch('assets/data/movies.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (movies) {
        var found = movies.filter(function (movie) {
          return matches(movie, query);
        });
        if (title) {
          title.textContent = '搜索结果：' + query;
        }
        if (note) {
          note.textContent = '找到 ' + found.length + ' 部相关影片。';
        }
        if (!found.length) {
          results.innerHTML = '<div class="empty-state">未找到相关影片，请尝试其他关键词。</div>';
          return;
        }
        results.innerHTML = found.map(card).join('');
      })
      .catch(function () {
        if (results) {
          results.innerHTML = '<div class="empty-state">搜索数据加载失败，请刷新页面重试。</div>';
        }
      });
  });
})();
