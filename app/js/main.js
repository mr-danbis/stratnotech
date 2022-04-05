//Initializing the slider
$.noConflict();
$(document).ready(function () {
    $(".slider").owlCarousel({
        items: 1,
        margin: 1000,
        URLhashListener: true,
        startPosition: 'URLHash',
    });

    $(".slider").on("changed.owl.carousel", function (event) {
        var page = event.page.index;
        $(".slider-logos")
            .children(".slider-logos-link")
            .removeClass("active")
            .eq(page)
            .addClass("active");
    });

    $(".partners__slider").owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            450: {
                items: 3,
            },
            850: {
                items: 5,
            },
        }
    });

    $(".service-other__slider").owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            450: {
                items: 2,
                margin: 15,
            },
            850: {
                items: 3,
                margin: 60,
            },
        }
    });

    $(".technologies-other__slider").owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            450: {
                items: 2,
                margin: 15,
            },
            850: {
                items: 3,
                margin: 60,
            },
        }
    });

    $(".industries-other__slider").owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            450: {
                items: 2,
                margin: 15,
            },
            850: {
                items: 4,
                margin: 60,
            },
        }
    });

    $(".equipment-other__slider").owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            450: {
                items: 2,
                margin: 15,
            },
            850: {
                items: 3,
                margin: 60,
            },
        }
    });

    $(".about__certificate-slider").owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            450: {
                items: 2,
                margin: 15,
            },
            850: {
                items: 5,
                margin: 60,
            },
        }
    });

    $(".news-other__slider").owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            450: {
                items: 2,
                margin: 15,
            },
            850: {
                items: 3,
                margin: 60,
            },
        }
    });


    $(".installation-other__slider").owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            450: {
                items: 2,
                margin: 15,
            },
            850: {
                items: 3,
                margin: 60,
            },
        }
    });



    $(".slider-number").owlCarousel({
        items: 1,
        margin: 100
    });
    if (wrapper.classList.contains('sliderNumber')) {
        const newsSlider = document.querySelector('.slider-number');
        const newsSliderDots = newsSlider.querySelectorAll('.owl-dot');

        newsSliderDots.forEach((dot, i) => {
            dot.innerHTML = i + 1;
        });
    }


});

const wrapper = document.querySelector('.wrapper');

//Opening sidebar
$('.header__sidebar-btn').on('click', function () {
    if ($('.sidebar').hasClass('sidebar--hidden')) {
        $('.sidebar').removeClass('sidebar--hidden');
    }
});

//Closing sidebar
$('.close-button').on('click', function () {
    if ($('.sidebar').hasClass('sidebar--hidden')) {
        $('.sidebar').removeClass('sidebar--hidden');
    } else {
        $('.sidebar').addClass('sidebar--hidden');
    }
});


//Closing sidebar beyond its borders
jQuery(function ($) {
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".sidebar"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(".sidebar").addClass("sidebar--hidden");
        }
    });
});


//Opening and closing modal window
function openModal() {
    const form = document.querySelector('.form');
    $('.map__write-btn').on('click', function () {
        $('.modal').removeClass('modal__hidden').addClass('modal__visible');
        if (!form) {
            $('.wrapper').addClass('wrapper-blur');
        }
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $('.modal'); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.modal').addClass("modal__hidden");
            $(".wrapper").removeClass("wrapper-blur");
        }
    });

    $('.close-button--modal').on('click', function () {
        $(".modal").addClass("modal__hidden");
        $('.wrapper').removeClass('wrapper-blur');
    });
}

if (!wrapper.classList.contains('reviews-page')) {
    openModal();
}

// const homePage = 'https://stratnanotech-static.devitgso.iron.hostflyby.net/';
const homePage = 'http://localhost:3001/';


