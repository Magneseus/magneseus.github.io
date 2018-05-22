var figure = $(".chapter").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
    $('video', this).get(0).loop = true;
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}
