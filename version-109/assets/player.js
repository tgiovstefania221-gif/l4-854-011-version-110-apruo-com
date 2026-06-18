(function () {
  window.initMoviePlayer = function (source) {
    var video = document.getElementById('movie-player');
    var overlay = document.getElementById('player-overlay');
    var loaded = false;
    var hls = null;

    if (!video || !source) {
      return;
    }

    function attach() {
      if (loaded) {
        return;
      }
      loaded = true;
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        return;
      }
      if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
        hls.loadSource(source);
        hls.attachMedia(video);
        return;
      }
      video.src = source;
    }

    function start() {
      attach();
      video.controls = true;
      if (overlay) {
        overlay.classList.add('is-hidden');
      }
      var played = video.play();
      if (played && typeof played.catch === 'function') {
        played.catch(function () {
          if (overlay) {
            overlay.classList.remove('is-hidden');
          }
        });
      }
    }

    if (overlay) {
      overlay.addEventListener('click', start);
    }
    video.addEventListener('click', function () {
      if (video.paused) {
        start();
      }
    });
    video.addEventListener('play', function () {
      if (overlay) {
        overlay.classList.add('is-hidden');
      }
    });
  };
})();
