const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('.fa-solid.fa-bars')
const nav = $('nav')
const loader = $('.loader')
const toTop = $('.top')

menu.addEventListener('click', toggleMenu)

function toggleMenu() {
    nav.classList.toggle('active')
}


// ---------LOADER-----------

setTimeout(()=>{
    loader.style.display = 'none'
}, 2000)


// ---------BACK TO TOP--------

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 170) {
        toTop.style.top = 'auto'
        toTop.style.bottom = '10%'
    } else {
        toTop.style.top = '-30%'
        toTop.style.bottom = 'auto'
    }
    
})

