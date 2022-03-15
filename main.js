const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const emailInput = document.querySelector('#email');
const navLogo = document.querySelector('#navbar__logo');
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.message');



// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Close mobile menu when clicking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 760 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

// Change background Color 
const moon = document.getElementByClassName('fa-moon')

moon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('bg-dark');
})







// btn.addEventListener('click', () => {
//     btn.classList.toggle('active')
//     btn.classList.toggle('is-active') 
//     document.querySelector('.navbar').classList.toggle('bg-dark');
//     document.querySelector('.main').classList.toggle('bg-dark');
//     document.querySelector('.fa-facebook').classList.toggle('fa-icons');
//     document.querySelector('.fa-instagram').classList.toggle('fa-icons');
//     document.querySelector('.fa-linkedin').classList.toggle('fa-icons');
//     document.querySelector('.fa-twitter').classList.toggle('fa-icons');
//     document.querySelector('.navbar__toggle .bar').classList.toggle('button.active');
//     document.querySelector('.navbar__toggle .bar').classList.add('bars');
// document.querySelector('.footer .button').classList.toggle('bg-white');
//     document.querySelector('.footer').classList.toggle('bg-dark');
//     // document.querySelector('#navbar__logo--img').style.visibility = 'visible';
//     document.querySelector('#navbar__logo img').classList.toggle('hidden');
//     document.querySelector('#navbar__logo--img img').classList.toggle('view');
// })

function onSubmit(e) {
    e.preventDefault()

    if (emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = '<h4>Please input your email</h4>';
        // console.log('Error') 

        // setTimeout(() => msg.textContent(''), 4000); 
        setTimeout(() => {
            msg.classList.add('hidden')
        }, 4000)
    } else {
        msg.classList.add('success')
        msg.innerHTML = '<h4>Thank you for subscribing to our waitlist</h4>'

        setTimeout(() => {
            msg.classList.add('hidden')
        }, 4000)
        // console.log('Success')
    }
}

myForm.addEventListener('click', onSubmit);    