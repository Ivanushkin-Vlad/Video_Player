window.onload = function () {
    let $ = function (id) { return document.getElementById(id) }
    let v = $("video");

    $("rewaindForward").onclick = function () {
        v.currentTime += 5;
    };

    $("rewaindBack").onclick = function () {
        v.currentTime -= 5;
    };

    $("stopButton").onclick = function () {
        v.pause();
        v.currentTime = 0;
        $("playButton").src = "assets/image/start.png";
    };
    $("fullButton").onclick = function () {
        let elem = $("video");

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    };

    $("playButton").onclick = function (e) {
        if (v.paused) {
            v.play();
            e.target.src = "assets/image/pause.png";

        }
        else {
            v.pause();
            e.target.src = "assets/image/start.png";
        }
    };
    
    const Btns = document.querySelectorAll('.videoTrack');

    Btns.forEach(trackBtn => {
        trackBtn.addEventListener('click', function () {
            const videoSrc = `
                <source src="./assets/video/${this.dataset.src}.mp4"/>`
            video.innerHTML = videoSrc;
            localStorage.setItem('videoSrc', videoSrc);
            video.load();
            video.play();
        });
    })

}


