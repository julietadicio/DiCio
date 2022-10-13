document.getElementById("bienvenido").innerHTML = "Bienvenid@ " + localStorage.nombre + " " + localStorage.apellido + ", te estábamos esperando."

function universidad() {
    class Estudiante {
        constructor(nombre, apellido, promedio, universidad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.promedio = promedio;
            this.universidad = universidad
        }
        condicion() {
            if (this.promedio == 21) {
                return `${this.nombre} esta aprobado con un 7, asique va a tener oportunidades, pero algo limitadas.`
            } else if (this.promedio > 21) {
                return `${this.nombre} esta aprobado por sobre el mínimo, lo que significa que va a tener amplias opciones 
                para elegir universidad! Felicidades.`
            } else if (this.promedio < 21) {
                return `${this.nombre} esta reprobado, pero no significa que no hay opciones. Con un ensayo desarrollado y de 
                buen nivel es posible atraer la atención de algunas universidades. A no perder la fé!`
            }
        }
    }

    const inputNombre = document.getElementById('nombre').value
    const inputApellido = document.getElementById('apellido').value
    const inputPromedio = document.getElementById('promedio').value
    const inputUniversidad = document.getElementById('universidad').value

    localStorage.setItem('nombreEstudiante', inputNombre)
    localStorage.setItem('apellidoEstudiante', inputApellido)
    localStorage.setItem('promedioEstudiante', inputPromedio)
    localStorage.setItem('universidadEstudiante', inputUniversi)

    estudianteNuevo = new Estudiante(inputNombre, inputApellido, inputPromedio, inputUniversidad)
    agregar()
}

//Limpiar inputs
function agregarNuevo() {
    document.getElementById('form').reset()
}

//Agregar a tabla
const estudiantes = []
function agregar() {
    estudiantes.push(estudianteNuevo)
    estudiantes.push(estudianteNuevo.condicion())
    document.getElementById('tabla').innerHTML += '<tbody><tr><td>' + estudianteNuevo.nombre + '</td><td>' + estudianteNuevo.apellido +
        '</td><td>' + estudianteNuevo.promedio + '</td><td>' + estudianteNuevo.universidad + '</td><td>' + estudianteNuevo.condicion() +
        '</td></tr></tbody>'
    Swal.fire(
        'Fuiste agregado con éxito',
        'Para agregar otro alumno, tocá la opción "agregar nuevo"',
        'success'
    )
}

//Carta de presentación
const btnModal = document.getElementById('btnCarta')
const modal = document.getElementById('modal')
const nombreModal = document.getElementById('nombreModal')
const promedioModal = document.getElementById('promedioModal')
const universidadModal = document.getElementById('universidadModal')
btnModal.addEventListener('click', function (e) {
    if (e.target == btnModal) {
        modal.style.display = 'block'
        nombreModal.innerHTML = 'Mi nombre es ' + estudianteNuevo.nombre + ' ' +
            estudianteNuevo.apellido + ', y quería aplicar para ser estudiante en su próximo año lectivo.'
        promedioModal.innerHTML = 'Mi promedio fue ' + estudianteNuevo.promedio + ', lo que demuestra mi desempeño escolar y mi dedicación.'
        universidadModal.innerHTML = 'Por eso agradecería si tienen en cuenta mi aplicación para la universidad ' + estudianteNuevo.universidad + '.'
    }
})

//Notificación de enviar
const enviar = document.getElementById('send')
enviar.addEventListener('click', function (e) {
    if (e.target == enviar) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu carta fue enviada!',
            showConfirmButton: false,
            timer: 2000
        })
    }
})

//Guardar estudiantes en local storage
function guardar() {

    const arrayGuardar = []


    arrayGuardar.push(document.getElementById("nombre").value,
    document.getElementById('apellido').value,
    document.getElementById('promedio').value,
    document.getElementById('universidad').value)


    for (let i = 0; i < arrayGuardar.length; i++) {
        localStorage.setItem('datos', arrayGuardar[i])
    }

    // arrayGuardar.push(localStorage.nombreGuardar = document.getElementById("nombre").value,
    // localStorage.apellidoGuardar = document.getElementById('apellido').value,
    // localStorage.promedioGuardar = document.getElementById('promedio').value,
    // localStorage.universidadGuardar = document.getElementById('universidad').value)


    // localStorage.setItem('nombre', JSON.stringify(arrayGuardar))
    // localStorage.setItem('apellido', JSON.stringify(arrayGuardar))
    // localStorage.setItem('promedio', JSON.stringify(arrayGuardar))
    // localStorage.setItem('universidad', JSON.stringify(arrayGuardar))
    
    
    const nombreG = document.getElementById('nombreG')
    const apellidoG = document.getElementById('apellidoG')
    const promedioG = document.getElementById('promedioG')
    const universidadG = document.getElementById('universidadG')

    nombreG.innerHTML = "Nombre: " + localStorage.nombreGuardar 
    apellidoG.innerHTML = "Apellido: " + localStorage.apellidoGuardar
    promedioG.innerHTML = "Promedio: " + localStorage.promedioGuardar
    universidadG.innerHTML = "Universidad: " + localStorage.universidadGuardar
}

// localStorage.setItem('nombre', JSON.stringify(localStorage.nombreGuardar))
// localStorage.setItem('apellido', JSON.stringify(localStorage.apellidoGuardar))
// localStorage.setItem('promedio', JSON.stringify(localStorage.promedioGuardar))
// localStorage.setItem('universidad', JSON.stringify(localStorage.universidadGuardar))


// localStorage.guardarEstudiante = document.getElementById("guardar").value;
// localStorage.setItem('Estudiante', localStorage.guardarEstudiante)

// const estudiantesGuardar = []
// estudiantesGuardar.push(estudianteNuevo)
// estudiantesGuardar.push(estudianteNuevo.condicion())
// tablaGuardar.innerHTML = + '<tbody><tr><td>' + estudianteNuevo.nombre + '</td><td>' + estudianteNuevo.apellido +
//     '</td><td>' + estudianteNuevo.promedio + '</td><td>' + estudianteNuevo.universidad + '</td><td>' + estudianteNuevo.condicion() +
//     '</td></tr></tbody>'
