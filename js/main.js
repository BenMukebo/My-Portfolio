const menuBtn= document.querySelector('.menu-btn');
const menuBtnLink = document.querySelector('.menu-btn .menu-btn-link');
// console.log(menuBtnLink);
const nav = document.querySelector('nav.nav');
const navMenu = nav.querySelector('.nav .nav-menu');

const menuLink = navMenu.querySelectorAll('.nav-menu-item');
// console.log(menuLink);

let showMenu = false;

menuBtn.addEventListener('click', displayMenu);
function displayMenu(e){
    // console.log(nav);
    console.log(menuLink);

    if(!showMenu){
        menuBtnLink.classList.add('open');

        nav.classList.add('open');
        navMenu.classList.add('open');
        menuLink.forEach(item => item.classList.add('open'));

        showMenu = true;
    }
    else{
        menuBtnLink.classList.remove('open'); 
        
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        menuLink.forEach(item => item.classList.remove('open'));


        showMenu= false;
    }
}