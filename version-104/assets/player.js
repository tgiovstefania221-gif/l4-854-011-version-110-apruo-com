import { H as Hls } from './hls-vendor-dru42stk.js';

function setPlayerMessage(player, message) {
    const target = player.querySelector('[data-player-message]');

    if (!target) {
        return;
    }

    target.textContent = message;
    target.classList.add('is-visible');
}

function initPlayer(player) {
    const video = player.querySelector('video[data-video-src]');
    const button = player.querySelector('[data-play]');
    const source = video?.dataset.videoSrc;
    let hls = null;
    let isReady = false;

    if (!video || !button || !source) {
        return;
    }

    const attachSource = () => {
        if (isReady) {
            return;
        }

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = source;
            isReady = true;
            return;
        }

        if (Hls && Hls.isSupported()) {
            hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
            });

            hls.loadSource(source);
            hls.attachMedia(video);
            hls.on(Hls.Events.ERROR, (_event, data) => {
                if (!data || !data.fatal) {
                    return;
                }

                if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                    hls.startLoad();
                    return;
                }

                if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                    hls.recoverMediaError();
                    return;
                }

                setPlayerMessage(player, '播放源暂时无法加载，请稍后重试。');
                hls.destroy();
                hls = null;
                isReady = false;
            });
            isReady = true;
            return;
        }

        setPlayerMessage(player, '当前浏览器不支持 HLS 播放，请使用 Safari 或新版 Chrome、Edge 浏览器。');
    };

    button.addEventListener('click', async () => {
        attachSource();

        try {
            await video.play();
        } catch (error) {
            setPlayerMessage(player, '浏览器阻止了自动播放，请再次点击播放器或使用视频控件播放。');
        }
    });

    video.addEventListener('play', () => {
        button.classList.add('is-hidden');
    });

    video.addEventListener('pause', () => {
        if (!video.ended) {
            button.classList.remove('is-hidden');
        }
    });

    video.addEventListener('ended', () => {
        button.classList.remove('is-hidden');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-player]').forEach(initPlayer);
});
