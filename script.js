const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  
const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
}

const form = document.querySelector('form')
const message = document.querySelector('.thanks')
const inputName = document.querySelector('input[name="name"]')
const inputEmail = document.querySelector('input[name="email"]')
const inputCpf = document.querySelector('input[name="cpf"]')

let isValidForm = false

const resetInput = (element) => {
    element.classList.remove('invalid')
    element.nextElementSibling.classList.add('hidden')
}

const invalidateElem = (elem) => {
    elem.classList.add('invalid') //adicona a class invalid
    elem.nextElementSibling.classList.remove('hidden') //pegando o proximo elemento depois do input e  class removendo 
    isValidForm = false
}
const validateInput = () => {
    isValidForm= true
    if(!inputName.value){ //quando clilcar no submit e não tiver um valor
        invalidateElem(inputName)
    }
    if(!isValidEmail(inputEmail.value)){ //quando clilcar no submit e não tiver um valor
        invalidateElem(inputEmail)
        isValidForm = false
    }
    if(!isValidCPF(inputCpf.value)){ //quando clilcar no submit e não tiver um valor
        invalidateElem(inputCpf)
        isValidForm = false
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    validateInput()

    if (isValidForm) {
        //POST - Backend
        form.remove()
        message.classList.remove('hidden')
        console.log('Validou e enviou')
    }
})
inputName.addEventListener("input", (e) =>{
    resetInput(inputName)

})
inputEmail.addEventListener("input", (e) =>{
    resetInput(inputEmail)

})
inputCpf.addEventListener("input", (e) =>{
    resetInput(inputCpf)

})