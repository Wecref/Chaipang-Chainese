// 스크린 사이즈가 작아지면 나오는 메뉴 관련
const toggleBtn = document.querySelector('nav div:first-child .menuIcon');
const menu = document.querySelector('nav div:last-child ul');
const content1 = document.querySelector('#content1.contents_container')

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    content1.classList.toggle('active');
});