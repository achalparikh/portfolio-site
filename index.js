// Scroll Events 
window.addEventListener('scroll', function (e) {
    var name = document.querySelector('#name');
    var scrolled = window.pageYOffset;
    var rate = -0.5 * scrolled;
    var opacity_rate = 100 - scrolled * 0.7

    name.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
    name.style.opacity = +opacity_rate+'%';
});

window.addEventListener('scroll', function (e) {
    var img_hey = document.querySelector('#img_hey');
    var scrolled = window.pageYOffset;
    var opacity_rate = 100 - scrolled * 0.7;
    var rate = -0.5 * scrolled;

    img_hey.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
    img_hey.style.opacity = +opacity_rate+'%';
});

window.addEventListener('scroll', function (e) {
    var text = document.querySelector('.about_text');
    var screenPosition = window.innerHeight / 2;
    var textPosition = text.getBoundingClientRect().top;

    if (textPosition < screenPosition) {
        text.classList.add('about_text_appear');
    }
});