// CONTENT SWITCH  //
const nextPageBtn = document.getElementById('next-page');
const previousPageBtn = document.getElementById('previous-page');
const visiblePage = document.getElementById('first-page');
const hiddenPage = document.getElementById('second-page');


const toggleNextContent = (e) => {
    e.preventDefault();
    visiblePage.classList.toggle('is-page-hidden');
    hiddenPage.classList.toggle('is-page-hidden');
};

const togglePreviousContent = (e) => {
    e.preventDefault();
    visiblePage.classList.toggle('is-page-hidden');
    hiddenPage.classList.toggle('is-page-hidden');
};

nextPageBtn.addEventListener('click', toggleNextContent);
previousPageBtn.addEventListener('click', togglePreviousContent);



// THEME SWITCH //
const toggleBtn = document.querySelector('.toggle');

const switchDarkTheme = (e) => {
    e.preventDefault();
    document.body.classList.toggle('dark');
};

toggleBtn.addEventListener('click', switchDarkTheme);