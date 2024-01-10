let formulario = false;
if (document.querySelector('#validar-correo')) {
    formulario = document.querySelector('#validar-correo')
}
let botonConfirmarCorreo = false;
if (document.querySelector('#confirmarCorreo')) {
    botonConfirmarCorreo = document.querySelector('#confirmarCorreo');
}
let email = false;
if (document.querySelector('#email')) {
    email = document.querySelector('#email');
}
let botonNoIp = false ;
if (document.querySelector('#botonNoIp')) {
    botonNoIp = document.querySelector('#botonNoIp');
}
let botonSiIp = false;
if (document.querySelector('#botonSiIp')) {
    botonSiIp = document.querySelector('#botonSiIp');
}
let selectAlmacen_1 = false; 
if (document.querySelector('#validarAlmacenamiento_1')) {
    selectAlmacen_1 = document.querySelector('#validarAlmacenamiento_1');
}
let selectAlmacen_2 = false; 
if (document.querySelector('#validarAlmacenamiento_2')) {
    selectAlmacen_2 = document.querySelector('#validarAlmacenamiento_2');
}
let selectAlmacen_3 = false; 
if (document.querySelector('#validarAlmacenamiento_3')) {
    selectAlmacen_3 = document.querySelector('#validarAlmacenamiento_3');
}
let selectAlmacen_4 = false; 
if (document.querySelector('#validarAlmacenamiento_4')) {
    selectAlmacen_4 = document.querySelector('#validarAlmacenamiento_4');
}
let selectAlmacen_5 = false;
if (document.querySelector('#validarAlmacenamiento_5')) {
    selectAlmacen_5 = document.querySelector('#validarAlmacenamiento_5');
}
let verificarAlmacen = false;
if (document.querySelector('#verificarAlmacen')) {
    verificarAlmacen = document.querySelector('#verificarAlmacen')
}
/* Eventos */
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded',() => {
        console.log('listo');
    });
    if (botonConfirmarCorreo) {
        botonConfirmarCorreo.addEventListener('click', validarCorreo);   
    }

    if (botonNoIp) {
        botonNoIp.addEventListener('click',verificarIpNo);
    }

    if (botonSiIp) {
        botonSiIp.addEventListener('click',verificarIpSi);
    }
    if (verificarAlmacen) {
        verificarAlmacen.addEventListener('click',verificarAlmacenCorrecto);
    }
}

function verificarAlmacenCorrecto() {
    let total = Number(selectAlmacen_1.value) + Number(selectAlmacen_2.value) + Number(selectAlmacen_3.value) + Number(selectAlmacen_4.value) + Number(selectAlmacen_5.value);
    if (total != 5) {
        Swal.fire({
            title: "Incorrecto",
            text: "¡Parece que una información sensible se te ha filtrado! Revisa cuidadosamente tus opciones y vuelve a intentario",
            icon:"warning",
        });
    } else {
        Swal.fire({
            title: "¡Bien hecho!",
            text: "Has entendido como hay que clasificar y determinar que personas tendrán acceso a la información dentro de la empresa Asegúrate de crear restricciones de seguridad y políticas de almacenamiento",
            icon: "success",
            showConfirmButton: false,
            footer: '<a href="b_nda&sla.html" type="button" class="btn btn-primary">Siguiente</a>'
        });
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
