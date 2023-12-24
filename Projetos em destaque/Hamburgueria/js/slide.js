const box = document.querySelector(".box")
var slideWidth = document.querySelector(".slide").clientWidth
const bullets = document.querySelectorAll(".bullets span")
var contagem = 0

//Ao redimensionar a tela:

window.addEventListener('resize', function(){ //Função que atualiza sempre com redimensionamento da tela
   slideWidth = document.querySelector(".slide").clientWidth
})

//Ao clicar nas bullets
   bullets.forEach(function(e){
      e.addEventListener('click',function(){
         contagem = e.getAttribute('contagem') //Pegando valor do atributo contagem do elemento selecionado
         box.scroll(contagem*slideWidth,0) //Movendo o scroll

         bullets.forEach(function(bullet){ //Deixando todas as bullets com backgrond gray
            bullet.style.background = "gray"
         })
         bullets[contagem].style.background = "#ffc045" //Deixando apenas a bullet selecionada com background personalizado
      })
   })

autoplay(4000) //Chamando função autoplay

function autoplay(tempo){
   setInterval(function(){
      contagem++ //Ao passar do tempo é adicionado 1 no valor da contagem
      if(contagem == bullets.length){ //Quando chegar no ultimo slide volta para o primeiro
         contagem = 0
      }

      box.scroll(contagem*slideWidth,0) //Movendo efetivamente o slide

      bullets.forEach(function(bullet){ //Deixando todas as bullets com backgrond gray
         bullet.style.background = "gray"
      })
      bullets[contagem].style.background = "#ffc045" //Deixando apenas a bullet selecionada com background personalizado
   },tempo)
}
