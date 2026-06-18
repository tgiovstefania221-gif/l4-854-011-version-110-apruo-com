(function () {
    function qs(selector, root) {
        return (root || document).querySelector(selector);
    }

    function qsa(selector, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    }

    var menuButton = qs('[data-menu-button]');
    var mobilePanel = qs('[data-mobile-panel]');

    if (menuButton && mobilePanel) {
        menuButton.addEventListener('click', function () {
            mobilePanel.classList.toggle('open');
        });
    }

    var carousel = qs('[data-hero-carousel]');

    if (carousel) {
        var slides = qsa('[data-hero-slide]', carousel);
        var dots = qsa('[data-hero-dot]', carousel);
        var active = 0;

        function show(index) {
            active = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('active', slideIndex === active);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('active', dotIndex === active);
            });
        }

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                show(Number(dot.getAttribute('data-hero-dot') || 0));
            });
        });

        if (slides.length > 1) {
            window.setInterval(function () {
                show(active + 1);
            }, 5200);
        }
    }

    qsa('[data-local-filter]').forEach(function (input) {
        var scope = input.closest('section') || document;
        var cards = qsa('[data-filter-card]', scope);

        input.addEventListener('input', function () {
            var keyword = input.value.trim().toLowerCase();

            cards.forEach(function (card) {
                var text = ((card.getAttribute('data-title') || '') + ' ' + (card.getAttribute('data-meta') || '')).toLowerCase();
                card.style.display = text.indexOf(keyword) > -1 ? '' : 'none';
            });
        });
    });

    var searchInput = qs('[data-search-input]');
    var searchResults = qs('[data-search-results]');
    var searchSummary = qs('[data-search-summary]');

    if (searchInput && searchResults && searchSummary && Array.isArray(window.MOVIE_SEARCH_INDEX)) {
        var params = new URLSearchParams(window.location.search);
        var initialKeyword = params.get('q') || '';
        searchInput.value = initialKeyword;

        function renderSearch(keyword) {
            var query = keyword.trim().toLowerCase();
            searchResults.innerHTML = '';

            if (!query) {
                searchSummary.textContent = '输入关键词查找影片';
                return;
            }

            var results = window.MOVIE_SEARCH_INDEX.filter(function (movie) {
                return movie.search.indexOf(query) > -1;
            }).slice(0, 120);

            if (!results.length) {
                searchSummary.textContent = '没有找到相关影片';
                return;
            }

            searchSummary.textContent = '搜索结果';
            searchResults.innerHTML = results.map(function (movie) {
                return [
                    '<article class="movie-card">',
                    '<a href="' + movie.url + '" class="poster-link">',
                    '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
                    '<span class="poster-shade"></span>',
                    '<span class="play-float">▶</span>',
                    '<span class="year-badge">' + escapeHtml(movie.year) + '</span>',
                    '</a>',
                    '<div class="card-body">',
                    '<h2><a href="' + movie.url + '">' + escapeHtml(movie.title) + '</a></h2>',
                    '<p class="card-meta">' + escapeHtml(movie.genre) + '</p>',
                    '<p class="card-desc">' + escapeHtml(movie.line) + '</p>',
                    '</div>',
                    '</article>'
                ].join('');
            }).join('');
        }

        function escapeHtml(value) {
            return String(value || '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        }

        renderSearch(initialKeyword);

        searchInput.addEventListener('input', function () {
            renderSearch(searchInput.value);
        });
    }

    qsa('[data-like-button]').forEach(function (button) {
        var key = 'movieLikes';
        var id = button.getAttribute('data-like-id');
        var likes = JSON.parse(localStorage.getItem(key) || '[]');

        function update() {
            var liked = likes.indexOf(id) > -1;
            button.classList.toggle('active', liked);
            button.textContent = liked ? '♥ 已收藏' : '♡ 收藏';
        }

        button.addEventListener('click', function () {
            if (likes.indexOf(id) > -1) {
                likes = likes.filter(function (item) {
                    return item !== id;
                });
            } else {
                likes.push(id);
            }
            localStorage.setItem(key, JSON.stringify(likes));
            update();
        });

        update();
    });

    qsa('[data-share-button]').forEach(function (button) {
        button.addEventListener('click', function () {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href
                });
            } else if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                button.textContent = '已复制';
                window.setTimeout(function () {
                    button.textContent = '分享';
                }, 1200);
            }
        });
    });
})();
