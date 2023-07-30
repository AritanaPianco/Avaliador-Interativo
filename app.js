
const buttonLi = document.querySelectorAll("li")
const targetValue = document.querySelector(".select")
const botaoEnviar = document.querySelector("button")
const rating = document.querySelector(".hero")
const thanks = document.querySelector(".hero2")
let value = 0


buttonLi.forEach( btn =>{
    btn.addEventListener("click", select)
})
  

function select(e){
    buttonLi.forEach(btn => btn.classList.remove("active"))
    e.target.classList.add("active")
    value = e.target.innerHTML
    targetValue.innerHTML = `${value} de 5`
    botaoEnviar.addEventListener("click", function enviar(){
        rating.classList.add("hide")
        thanks.classList.remove("hide")
    })
}

    
    









    

    
    




