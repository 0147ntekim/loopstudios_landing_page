const closeNav = document.querySelector('.close-nav')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const logo = document.querySelector('.logo')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', openNav)
closeNav.addEventListener('click', closeNavBar)

function openNav(){
    closeNav.classList.add('open-nav')
    hamburger.classList.add('close-hamburger')
    navLinks.classList.add('open-mobile-nav')
    logo.classList.add('open-logo-nav-link')
    nav.classList.add('nav_out')
}

function closeNavBar(){
    hamburger.classList.remove('close-hamburger')
    closeNav.classList.remove('open-nav')
    navLinks.classList.remove('open-mobile-nav')
    logo.classList.remove('open-logo-nav-link')
    nav.classList.remove('nav_out')
}