const email = document.getElementById('inputEmail')
const senha = document.getElementById('inputSenha')
function valForm(evento){
    evento.preventDefault()

    if(email.value ==='' || senha.value ===''){
        alert('preencha os campos')
        return
    }
    else{
            console.log({
                email : email.value,
                senha : senha.value
            })
            email.value = ''
            senha.value = ''
        }
    }