// Active page
const headerLinks = document.querySelectorAll('.header__menu-item');
const linksDB = {
    service: [
        'service.html',
        'resheniya-dlya-klienta.html',
        'kompleksnye-proekty.html',
        'promyshlennaya-avtomatizaciya.html',
        'modernizaciya-proizvodstva.html',
        'programmnoe-obespechenie.html',
        'servisnoe-obsluzhivanie.html'
    ],
    technologies: [
        'technologies.html',
        'cvd.html',
        'plasma-chemistry.html',
        'pvd.html',
        'etching.html',
        'surface-preparation.html',
        'control.html',
        'heating.html'
    ],
    industries: [
        'industries.html',
        'optika.html',
        'mikroelektronika.html',
        'displejnoe-proizvodstvo.html',
        'solnechnye-batarei.html',
        'kosmicheskaya-promyshlennost.html',
        'mashinostroenie.html',
        'ekb.html'
    ],
    equipment: [
        'equipment.html',
        'libra.html',
        'iota.html',
        'lyra.html',
        'vega.html',
        'taurus.html',
        'omega.html',
        'orion.html',
        'ultra.html',
        'delta.html',
        'snt-libra-700.html',
        'snt-libra-1100.html',
        'snt-libra-1500.html',
        'snt-libra-xxx.html',
        'snt-libra-xox.html',
    ],
    about: [
        'about.html',
        'team.html',
        'reviews.html',
        'news.html',
        'blog.html',

        'informacionnye-tekhnologii-v-optike.html',
        'skolko-nuzhno-solnechnyh-batarej-dlya-chastnogo-doma.html',
        'novye-unikalnye-tekhnologii-v-oborudovanii.html',
        'etapy-razrabotki-proekta.html',
        'innovacionnye-tekhnologii-plazmohimii.html',

        's-novym-godom-i-rozhdestvom.html',
        'innovacionnye-proizvodstvennye-sistemy-tonkoplenochnogo-oborudovaniya.html',
        'proizvodstvo-solnechnyh-batarej.html',
        "bolee-rentabelnyj-produkt-dlya-proizvoditelya.html",

    ]
};



if (window.location.href == homePage) {
    $('.header__menu-item--home').addClass('active-link');
}

if (window.location.href == homePage + 'contacts.html') {
    $('.header__menu-item--contacts').addClass('active-link');
}

linksDB.service.forEach(item => {
    if (window.location.href == homePage + item) {
        $('.header__menu-item--service').addClass('active-link');
    }
});

linksDB.technologies.forEach(item => {
    if (window.location.href == homePage + item) {
        $('.header__menu-item--technologies').addClass('active-link');
    }
});

linksDB.industries.forEach(item => {
    if (window.location.href == homePage + item) {
        $('.header__menu-item--industries').addClass('active-link');
    }
});

linksDB.equipment.forEach(item => {
    if (window.location.href == homePage + item) {
        $('.header__menu-item--equipment').addClass('active-link');
    }
});

linksDB.about.forEach(item => {
    if (window.location.href == homePage + item) {
        $('.header__menu-item--about').addClass('active-link');
    }
});


//Catalog view
$('.catalog__btn').on('click', function () {
    if ($('.catalog').hasClass('catalog--visible')) {
        $('.catalog').removeClass('catalog--visible');
    } else {
        $('.catalog').addClass('catalog--visible');
    }

    if ($('.catalog__btn-img').hasClass('catalog__btn-img--translate')) {
        $('.catalog__btn-img').removeClass('catalog__btn-img--translate');
    } else {
        $('.catalog__btn-img').addClass('catalog__btn-img--translate');
    }
});


//Equipment filter
$('.equipment-list').hide();
$('.equipment-btn').click(function (event) {
    $(this).next().slideToggle(200);
});

$('.equipment__role-btn').on('click', function () {
    if ($('.equipment-btn__icon-1').hasClass('equipment-btn__icon--translate')) {
        $('.equipment-btn__icon-1').removeClass('equipment-btn__icon--translate');
    } else {
        $('.equipment-btn__icon-1').addClass('equipment-btn__icon--translate');
    }
});

$('.equipment__technologies-btn').on('click', function () {
    if ($('.equipment-btn__icon-2').hasClass('equipment-btn__icon--translate')) {
        $('.equipment-btn__icon-2').removeClass('equipment-btn__icon--translate');
    } else {
        $('.equipment-btn__icon-2').addClass('equipment-btn__icon--translate');
    }
});



//See more in techonogies block
$('.seeMore').on('click', function () {
    if ($('.technologies__link:last-child').hasClass('technologies__link--visible')) {
        $('.technologies__link:last-child').removeClass('technologies__link--visible');
        $(this).text('Показать ещё');
    } else {
        $('.technologies__link:last-child').addClass('technologies__link--visible');
        $(this).text('Скрыть');
    }
});


