const formulario = document.querySelector('#validar-correo');
const botonConfirmar = document.querySelector('#confirmar');
const email = document.querySelector('#email');

/* Eventos */
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded',() => {
        console.log('listo');
    });
    botonConfirmar.addEventListener('click', validarCorreo);
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
