// CONTENT SWITCH  //
const nextPageBtn = document.getElementById('next-page');
const previousPageBtn = document.getElementById('previous-page');
const visiblePage = document.getElementById('face-shape-page');
const hiddenPage = document.getElementById('glasses-page');


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


// THEME SWITCH //
const toggleBtn = document.querySelector('.toggle');

const switchDarkTheme = (e) => {
    e.preventDefault();
    document.body.classList.toggle('dark');
};


window.onload = () => {
    nextPageBtn.addEventListener('click', toggleNextContent);
    previousPageBtn.addEventListener('click', togglePreviousContent);
    toggleBtn.addEventListener('click', switchDarkTheme);
};