//Changing some moments in others pages
if (window.location.href !== homePage) {
    $('.map__yandex').css('height', 'calc(260px + 540 * ((100vw - 270px) / 1650))');
}

if (window.location.href !== homePage && window.location.href !== homePage + 'team.html') {
    $('.close-button--modal').css('display', 'none');
}

// Changing title in different installation blocks
if (wrapper.classList.contains('series')) {
    wrapper.querySelector('.installation__title').innerHTML = '';
}
if (wrapper.classList.contains('technologies-wrapper')) {
    wrapper.querySelector('.installation__title').innerHTML = 'Установки технологии';
}
if (wrapper.classList.contains('about')) {
    $('.form').css('margin-bottom', '88px');
}
if (wrapper.classList.contains('news') || wrapper.classList.contains('blog') || wrapper.classList.contains('installation-page')) {
    $('.form').css('margin-bottom', '40px');
}

if (wrapper.classList.contains('article')) {
    wrapper.querySelector('.blog-block__title').innerHTML = 'Другие публикации блога';
}

if (wrapper.classList.contains('installation-page')) {
    wrapper.querySelector('.contact-text-title').innerHTML = 'Заинтересовала установка? Свяжитесь с нами';
    wrapper.querySelector('.contact-text-text').hidden = true;
}

const varietiesTextBtn = document.querySelectorAll('.readMoreText'),
    additionalText = document.querySelectorAll('.technologies-varieties__item-additional'),
    varietiesItem = document.querySelectorAll('.technologies-varieties__item'),
    varietiesTexts = document.querySelectorAll('.technologies-varieties__item-texts');

let isBtnClicked = false;

varietiesTextBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        if (isBtnClicked) {
            isBtnClicked = false;
            additionalText[i].style.display = 'none';
            btn.textContent = 'Читать полностью';
            varietiesTexts[i].append(btn);
        } else {
            isBtnClicked = true;
            additionalText[i].style.display = 'block';
            btn.textContent = 'Свернуть';
            varietiesItem[i].append(btn);
        }
    });
});



function changingGrid() {
    const viewWrapper = document.querySelector('.view');
    const viewBtn = viewWrapper.querySelectorAll('.view-btn');
    const listWrapper = document.querySelector('.list');

    viewBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (i == 0) {
                listWrapper.classList.remove('list-row');
                viewBtn[i].style.filter = 'grayscale(0)';
                viewBtn[i + 1].style.filter = 'grayscale(1)';
            }
            if (i == 1) {
                listWrapper.classList.add('list-row');
                viewBtn[i].style.filter = 'grayscale(0)';
                viewBtn[i - 1].style.filter = 'grayscale(1)';
            }
        });
    });



    if (window.location.href == homePage + linksDB.equipment[0]) {
        viewBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (i == 0) {
                    localStorage.removeItem('isChangedEquipment');
                }
                if (i == 1) {
                    localStorage.setItem('isChangedEquipment', 'true');
                }
            });
        });
        if (localStorage.getItem('isChangedEquipment') === 'true') {
            listWrapper.classList.add('list-row');
            viewBtn[1].style.filter = 'grayscale(0)';
            viewBtn[0].style.filter = 'grayscale(1)';
        } else {
            listWrapper.classList.remove('list-row');
            viewBtn[0].style.filter = 'grayscale(0)';
            viewBtn[1].style.filter = 'grayscale(1)';
        }
    }

    if (window.location.href == homePage + linksDB.technologies[0]) {
        viewBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (i == 0) {
                    localStorage.removeItem('isChangedTechnologies');
                }
                if (i == 1) {
                    localStorage.setItem('isChangedTechnologies', 'true');
                }
            });
        });
        if (localStorage.getItem('isChangedTechnologies') === 'true') {
            listWrapper.classList.add('list-row');
            viewBtn[1].style.filter = 'grayscale(0)';
            viewBtn[0].style.filter = 'grayscale(1)';
        } else {
            listWrapper.classList.remove('list-row');
            viewBtn[0].style.filter = 'grayscale(0)';
            viewBtn[1].style.filter = 'grayscale(1)';
        }
    }

    if (window.location.href == homePage + linksDB.industries[0]) {
        viewBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (i == 0) {
                    localStorage.removeItem('isChangedIndustries');
                }
                if (i == 1) {
                    localStorage.setItem('isChangedIndustries', 'true');
                }
            });
        });
        if (localStorage.getItem('isChangedIndustries') === 'true') {
            listWrapper.classList.add('list-row');
            viewBtn[1].style.filter = 'grayscale(0)';
            viewBtn[0].style.filter = 'grayscale(1)';
        } else {
            listWrapper.classList.remove('list-row');
            viewBtn[0].style.filter = 'grayscale(0)';
            viewBtn[1].style.filter = 'grayscale(1)';
        }
    }

}

