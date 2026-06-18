(function () {
  function setupPlayer(shell) {
    var video = shell.querySelector('video');
    var overlay = shell.querySelector('.player-overlay');
    var source = video ? video.getAttribute('data-src') : '';
    var hls = null;

    if (!video || !source) {
      return;
    }

    function loadVideo() {
      if (video.getAttribute('data-ready') === '1') {
        return;
      }

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hls.loadSource(source);
        hls.attachMedia(video);
      } else {
        video.src = source;
      }

      video.setAttribute('data-ready', '1');
    }

    function beginPlayback() {
      loadVideo();
      shell.classList.add('is-playing');
      video.play().catch(function () {});
    }

    if (overlay) {
      overlay.addEventListener('click', beginPlayback);
      overlay.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          beginPlayback();
        }
      });
    }

    video.addEventListener('click', function () {
      if (video.getAttribute('data-ready') !== '1') {
        beginPlayback();
      }
    });

    video.addEventListener('play', function () {
      shell.classList.add('is-playing');
    });

    video.addEventListener('error', function () {
      shell.classList.remove('is-playing');
    });

    window.addEventListener('beforeunload', function () {
      if (hls) {
        hls.destroy();
      }
    });
  }

  document.querySelectorAll('[data-video-player]').forEach(setupPlayer);
})();
