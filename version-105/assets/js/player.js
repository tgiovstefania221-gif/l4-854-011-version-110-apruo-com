(function () {
  function initMoviePlayer(videoId, buttonId, source) {
    var video = document.getElementById(videoId);
    var button = document.getElementById(buttonId);
    var hasLoaded = false;
    var hls = null;

    if (!video || !button || !source) {
      return;
    }

    function load() {
      if (hasLoaded) {
        return;
      }

      hasLoaded = true;

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
    }

    function play() {
      load();
      button.classList.add('is-hidden');
      var promise = video.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {});
      }
    }

    function toggle() {
      if (!hasLoaded || video.paused) {
        play();
      } else {
        video.pause();
      }
    }

    button.addEventListener('click', play);
    video.addEventListener('click', toggle);
    video.addEventListener('play', function () {
      button.classList.add('is-hidden');
    });
    video.addEventListener('pause', function () {
      if (hasLoaded && !video.ended) {
        button.classList.remove('is-hidden');
      }
    });
    video.addEventListener('ended', function () {
      button.classList.remove('is-hidden');
    });

    window.addEventListener('pagehide', function () {
      if (hls) {
        hls.destroy();
      }
    });
  }

  window.initMoviePlayer = initMoviePlayer;
})();
