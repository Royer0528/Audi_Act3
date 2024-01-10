var formulario = false;
if (document.querySelector('#validar-correo')) {
    formulario = document.querySelector('#validar-correo')
}
var botonConfirmarCorreo = false;
if (document.querySelector('#confirmarCorreo')) {
    botonConfirmarCorreo = document.querySelector('#confirmarCorreo');
}
var email = false;
if (document.querySelector('#email')) {
    email = document.querySelector('#email');
}
var botonNoIp = false ;
if (document.querySelector('#botonNoIp')) {
    botonNoIp = document.querySelector('#botonNoIp');
}
var botonSiIp = false;
if (document.querySelector('#botonSiIp')) {
    botonSiIp = document.querySelector('#botonSiIp');
}
/* Eventos */
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded',() => {
        console.log('listo');
        console.log(botonNoIp);
        console.log(botonSiIp);
    });
    if (botonConfirmarCorreo) {
        botonConfirmarCorreo.addEventListener('click', validarCorreo);   
    }

    if (botonNoIp) {
        botonNoIp.addEventListener('click',verificarIpNo)
    }

    if (botonSiIp) {
        botonSiIp.addEventListener('click',verificarIpSi)
    }
}

function verificarIpNo() {
    Swal.fire({
        title: "Ten en cuenta que...",
        text: "Una dirección IP es una cadena de números separados por puntos. Las direcciones IP se expresan como un conjunto de cuatro números, lo que has visto es tú dirección IP funciona como un medio de comunicación entre dispositivos en linea, proteger tu dirección es crucial ya que contiene datos sensibles Pero tranquilo Tenemos algunas recomendaciones que pueden ayudarte a navigar más seguro por indemet no olvides protegertel",
        icon:"warning",
        showConfirmButton: false,
        footer: '<a href="b_direccionIp.html" type="button" class="btn btn-primary">Siguiente</a>'
    });
}

function verificarIpSi() {
    Swal.fire({
        title: "¡Bien hecho!",
        text: "Estamos muy felices que tengas conocimiento de lo que es una dirección IP ¿Pero ya sabes como proteger esa información? Si no es así, tranquilo, tenemos algunas recomendaciones para que puedas neveger sin preocuparte de que la información confidencial de la empresa esté comprometida e ataques maliciosos",
        icon: "success",
        showConfirmButton: false,
        footer: '<a href="b_direccionIp.html" type="button" class="btn btn-primary">Siguiente</a>'
    });
}

function validarCorreo() {
    if (!email.value) {
        Swal.fire({
            title: "¿Y tu correo?",
            text: "Escribe tu correo personal en el recuadro.",
            icon: "question"
          });
    } else {
        Swal.fire({
            title: "¿Ese es tu correo personal?",
            showDenyButton: true,
            confirmButtonText: "Sí",
            denyButtonText: `No`
        }).then((result) => {
            
            if (result.isConfirmed) {
              Swal.fire("¡Mal!", "No debes dar tu correo personal a cualquier página", "warning");
            } else if (result.isDenied) {
              Swal.fire("¡Bien hecho!", "Recuerda usar siempre un correo temporal en páginas que desconoces", "success");
            }
        });
    }
}
