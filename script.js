const navbar = document.querySelector('.navbar')
const menuButton = document.querySelector('.menu-btn')

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('active')
})

AOS.init();