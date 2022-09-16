function storage() {

    sessionStorage.nombre = document.getElementById("loginNombre").value;
    sessionStorage.apellido = document.getElementById("loginApellido").value;

    sessionStorage.setItem('nombre', sessionStorage.nombre)
    sessionStorage.setItem('apellido', sessionStorage.apellido)

    document.getElementById("bienvenido").innerHTML = "Bienvenid@ " + sessionStorage.nombre + " " + sessionStorage.apellido + ", te estábamos esperando."

    console.log(`${sessionStorage.nombre} ${sessionStorage.apellido} esta logueado`);
}


function promediar() {

    const trim1 = document.getElementById('1trim').value;
    const trim2 = document.getElementById('2trim').value;
    const trim3 = document.getElementById('3trim').value;

    const resultado = (parseInt(trim1) + parseInt(trim2) + parseInt(trim3))
    const resultado2 = (resultado / 3)
    console.log(resultado);

    let h2Promedio = document.getElementById('verPromedio')

    if (resultado > 21) {
        h2Promedio.innerHTML = `La suma de tus notas da ${resultado}, y tu promedio fue de ${resultado2.toFixed(1)}. Aprobaste! Felicidades.`
    } else {
        h2Promedio.innerHTML = `La suma de tus notas da ${resultado}, y tu promedio fue de ${resultado2.toFixed(1)}. Lamentamos informarte que desaprobaste.`
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

function agregarNuevo() {
    document.getElementById('form').reset()
}

const estudiantes = []
function agregar() {
    estudiantes.push(estudianteNuevo)
    estudiantes.push(estudianteNuevo.condicion())
    console.log(estudiantes);
    document.getElementById('tabla').innerHTML += '<tbody><tr><td>' + estudianteNuevo.nombre + '</td><td>' + estudianteNuevo.apellido + '</td><td>' + estudianteNuevo.promedio + '</td><td>' + estudianteNuevo.condicion() + '</td></tr></tbody>'

    const btnModal = document.getElementById('btnCarta')
    const modal = document.getElementById('modal')
    const nombreModal = document.getElementById('nombreModal')
    const promedioModal = document.getElementById('promedioModal')

    btnModal.addEventListener('click', function (e) {
        if (e.target == btnModal) {
            modal.style.display = 'block'
            nombreModal.innerHTML = 'Mi nombre es ' + estudianteNuevo.nombre + ' ' + estudianteNuevo.apellido + 'y quería aplicar para ser estudiante en su próximo año lectivo'
            promedioModal.innerHTML = 'Mi promedio fue ' + estudianteNuevo.promedio + ', lo que demuestra mi desempeño'
        }
    })

}
