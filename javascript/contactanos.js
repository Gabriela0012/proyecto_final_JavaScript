const formulario = document.getElementById ('formulario')
const nombre = document.getElementById ('nombre')
const email = document.getElementById ('email')
const genero = document.getElementById ('genero')
const regNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const mensaje = document.getElementById ('mensaje')
const enviar = document.getElementById ('enviar')



enviar.addEventListener("mousemove", function () {
  console.log('En movimiento')
})

nombre.addEventListener("keyup", (e) => {
  console.log("KeyUP")

})
mensaje.addEventListener("keyup", (e) => {
  console.log("KeyUP")

})

const personas = []

formulario.addEventListener("submit", validarFormulario)
function validarFormulario(e) {
  e.preventDefault();
  if (!regNombre.test(nombre.value)){
    console.log ('formato no válido');
    return;
  }
  if (!regEmail.test(email.value)){
    console.log ('formato no válido');
    return;
  }

  // alert ('formulario enviado');
  console.log ('formulario válido')
  let persona = new Persona(nombre.value, email.value, genero.value, mensaje.value);
  personas.push(persona)
  nombre.value = ""
  email.value = ""
  genero.value = ""
  mensaje.value = ""

}
class Persona {
  constructor(nombre, email, genero, mensaje){
    this.nombre  = nombre
    this.email = email
    this.genero = genero
    this.mensaje  = mensaje
  }
}

enviar.addEventListener("click", () => {
  if (!regNombre.test(nombre.value && !regEmail.test(email.value))) {
    Swal.fire({
      title: 'Error!',
      text: 'Tiene que ingresar los campos',
      icon: 'error',
      confirmButtonText: 'ok'
    })
  }
  else{
    Swal.fire({
      title: '¡Su mensaje se envio con exito!',
      icon: 'success',
      confirmButtonText: 'OK'
    })

  }
  
})
