function storage () {
    let loginNombre = document.getElementById('loginNombre').value
    let loginApellido = document.getElementById('loginApellido').value
    
    let json = JSON.stringify(loginNombre)
    let json2 = JSON.stringify(loginApellido)
    
    sessionStorage.setItem('nombre', json)
    sessionStorage.setItem('apellido', json2)
    
    let nombreLogin = sessionStorage.getItem('nombre')
    let apellidoLogin = sessionStorage.getItem('apellido')
    
    console.log(`${nombreLogin} ${apellidoLogin} esta logueado`);
    
}



function promediar() {
    let promedio1 = prompt('Ingresá tu nota final del primer trimestre');
    let promedio2 = prompt('Ingresá tu nota final del segundo trimestre');
    let promedio3 = prompt('Ingresá tu nota final del tercer trimestre');
    let resultado = (parseInt(promedio1) + parseInt(promedio2) + parseInt(promedio3))
    alert('La suma de tus notas es ' + resultado + ', ahora vamos a calcular si aprobaste la materia.');
    if (resultado > 21) {
        alert('Aprobaste! Disfruta tus vacaciones, felicidades :)')
    } else {
        alert('Desaprobaste, parece que nos vemos en Diciembre :(')
    }
}


function universidad() {
    class Estudiante {
        constructor(nombre, apellido, promedio) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.promedio = promedio;
        }
        condicion() {
            if (this.promedio == 21) {
                return `${this.nombre} esta aprobado con un 7. Significa que vas a tener oportunidades, pero algo limitadas.`
            } else if (this.promedio > 21) {
                return `${this.nombre} esta aprobado por sobre el mínimo, lo que significa que vas a tener amplias opciones para elegir universidad! Felicidades.`
            } else if (this.promedio < 21) {
                return `${this.nombre} esta reprobado, pero no significa que no hay opciones. Con un ensayo desarrollado y de buen nivel es posible atraer la atención de algunas universidades. A no perder la fé!`
            }
        }
    }

    const inputNombre = document.getElementById('nombre').value
    const inputApellido = document.getElementById('apellido').value
    const inputPromedio = document.getElementById('promedio').value

    estudianteNuevo = new Estudiante(inputNombre, inputApellido, inputPromedio)
    agregar()
}

const estudiantes = []

function agregarNuevo() {
    document.getElementById('form').reset()
}

function agregar() {
    estudiantes.push(estudianteNuevo)
    estudiantes.push(estudianteNuevo.condicion())
    console.log(estudiantes);
    document.getElementById('tabla').innerHTML += '<tbody><tr><td>' + estudianteNuevo.nombre + '</td><td>' + estudianteNuevo.apellido + '</td><td>' + estudianteNuevo.promedio + '</td><td>' + estudianteNuevo.condicion() + '</td></tr></tbody>'
}


