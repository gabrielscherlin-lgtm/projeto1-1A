const botoes =document.queryselectorAll("button")
console.log(botoes)

botoes.forEach(function(botao) {
let curtiu =false;
botao.addEventListener("click", botaoclicado)
 function botaoclicado(){
let texto=botao.queryselector("span")
 texto.textContent++

 }


})
