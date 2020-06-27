// Scroll Events 
window.addEventListener('scroll', function (e) {
    var name = document.querySelector('#name');
    var scrolled = window.pageYOffset;
    var rate = -0.1 * scrolled;
    var opacity_rate = 100 - scrolled * 0.7

    name.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
    // name.style.opacity = +opacity_rate+'%';
});

window.addEventListener('scroll', function (e) {
    var img_hey = document.querySelector('#img_hey');
    var scrolled = window.pageYOffset;
    var opacity_rate = 100 - scrolled * 0.7;
    var rate = -0.8 * scrolled;

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

window.addEventListener('scroll', function(e) {
    var bars = document.querySelectorAll('.progress-bar');
    var progressSection = document.querySelector('#skills').getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 4;
    console.log(bars);

    if (progressSection < screenPosition + 50) {
        bars.forEach(x => {
            x.style.width = x.getAttribute('data-progress');
            console.log(x.style.width);
        })
    }

    
});