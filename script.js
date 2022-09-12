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
        constructor(nombre, promedio) {
            this.nombre = nombre;
            this.promedio = promedio
            
        }
        condicion(){
            if (this.promedio == 21){
                return `El estudiante ${this.nombre} esta aprobado con un 7. Significa que vas a tener oportunidades, pero algo limitadas.`
            } else if (this.promedio > 21) {
                return `El estudiante ${this.nombre} esta aprobado por sobre el mínimo, lo que significa que vas a tener amplias opciones para elegir universidad! Felicidades.`
            } else if (this.promedio < 21) {
                return `El estudiante ${this.nombre} esta reprobado, pero no significa que no hay opciones. Con un ensayo desarrollado y de buen nivel es posible atraer la atención de algunas universidades. A no perder la fé!`
            }
        }
    }
    
    const inputNombre = document.getElementById('nombre').value
    const inputPromedio = document.getElementById('promedio').value
    
    estudianteNuevo = new Estudiante(inputNombre, inputPromedio)
    agregar()
}

const estudiantes = []

function agregar(){
    estudiantes.push(estudianteNuevo)
    estudiantes.push(estudianteNuevo.condicion())
    console.log(estudiantes);
}

let btn = document.getElementById('agregarEstudiante')

btn.addEventListener('click', function(e) {
    if(e.target == btn)
    inputNombre.innerHTML = ''
})

