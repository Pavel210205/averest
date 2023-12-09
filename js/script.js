// меню бургер-----------------------------------------------------------------------------------------
document.querySelector('.menu__burger').addEventListener('click', (event) => {
    document.querySelector('.menu__menu').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
    document.body.classList.toggle('lock');
});
//фиксация меню------------------------------------------------------------------------------------
let menu = document.querySelector('.menu');
let header = document.querySelector('.header')
window.addEventListener('scroll', (event) => {
    if (window.scrollY > 1000) {
        menu.setAttribute('id', 'fixed')
    }
    else {
        menu.removeAttribute('id');
    }
})
// изменение содержимого трубки-------------------------------------------------------------
let tel = document.querySelector('.menu__tel>a');
let telContentCopy = tel.textContent;
if (document.body.offsetWidth < 500) {
    tel.textContent = '+';
    tel.parentElement.classList.add('icon');
}
window, addEventListener('resize', () => {
    tel.parentElement.classList.remove('icon');
    tel.textContent = telContentCopy;
    if (document.body.offsetWidth < 500) {
        tel.textContent = '+';
        tel.parentElement.classList.add('icon');
    }
})
// изменения содержимого при клике на item и удаления предыдущих значений
let itemClick = document.querySelectorAll('.scroll-blog__item');
let itemContent = document.querySelectorAll('.body-blog');
for (let i = 0; i < itemClick.length; i++) {
    itemClick[i].addEventListener('click', (event) => {
        if (itemClick[i].classList.contains('active') !== true) {
            for (let del = 0; del < itemClick.length; del++) {
                itemClick[del].classList.remove('active');
                itemContent[del].classList.remove('active');
            }
        }
        itemClick[i].classList.add('active');
        itemContent[i].classList.add('active');
    })
};
itemClick[0].classList.toggle('active');
itemContent[0].classList.toggle('active');
// изменение уровня сложности (круга прогрузки) в зависимости от содержимого-----------------------------
let level = document.querySelectorAll('.slider-popular__level');
let levelIcon = document.querySelectorAll('.slider-popular__level>span')
for (let i = 0; i < level.length; i++) {

    if (level[i].textContent.toUpperCase() == 'ПРОСТОЙ УРОВЕНЬ') {
        levelIcon[i].style.borderTop = '2px solid #061B28';
        continue
    }
    if (level[i].textContent.toUpperCase() == 'СРЕДНИЙ УРОВЕНЬ') {
        levelIcon[i].style.borderTop = '2px solid #061B28';
        levelIcon[i].style.borderRight = '2px solid #061B28';
        continue
    }
    if (level[i].textContent.toUpperCase() == 'СЛОЖНЫЙ УРОВЕНЬ') {
        levelIcon[i].style.borderTop = '2px solid #061B28';
        levelIcon[i].style.borderRight = '2px solid #061B28';
        levelIcon[i].style.borderBottom = '2px solid #061B28';
        continue
    }
    if (level[i].textContent.toUpperCase() == 'ОЧЕНЬ СЛОЖНЫЙ УРОВЕНЬ') {
        levelIcon[i].style.borderTop = '2px solid #061B28';
        levelIcon[i].style.borderRight = '2px solid #061B28';
        levelIcon[i].style.borderBottom = '2px solid #061B28';
        levelIcon[i].style.borderLeft = '2px solid #061B28';
    };
};
//слайдер-------------------------------------------------------------------------------------------------------
let slider = document.querySelector('.slider-popular__flex');
let sliderItems = document.querySelectorAll('.slider-popular__item');
let prevButton = document.querySelector('.btn-prev');
let nextButton = document.querySelector('.btn-next');
let sliderItemWidth = sliderItems[0].offsetWidth;
prevButton.setAttribute('id', 'no-Click');
let counter = 0;
let slidersN = 3;
if (document.body.offsetWidth < '1200') {
    slidersN = 2;
}
if (document.body.offsetWidth < '800') {
    slidersN = 1;
}
nextButton.addEventListener('click', () => {
    if (counter < sliderItems.length - slidersN) {
        counter++;
        prevButton.removeAttribute('id');
    } else {
        nextButton.setAttribute('id', 'no-Click');
    }
    if (counter == sliderItems.length - slidersN) {
        nextButton.setAttribute('id', 'no-Click');
    }
    slider.style.transform = `translateX(-${counter * (sliderItemWidth + 30)}px)`;

});
prevButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        nextButton.removeAttribute('id');
    } else {
        prevButton.setAttribute('id', 'no-Click');
    }
    if (counter < 1) {
        prevButton.setAttribute('id', 'no-Click');
    };
    slider.style.transform = `translateX(-${counter * (sliderItemWidth + 30)}px)`;

});


