const formulario = document.getElementById ('formulario')
const email = document.getElementById ('email')
const regEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const suscribirse = document.getElementById ('suscribirse')


email.addEventListener("keyup", (e) => {
  console.log("KeyUP")

})

const suscritos = []

formulario.addEventListener("submit", validarFormulario)
function validarFormulario(e) {
  e.preventDefault();
  if (!regEmail.test(email.value)){
    console.log ('formato no válido');
    return;
  }

  console.log ('formulario válido')

  let suscrito = new Suscrito(email.value);
  suscritos.push(suscrito)
  email.value = ""
}

class Suscrito {
  constructor(email){
    this.email = email
  }
}

suscribirse.addEventListener("click", () => {
  if (!regEmail.test(email.value)){
    Swal.fire({
      title: 'Error!',
      text: 'Tiene que ingresar un correo electrónico',
      icon: 'error',
      confirmButtonText: 'ok'
    })
  }
  else{
    Swal.fire({
      title: '¡Bienvenido a LOVELY!',
      text: 'Tenes un 15% en tu primera compra ingresando BIENVENIDO!',
      icon: 'success',
      confirmButtonText: 'OK'
  
    })

  }
  
})

