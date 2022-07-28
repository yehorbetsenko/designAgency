const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const rectangle = document.querySelector('.header__rectangle');
if (burger) {
    burger.addEventListener('click', function () {
        burger.classList.toggle('_active');
        nav.classList.toggle('_active');
        rectangle.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        navServices.classList.remove('_level1');
        services.classList.remove('_level1');
        servicesItems.classList.remove('_level1');
        first.classList.remove('_level1');
        level1.classList.remove('_level2');
        level2Items.classList.remove('_level2');
    })
}

const navServices = document.querySelector('.nav__services');
const services = document.querySelector('.services');
const servicesItems = document.querySelector('.services__items');
const first = document.querySelector('.first');
if (services) {
    services.addEventListener('click', function() {
        navServices.classList.toggle('_level1');
        services.classList.toggle('_level1');
        servicesItems.classList.toggle('_level1');
        first.classList.toggle('_level1');
        level1.classList.remove('_level2');
        level2Items.classList.remove('_level2');
    })
}

const level1 = document.querySelector('.level1-1');
const level2Items = document.querySelector('.level2__items');
if (level1) {
    level1.addEventListener('click', function() {
        level1.classList.toggle('_level2');
        level2Items.classList.toggle('_level2');
    })
}

new Swiper ('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2.5,
    spaceBetween: 45,
    loop: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        620 :{
            slidesPerView: 1.1,
        },
        690 :{
            slidesPerView: 1.3,
        },
        750: {  
            slidesPerView: 1.5,
        },
        850: {  
            slidesPerView: 1.7,
        },
        992: {
            slidesPerView: 1.9
        },
        1040: {
            slidesPerView: 2.1,
        },
        1140: {
            slidesPerView: 2.3,
        },
        1260: {
            slidesPerView: 2.5,
        },
    },
});


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

const btnAboutUs = document.querySelector('.goto-aboutus');
const aboutus = document.querySelector('#aboutus');

btnAboutUs.addEventListener('click', () => {
    scrollTo(aboutus);
    burger.classList.remove('_active');
    nav.classList.remove('_active');
    rectangle.classList.remove('_active');
    document.body.classList.remove('_lock');
})

const btnContactUs = document.querySelector('.goto-contactus');
const contactus = document.querySelector('#contactus');

btnContactUs.addEventListener('click', () => {
    scrollTo(contactus);
    burger.classList.remove('_active');
    nav.classList.remove('_active');
    rectangle.classList.remove('_active');
    document.body.classList.remove('_lock');
})

const btnPortfolio = document.querySelector('.goto-portfolio');
const portfolio = document.querySelector('#portfolio');

btnPortfolio.addEventListener('click', () => {
    scrollTo(portfolio);
    burger.classList.remove('_active');
    nav.classList.remove('_active');
    rectangle.classList.remove('_active');
    document.body.classList.remove('_lock');
    navServices.classList.toggle('_level1');
    services.classList.toggle('_level1');
    servicesItems.classList.toggle('_level1');
    first.classList.toggle('_level1');
    level1.classList.remove('_level2');
    level2Items.classList.remove('_level2');
})

const btnTestimonials = document.querySelector('.goto-testimonials');
const testimonials = document.querySelector('#testimonials');

btnTestimonials.addEventListener('click', () => {
    scrollTo(testimonials);
    burger.classList.remove('_active');
    nav.classList.remove('_active');
    rectangle.classList.remove('_active');
    document.body.classList.remove('_lock');
    navServices.classList.toggle('_level1');
    services.classList.toggle('_level1');
    servicesItems.classList.toggle('_level1');
    first.classList.toggle('_level1');
    level1.classList.remove('_level2');
    level2Items.classList.remove('_level2');
})

const btnAddress = document.querySelector('.goto-address');
const address = document.querySelector('#address');

btnAddress.addEventListener('click', () => {
    scrollTo(address);
    burger.classList.remove('_active');
    nav.classList.remove('_active');
    rectangle.classList.remove('_active');
    document.body.classList.remove('_lock');
    navServices.classList.toggle('_level1');
    services.classList.toggle('_level1');
    servicesItems.classList.toggle('_level1');
    first.classList.toggle('_level1');
    level1.classList.remove('_level2');
    level2Items.classList.remove('_level2');
})

const btnMain = document.querySelector('.goto-main');
const main = document.querySelector('#main');

btnMain.addEventListener('click', () => {
    scrollTo(main);
    burger.classList.remove('_active');
    nav.classList.remove('_active');
    rectangle.classList.remove('_active');
    document.body.classList.remove('_lock');
    navServices.classList.toggle('_level1');
    services.classList.toggle('_level1');
    servicesItems.classList.toggle('_level1');
    first.classList.toggle('_level1');
    level1.classList.remove('_level2');
    level2Items.classList.remove('_level2');
})

const btnAdvantages = document.querySelector('.goto-advantages');
const advantages = document.querySelector('#advantages');

btnAdvantages.addEventListener('click', () => {
    scrollTo(advantages);
    burger.classList.remove('_active');
    nav.classList.remove('_active');
    rectangle.classList.remove('_active');
    document.body.classList.remove('_lock');
    navServices.classList.toggle('_level1');
    services.classList.toggle('_level1');
    servicesItems.classList.toggle('_level1');
    first.classList.toggle('_level1');
    level1.classList.remove('_level2');
    level2Items.classList.remove('_level2');
})