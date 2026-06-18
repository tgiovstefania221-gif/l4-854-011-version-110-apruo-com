(function () {
  function startPlayer(panel) {
    var video = panel.querySelector("video");
    if (!video) {
      return;
    }
    var mediaUrl = video.getAttribute("data-video");
    if (!mediaUrl) {
      return;
    }

    function play() {
      panel.classList.add("is-playing");
      var result = video.play();
      if (result && typeof result.catch === "function") {
        result.catch(function () {});
      }
    }

    if (video.getAttribute("data-ready") === "true") {
      play();
      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = mediaUrl;
      video.setAttribute("data-ready", "true");
      video.addEventListener("loadedmetadata", play, { once: true });
      play();
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      var hls = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(mediaUrl);
      hls.attachMedia(video);
      video.hlsPlayer = hls;
      video.setAttribute("data-ready", "true");
      hls.on(window.Hls.Events.MANIFEST_PARSED, play);
      return;
    }

    video.src = mediaUrl;
    video.setAttribute("data-ready", "true");
    play();
  }

  function setup() {
    var panels = Array.prototype.slice.call(document.querySelectorAll("[data-player]"));
    panels.forEach(function (panel) {
      var trigger = panel.querySelector("[data-play-trigger]");
      panel.addEventListener("click", function (event) {
        if (event.target.closest("video") && panel.classList.contains("is-playing")) {
          return;
        }
        startPlayer(panel);
      });
      if (trigger) {
        trigger.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          startPlayer(panel);
        });
      }
    });
  }

  if (document.readyState !== "loading") {
    setup();
  } else {
    document.addEventListener("DOMContentLoaded", setup);
  }
})();
