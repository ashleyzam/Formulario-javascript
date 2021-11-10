let inputEmail = document.querySelector('#input-email')
let inputPassword = document.querySelector('#input-passw')
let inputRepeatPassword = document.querySelector('#input-repeat-passw')
let inputCheck = document.querySelector('#input-checkbox')
let btnSubmit = document.querySelector('#btn-submit')

let email, password, repeatPassword

btnSubmit.setAttribute('disabled','disabled')

const saveData = () =>{
    email = inputEmail.value
    password = inputPassword.value
    repeatPassword = inputRepeatPassword.value
    alert('datos guardados correctamente')
    location.reload()
}

const validatePassword = () =>{
    const validate = document.querySelector('.validated')
    const alertaError = document.querySelector('.error')
    if(inputPassword.value===inputRepeatPassword.value){
        validate.style.display="block"
        alertaError.style.display="none"
        btnSubmit.removeAttribute('disabled','disabled')
   
    return true
    }
    else{
        validate.style.display="none"
        alertaError.style.display="block"
        btnSubmit.setAttribute('disabled','disabled')  
        return false    
    }
}
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    if (validatePassword()){
     saveData()
    }
    else{
        alert('tus datos son incorrectos')
    }
})

inputRepeatPassword.addEventListener('keyup', validatePassword)
