(function () {
  function ready(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function setupPlayer(root) {
    var video = root.querySelector('video');
    var source = root.getAttribute('data-source');
    var playButton = root.querySelector('[data-play-button]');
    var controlPlay = root.querySelector('[data-control-play]');
    var muteButton = root.querySelector('[data-control-mute]');
    var fullscreenButton = root.querySelector('[data-control-fullscreen]');
    var progressBar = root.querySelector('[data-progress-bar]');
    var status = root.querySelector('[data-player-status]');
    var hlsInstance = null;
    var isPrepared = false;

    if (!video || !source) {
      return;
    }

    function setStatus(text) {
      if (status) {
        status.textContent = text;
      }
    }

    function prepareSource() {
      if (isPrepared) {
        return;
      }
      isPrepared = true;

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        setStatus('视频源已绑定，正在播放');
        return;
      }

      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hlsInstance.loadSource(source);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
          setStatus('视频已就绪');
        });
        hlsInstance.on(window.Hls.Events.ERROR, function (event, data) {
          if (data && data.fatal) {
            setStatus('视频加载遇到问题，请刷新后重试');
          }
        });
        return;
      }

      video.src = source;
      setStatus('当前浏览器将尝试直接播放视频源');
    }

    function playVideo() {
      prepareSource();
      var promise = video.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {
          setStatus('请再次点击播放按钮');
        });
      }
    }

    function togglePlay() {
      if (video.paused) {
        playVideo();
      } else {
        video.pause();
      }
    }

    function syncPlayState() {
      var isPlaying = !video.paused && !video.ended;
      root.classList.toggle('is-playing', isPlaying);
      if (controlPlay) {
        controlPlay.textContent = isPlaying ? '暂停' : '播放';
      }
    }

    video.addEventListener('click', togglePlay);
    video.addEventListener('play', syncPlayState);
    video.addEventListener('pause', syncPlayState);
    video.addEventListener('ended', syncPlayState);
    video.addEventListener('timeupdate', function () {
      if (!progressBar || !video.duration) {
        return;
      }
      var percent = Math.max(0, Math.min(100, (video.currentTime / video.duration) * 100));
      progressBar.style.width = percent + '%';
    });

    if (playButton) {
      playButton.addEventListener('click', togglePlay);
    }

    if (controlPlay) {
      controlPlay.addEventListener('click', togglePlay);
    }

    if (muteButton) {
      muteButton.addEventListener('click', function () {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? '取消静音' : '静音';
      });
    }

    if (fullscreenButton) {
      fullscreenButton.addEventListener('click', function () {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else if (root.requestFullscreen) {
          root.requestFullscreen();
        }
      });
    }

    window.addEventListener('beforeunload', function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  }

  ready(function () {
    var players = Array.prototype.slice.call(document.querySelectorAll('[data-player]'));
    players.forEach(setupPlayer);
  });
})();
