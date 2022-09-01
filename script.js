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



// class Estudiante {
//     constructor(nombre, promedio, ubicacion) {
//         this.nombre = nombre
//         this.promedio = promedio
//         this.ubicacion = ubicacion
//         this.aprobado = function () {
//             if (Estudiante.promedio > 21) {
//                 console.log("Aprobados")
//             } else {
//                 console.log("Desaprobados")
//             }
//         }
//     }
// }

// const estudiantes = []
// estudiantes.push(new Estudiante("Juan", 25, "Tigre"))
// estudiantes.push(new Estudiante("Teresa", 21, "San Isidro"))
// estudiantes.push(new Estudiante("Carlos", 18, "CABA"))
// console.log(estudiantes);


class Estudiante {
    constructor(nombre, promedio, ubicacion) {
        this.nombre = nombre;
        this.promedio = promedio
        this.ubicacion = ubicacion
    }
    condicion(){
        if(this.promedio>= 21){
            return `El estudiante ${this.nombre} esta aprobado`
        } else {
            `El estudiante ${this.nombre} esta desaprobado`
        }
    }
}

const estudiantes = []

let inputNombre = prompt('ingresa nombre')
let inputPromedio = prompt('ingresa promedio')

let estudiante = new Estudiante(inputNombre, inputPromedio)

console.log(estudiante1.condicion());



