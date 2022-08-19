//function promedio(promedio1, promedio2, promedio3){
//}



function promediar() {
    let promedio1 = prompt('Ingresá nota de 1');
    let promedio2 = prompt('Ingresá nota de 2');
    let promedio3 = prompt('Ingresá nota de 3');
    let resultado = (Number(promedio1) + Number(promedio2) + Number(promedio3))
    alert('Tu resultado es ' + parseInt(resultado));
    if (resultado > 21) {
            alert('Aprobaste!')
        } else {
            alert('Desaprobaste:(')
        }
}


/*for (let i = 1; i = 3; i++) {
    let promedio = prompt('Ingresa la nota del' + i + 'trimestre');
}
*/