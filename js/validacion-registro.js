const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById('password-field')
const pass1 = document.getElementById('password-field1')
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings") 


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido (debe contener al menos 6 caracteres) <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña debe contener al menos 8 caracteres <br>`
        entrar = true
    }
    if(pass1.value.length < 8){
        entrar = true
    }
    if(pass.value !== pass1.value){
        warnings += `La contraseña no coincide <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
}) 

 