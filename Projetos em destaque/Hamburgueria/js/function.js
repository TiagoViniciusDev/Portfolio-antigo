const IconeMenuMobile = document.querySelector(".nav-bar > i")
const MenuMobile = document.querySelector(".menu-mobile")

//Eventos
  IconeMenuMobile.addEventListener('click',function(){
    MenuMobile.classList.toggle("hide")
  })
