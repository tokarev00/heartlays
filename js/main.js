const navButton = document.querySelector('.nav__btn');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__item');



navButton.addEventListener('click', event => {
    navButton.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('active-menu');
})

navLinks.forEach(elem =>{
    elem.addEventListener('click',
    event => {
        navButton.classList.remove('active');
        navList.classList.remove('active');
        document.body.classList.tremove('active-menu');
    })
})
