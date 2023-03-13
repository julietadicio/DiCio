function storage() {

    localStorage.nombre = document.getElementById("loginNombre").value;
    localStorage.apellido = document.getElementById("loginApellido").value;

    localStorage.setItem('nombre', localStorage.nombre)
    localStorage.setItem('apellido', localStorage.apellido)

}

document.getElementById("bienvenido").innerHTML = "Bienvenid@ " + localStorage.nombre + " " + localStorage.apellido + ", te estábamos esperando."


function promediar() {

    const trim1 = document.getElementById('1trim').value;
    const trim2 = document.getElementById('2trim').value;
    const trim3 = document.getElementById('3trim').value;

    const resultado = (parseInt(trim1) + parseInt(trim2) + parseInt(trim3))
    const resultado2 = (resultado / 3)

    let h2Promedio = document.getElementById('verPromedio')

    if (resultado > 21) {
        h2Promedio.innerHTML = `La suma de tus notas da ${resultado}, y tu promedio fue de ${resultado2.toFixed(1)}. Aprobaste! Felicidades.`
    } else {
        h2Promedio.innerHTML = `La suma de tus notas da ${resultado}, y tu promedio fue de ${resultado2.toFixed(1)}. Lamentamos informarte que desaprobaste.`
    }
}



