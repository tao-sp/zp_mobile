function resize() {

    var clientWidth = document.documentElement.clientWidth;

    document.documentElement.style.fontSize = 100 * (clientWidth / 750) + 'px';

}

resize();

window.addEventListener('resize', resize);