(function () {
    const getRoot = () => document.body.dataset.root || './';

    const escapeHtml = (value) => String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    function initMobileMenu() {
        const toggle = document.querySelector('[data-menu-toggle]');
        const panel = document.querySelector('[data-mobile-panel]');

        if (!toggle || !panel) {
            return;
        }

        toggle.addEventListener('click', () => {
            panel.classList.toggle('is-open');
        });
    }

    function initNavSearch() {
        document.querySelectorAll('[data-nav-search]').forEach((form) => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const input = form.querySelector('input[name="q"]');
                const query = input ? input.value.trim() : '';
                const root = getRoot();

                if (query) {
                    window.location.href = `${root}search.html?q=${encodeURIComponent(query)}`;
                } else {
                    window.location.href = `${root}search.html`;
                }
            });
        });
    }

    function initHeroCarousel() {
        const carousel = document.querySelector('[data-hero-carousel]');

        if (!carousel) {
            return;
        }

        const slides = Array.from(carousel.querySelectorAll('[data-hero-slide]'));
        const dots = Array.from(carousel.querySelectorAll('[data-hero-dot]'));
        const prev = carousel.querySelector('[data-hero-prev]');
        const next = carousel.querySelector('[data-hero-next]');
        let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
        let timer = null;

        const showSlide = (index) => {
            activeIndex = (index + slides.length) % slides.length;
            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle('is-active', slideIndex === activeIndex);
            });
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('is-active', dotIndex === activeIndex);
            });
        };

        const start = () => {
            stop();
            timer = window.setInterval(() => showSlide(activeIndex + 1), 5200);
        };

        const stop = () => {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        };

        if (!slides.length) {
            return;
        }

        prev?.addEventListener('click', () => {
            showSlide(activeIndex - 1);
            start();
        });

        next?.addEventListener('click', () => {
            showSlide(activeIndex + 1);
            start();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                start();
            });
        });

        carousel.addEventListener('mouseenter', stop);
        carousel.addEventListener('mouseleave', start);
        showSlide(activeIndex);
        start();
    }

    function hideBrokenImages(scope = document) {
        scope.querySelectorAll('img[data-cover]').forEach((image) => {
            image.addEventListener('error', () => {
                image.classList.add('is-missing');
            }, { once: true });
        });
    }

    function initCategoryFilter() {
        const input = document.querySelector('[data-category-filter]');
        const cards = Array.from(document.querySelectorAll('[data-category-card]'));

        if (!input || !cards.length) {
            return;
        }

        input.addEventListener('input', () => {
            const query = input.value.trim().toLowerCase();

            cards.forEach((card) => {
                const text = (card.dataset.categoryName || card.textContent || '').toLowerCase();
                card.classList.toggle('is-filtered-out', query && !text.includes(query));
            });
        });
    }

    function initGridFilter() {
        document.querySelectorAll('[data-grid-filter]').forEach((input) => {
            const selector = input.dataset.gridTarget || '[data-grid-item]';
            const items = Array.from(document.querySelectorAll(selector));

            input.addEventListener('input', () => {
                const query = input.value.trim().toLowerCase();

                items.forEach((item) => {
                    const text = (item.dataset.searchText || item.textContent || '').toLowerCase();
                    item.classList.toggle('is-filtered-out', query && !text.includes(query));
                });
            });
        });
    }

    function createSearchCard(movie, root) {
        const href = `${root}movie/${movie.id}.html`;
        const image = `${root}${movie.cover}`;

        return `
<article class="movie-card" data-grid-item>
    <a class="movie-card__poster" href="${href}" aria-label="观看${escapeHtml(movie.title)}">
        <img src="${image}" alt="${escapeHtml(movie.title)}海报" loading="lazy" data-cover>
        <span class="movie-card__play" aria-hidden="true">▶</span>
        <span class="movie-card__badge">${escapeHtml(movie.year)}</span>
        <span class="movie-card__score">${escapeHtml(movie.score)}</span>
    </a>
    <div class="movie-card__body">
        <h2><a href="${href}">${escapeHtml(movie.title)}</a></h2>
        <p>${escapeHtml(movie.one_line)}</p>
        <div class="movie-card__meta">
            <span>${escapeHtml(movie.region)}</span>
            <span>${escapeHtml(movie.type)}</span>
        </div>
    </div>
</article>`;
    }

    function initSearchPage() {
        const page = document.querySelector('[data-search-page]');

        if (!page) {
            return;
        }

        const form = page.querySelector('[data-search-form]');
        const results = page.querySelector('[data-search-results]');
        const summary = page.querySelector('[data-search-summary]');
        const data = Array.isArray(window.MOVIE_SEARCH_DATA) ? window.MOVIE_SEARCH_DATA : [];
        const root = getRoot();
        const params = new URLSearchParams(window.location.search);

        if (!form || !results || !summary) {
            return;
        }

        ['q', 'region', 'type', 'genre', 'year'].forEach((name) => {
            const field = form.elements[name];
            const value = params.get(name);

            if (field && value) {
                field.value = value;
            }
        });

        const render = () => {
            const query = String(form.elements.q?.value || '').trim().toLowerCase();
            const region = String(form.elements.region?.value || '').trim();
            const type = String(form.elements.type?.value || '').trim();
            const genre = String(form.elements.genre?.value || '').trim();
            const year = String(form.elements.year?.value || '').trim();

            const matches = data.filter((movie) => {
                const haystack = [movie.title, movie.region, movie.type, movie.year, movie.genre, movie.tags, movie.one_line]
                    .join(' ')
                    .toLowerCase();

                if (query && !haystack.includes(query)) {
                    return false;
                }

                if (region) {
                    const regionTerms = region.split(/[,，]/).map((item) => item.trim()).filter(Boolean);
                    const matchedRegion = regionTerms.some((term) => String(movie.region || '').includes(term));

                    if (!matchedRegion) {
                        return false;
                    }
                }

                if (type && !String(movie.type || '').includes(type)) {
                    return false;
                }

                if (genre && !String(movie.genre || '').includes(genre)) {
                    return false;
                }

                if (year && String(movie.year || '') !== year) {
                    return false;
                }

                return true;
            }).sort((a, b) => Number(b.hot) - Number(a.hot));

            const shown = matches.slice(0, 120);
            summary.textContent = `找到 ${matches.length} 部影片，当前展示 ${shown.length} 部。`;
            results.innerHTML = shown.map((movie) => createSearchCard(movie, root)).join('');
            hideBrokenImages(results);
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const nextParams = new URLSearchParams();

            for (const [key, value] of formData.entries()) {
                if (String(value).trim()) {
                    nextParams.set(key, String(value).trim());
                }
            }

            const nextUrl = nextParams.toString()
                ? `${window.location.pathname}?${nextParams.toString()}`
                : window.location.pathname;
            window.history.replaceState({}, '', nextUrl);
            render();
        });

        form.querySelectorAll('input, select').forEach((field) => {
            field.addEventListener('change', render);
        });

        form.elements.q?.addEventListener('input', () => {
            window.clearTimeout(form._searchTimer);
            form._searchTimer = window.setTimeout(render, 180);
        });

        render();
    }

    function initScrollPlayButtons() {
        document.querySelectorAll('[data-scroll-play]').forEach((button) => {
            button.addEventListener('click', () => {
                const player = document.querySelector('[data-player]');
                const playButton = player?.querySelector('[data-play]');

                player?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                window.setTimeout(() => playButton?.click(), 360);
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initMobileMenu();
        initNavSearch();
        initHeroCarousel();
        initCategoryFilter();
        initGridFilter();
        initSearchPage();
        initScrollPlayButtons();
        hideBrokenImages();
    });
})();
