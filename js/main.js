const btn = document.querySelector('.main-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=> {
    nav.classList.toggle('menu-open');
});