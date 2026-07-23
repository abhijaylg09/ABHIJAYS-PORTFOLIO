 navbar scroll effect
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


var burger = document.getElementById('burger');
var navLinks = document.getElementById('navLinks');

burger.addEventListener('click', function() {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');

    if (navLinks.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// close menu when clicking a link
var links = navLinks.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
    });
}

// fade in sections on scroll
var sections = document.querySelectorAll('.section, .hero');

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

sections.forEach(function(el) {
    el.classList.add('fade');
    observer.observe(el);
});