if (wrapper.classList.contains('technologies-page') || wrapper.classList.contains('industries-page') || wrapper.classList.contains('equipment-page')) {
    changingGrid();
}



function openReviewsModal() {
    const reviewsBtnOpen = document.querySelector('.reviews-list__btn');
    const modalReviews = document.querySelector('.reviews-modal');
    const reviewsBtnClose = document.querySelector('.reviews-modal__close-btn');
    reviewsBtnOpen.addEventListener('click', () => {
        modalReviews.classList.remove('modal__hidden');
        modalReviews.classList.add('modal__visible');
        document.querySelector('.wrapper').classList.add('wrapper-blur');
    });

    reviewsBtnClose.addEventListener('click', () => {
        modalReviews.classList.remove('modal__visible');
        modalReviews.classList.add('modal__hidden');
        document.querySelector('.wrapper').classList.remove('wrapper-blur');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div2 = $('.reviews-modal'); // тут указываем ID элемента
        if (!div2.is(e.target) // если клик был не по нашему блоку
            &&
            div2.has(e.target).length === 0) { // и не по его дочерним элементам
            $(div2).addClass("modal__hidden");
            $(".wrapper").removeClass("wrapper-blur");
        }
    });
}

if (wrapper.classList.contains('reviews-page')) {
    openReviewsModal();
}

function isModalVisible() {
    const modal = document.querySelector('.modal');
    const mapWriteBtn = document.querySelector('.map__write-btn');
    const map = document.querySelector('.map');
    if (getComputedStyle(modal).display == 'block' && map) {
        mapWriteBtn.setAttribute('href', '#contact');
        mapWriteBtn.addEventListener('click', () => {

        });
    }
}
isModalVisible();


class pageBg {
    constructor(pageLink, src) {
        this.pageLink = pageLink;
        this.src = src;
    }
    changingPageImage(pageLink, src) {
        const pageBg = document.querySelector('.box-pages');
        if (window.location.href == homePage + `${pageLink}`) {
            pageBg.style.backgroundImage = `url(${src})`;
        }
    }
}

const pagesList = [
    'service.html',
    'technologies.html',
    'industries.html',
    'equipment.html',
    'about.html',
    'contacts.html',
    'resheniya-dlya-klienta.html',
    'servisnoe-obsluzhivanie.html',
    'etching.html',
    'solnechnye-batarei.html',
    'libra.html',
    'team.html',
    'news.html',
    'blog.html',
    'informacionnye-tekhnologii-v-optike.html',
    'innovacionnye-proizvodstvennye-sistemy-tonkoplenochnogo-oborudovaniya.html',
    'snt-libra-700.html',
    'kompleksnye-proekty.html',
    'promyshlennaya-avtomatizaciya.html',
    'modernizaciya-proizvodstva.html',
    'programmnoe-obespechenie.html',
];

const equipment = [
    'iota.html',
    'lyra.html',
    'vega.html',
    'taurus.html',
    'omega.html',
    'orion.html',
    'ultra.html',
    'delta.html',
    'opticExpress.html',
    'magma.html'
];

const news = [
    's-novym-godom-i-rozhdestvom.html',
    'proizvodstvo-solnechnyh-batarej.html',
    'bolee-rentabelnyj-produkt-dlya-proizvoditelya.html'
];

for (let i = 0; i < pagesList.length; i++) {
    if (pagesList[i] === 'snt-libra-700.html') {
        new pageBg().changingPageImage(pagesList[i], `/images/pages-bg/11.png`);
    } else {
        new pageBg().changingPageImage(pagesList[i], `/images/pages-bg/${i+1}.png`);
    }
}

equipment.forEach(series => {
    new pageBg().changingPageImage(series, `/images/pages-bg/11.png`);
});

news.forEach(series => {
    new pageBg().changingPageImage(series, `/images/pages-bg/16.png`);
});

Fancybox.bind("[data-fancybox]");