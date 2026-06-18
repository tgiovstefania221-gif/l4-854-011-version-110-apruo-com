import { H as Hls } from './hls-vendor.js';

export function initMoviePlayer(source) {
    var video = document.querySelector('[data-player-video]');
    var cover = document.querySelector('[data-player-cover]');
    var progress = document.querySelector('[data-player-progress]');
    var playButtons = Array.prototype.slice.call(document.querySelectorAll('[data-player-toggle]'));
    var muteButton = document.querySelector('[data-player-mute]');
    var fullscreenButton = document.querySelector('[data-player-fullscreen]');
    var hls = null;
    var attached = false;

    if (!video || !source) {
        return;
    }

    function attach() {
        if (attached) {
            return;
        }

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = source;
        } else if (Hls.isSupported()) {
            hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hls.loadSource(source);
            hls.attachMedia(video);
        } else {
            video.src = source;
        }

        attached = true;
    }

    function setPlayingState() {
        playButtons.forEach(function (button) {
            button.textContent = video.paused ? '▶' : '❚❚';
        });

        if (cover) {
            cover.classList.toggle('hidden', !video.paused);
        }
    }

    function play() {
        attach();
        var promise = video.play();

        if (promise && typeof promise.then === 'function') {
            promise.then(setPlayingState).catch(function () {
                setPlayingState();
            });
        } else {
            setPlayingState();
        }
    }

    function toggle() {
        if (video.paused) {
            play();
        } else {
            video.pause();
            setPlayingState();
        }
    }

    playButtons.forEach(function (button) {
        button.addEventListener('click', toggle);
    });

    video.addEventListener('click', toggle);
    video.addEventListener('play', setPlayingState);
    video.addEventListener('pause', setPlayingState);

    video.addEventListener('timeupdate', function () {
        if (progress && video.duration) {
            progress.style.width = (video.currentTime / video.duration * 100) + '%';
        }
    });

    if (muteButton) {
        muteButton.addEventListener('click', function () {
            video.muted = !video.muted;
            muteButton.textContent = video.muted ? '×' : '♫';
        });
    }

    if (fullscreenButton) {
        fullscreenButton.addEventListener('click', function () {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else if (video.requestFullscreen) {
                video.requestFullscreen();
            }
        });
    }

    window.addEventListener('beforeunload', function () {
        if (hls) {
            hls.destroy();
        }
    });

    setPlayingState();
}
