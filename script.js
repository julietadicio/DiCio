
function storage() {

    localStorage.nombre = document.getElementById("loginNombre").value;
    localStorage.apellido = document.getElementById("loginApellido").value;

    localStorage.setItem('nombre', localStorage.nombre)
    localStorage.setItem('apellido', localStorage.apellido)

    document.getElementById("bienvenido").innerHTML = "Bienvenid@ " + localStorage.nombre + " " + localStorage.apellido + ", te estábamos esperando."

    console.log(`${localStorage.nombre} ${localStorage.apellido} esta logueado`);
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



// const lista = document.querySelector('#listado')

// fetch('https://www.boredapi.com/api/activity?type=recreational')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(post => {
//             const li = document.createElement('li')
//             li.innerHTML = 
//             `
//             <h5>${post.activity}</h5>
//             <h5>${post.type}</h5>
//             `
//            lista.append(li)
//         })
//     })


// const lista = document.querySelector('#listado')

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(post => {
//             const li = document.createElement('li')
//             li.innerHTML =
//                 `
//             <h5>${post.title}</h5>
//             <h5>${post.body}</h5>
//             `

//             lista.append(li)
//         })
//     })



