
(function () {
  window.initMoviePlayer = function (source) {
    const video = document.getElementById("movie-video");
    const button = document.getElementById("movie-play-button");
    if (!video || !button || !source) {
      return;
    }

    let hls = null;
    let attached = false;

    const attachSource = function () {
      if (attached) {
        return;
      }
      attached = true;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = source;
        return;
      }
      if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90
        });
        hls.loadSource(source);
        hls.attachMedia(video);
        return;
      }
      video.src = source;
    };

    const play = async function () {
      attachSource();
      button.classList.add("is-hidden");
      try {
        await video.play();
      } catch (error) {
        button.classList.remove("is-hidden");
      }
    };

    button.addEventListener("click", play);
    video.addEventListener("click", function () {
      if (video.paused) {
        play();
      }
    });
    video.addEventListener("play", function () {
      button.classList.add("is-hidden");
    });
    video.addEventListener("pause", function () {
      if (!video.ended) {
        button.classList.remove("is-hidden");
      }
    });
    window.addEventListener("pagehide", function () {
      if (hls) {
        hls.destroy();
        hls = null;
      }
    });
  };
}());
