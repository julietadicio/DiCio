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

    estudianteNuevo = new Estudiante(inputNombre, inputApellido, inputPromedio, inputUniversidad)
    agregar()

    localStorage.promedio = document.getElementById("promedio").value;
    localStorage.setItem('promedio', localStorage.promedio)
}

function agregarNuevo() {
    document.getElementById('form').reset()
}

const estudiantes = []
function agregar() {
    estudiantes.push(estudianteNuevo)
    estudiantes.push(estudianteNuevo.condicion())
    console.log(estudiantes);
    document.getElementById('tabla').innerHTML += '<tbody><tr><td>' + estudianteNuevo.nombre + '</td><td>' + estudianteNuevo.apellido +
        '</td><td>' + estudianteNuevo.promedio + '</td><td>' + estudianteNuevo.universidad + '</td><td>' + estudianteNuevo.condicion() +
        '</td></tr></tbody>'
    Swal.fire(
        'Fuiste agregado con éxito',
        'Para agregar otro alumno, tocá la opción "agregar nuevo"',
        'success'
    )
}

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