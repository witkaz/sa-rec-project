// SWITCH CONTENT //
const nextPageBtn = document.getElementById('next-page');
const previousPageBtn = document.getElementById('previous-page');
const visiblePage = document.getElementById('first-page');
const hiddenPage = document.getElementById('second-page');


const toggleNextContent = (e) => {
    visiblePage.classList.toggle('is-page-hidden');
    hiddenPage.classList.toggle('is-page-hidden');
    e.preventDefault();
};

const togglePreviousContent = (e) => {
    visiblePage.classList.toggle('is-page-hidden');
    hiddenPage.classList.toggle('is-page-hidden');
    e.preventDefault();
};

nextPageBtn.addEventListener('click', toggleNextContent);
previousPageBtn.addEventListener('click', togglePreviousContent);



// THEME SWITCH //
const toggleBtn = document.querySelector('.toggle');

const headerTitle = document.querySelector('.header__title');
const headerSubtitle = document.querySelector('.header__subtitle');
const btnHeader = document.querySelector('.btn__header');
const btnNext = document.querySelector('.btn__next');
const btnNextLable = document.querySelector('.btn__label');
const productsTitle = document.querySelector('.products__section-title');
const questionHeading = [...document.querySelectorAll('.product__question-content')];
const stepperElement = [...document.querySelectorAll('.stepper__element')];
const product = [...document.querySelectorAll('.product__add')];

const switchDarkTheme = function(e) {
    toggleBtn.classList.toggle('active');
    headerTitle.classList.toggle('dark-txt-color');
    headerSubtitle.classList.toggle('dark-txt-color');
    btnHeader.classList.toggle('dark-bg-color');
    btnNext.classList.toggle('dark-bg-color');
    btnNextLable.classList.toggle('dark-txt-color');
    productsTitle.classList.toggle('dark-bg-color');
    [...questionHeading].forEach((qHeadingEl) => {
        qHeadingEl.classList.toggle('dark-txt-color');
    });
    [...stepperElement].forEach((stepEl) => {
        stepEl.classList.toggle('dark-bg-color');
    });
    [...product].forEach((product) => {
        product.classList.toggle('dark-bg-color');
    });
    e.preventDefault();
}

toggleBtn.addEventListener('click', switchDarkTheme);