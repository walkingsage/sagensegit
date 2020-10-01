const burger = document.querySelector('.burger'),
header = document.querySelector('.header'),
menu = document.querySelector('.mobile__menu'),
phone = document.querySelector('.header__phone'),
headerContent = document.querySelector('.header__content');

const hide = element => {
    element.style.display = 'none';
};

const show = element => {
    element.style.display = 'flex';
};

let mobileOpen = false;

burger.addEventListener('click', () => {
    if(mobileOpen){
        burger.classList.remove('fa-close');
        burger.classList.add('fa-bars');
        header.classList.remove('header__mobile');
        header.style.background = 'rgba(0,0,0,0)';
        headerContent.classList.remove('header__mobile');
        phone.style.display = 'none';
        hide(menu); 
        mobileOpen = false; 
    }
    else{
        burger.classList.remove('fa-bars');
        burger.classList.add('fa-close');
        header.classList.add('header__mobile');
        phone.style.display = 'block';
        header.style.background = 'rgb(0,0,0)';
        headerContent.classList.add('header__mobile');
        show(menu);
        mobileOpen = true;
    }
});