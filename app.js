 
const botao = document.querySelector("#botao-enviar")
botao.addEventListener("click", (event)=>{
    event.preventDefault()
    const inputCampo = document.querySelector("#email-campo")
    const valor = inputCampo.value
    valor <= 0 ? criarErro() : console.log("Está correto")
    
})

function criarErro(){
    const erro = document.querySelector("#erro")
    const criarErro = document.createElement("span")
    criarErro.innerHTML = "Email não pode ficar em branco!";
    erro.appendChild(criarErro)
    
}

