const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('.fa-solid.fa-bars')
const nav = $('nav')

menu.addEventListener('click', toggleMenu)

function toggleMenu() {
    nav.classList.toggle('active')
}

