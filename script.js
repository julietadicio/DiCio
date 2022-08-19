//function promedio(promedio1, promedio2, promedio3){
//}
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
