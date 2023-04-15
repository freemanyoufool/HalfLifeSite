let preloader = document.querySelector('.preloader');
let hliconloader = document.querySelector('.hliconloader');
let parent = document.querySelector('.loadparent')

function loaded() {
    parent.removeChild(preloader)
    parent.removeChild(hliconloader)
}

function start() {
    setTimeout(loaded, 1600);
}

document.addEventListener('DOMContentLoaded', start);
