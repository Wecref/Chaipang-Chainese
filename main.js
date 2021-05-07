const toggleBtn = document.querySelector('.nav_toogleBtn');
const icon = document.querySelector('.nav_menu_icon');
const menu = document.querySelector('.nav_menu');
const content1 = document.querySelector('#content1.contents_container');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icon.classList.toggle('active');
    content1.classList.toggle('active');
});