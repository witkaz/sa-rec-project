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
const stepperElement = [...document.querySelectorAll('.stepper__element')];
const questionHeading = [...document.querySelectorAll('.products__question-content')];
const product = [...document.querySelectorAll('.product__add')];

const switchDarkTheme = function(e) {
    toggleBtn.classList.toggle('active');
    headerTitle.classList.toggle('dark-txt-color');
    headerSubtitle.classList.toggle('dark-txt-color');
    [...stepperElement].forEach((stepEl) => {
        stepEl.classList.toggle('dark-bg-color');
    });
    [...questionHeading].forEach((qhEl) => {
        qhEl.classList.toggle('dark-bg-color');
    });
    [...product].forEach((product) => {
        product.classList.toggle('dark-bg-color');
    });
    e.preventDefault();
}

toggleBtn.addEventListener('click', switchDarkTheme);