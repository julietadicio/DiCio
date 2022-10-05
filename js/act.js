document.getElementById("bienvenido").innerHTML = "Bienvenid@ " + localStorage.nombre + " " + localStorage.apellido + ", te estábamos esperando."

const url = 'https://www.boredapi.com/api/activity/'

fetch(url)
.then(response => response.json())
.then(data => {

    let verApi = document.getElementById('api')
    let precioApi = document.getElementById('precioApi')
    verApi.innerHTML =
    `
    <h4>${data.activity}</h4>
    <p>Para hacerlo de a ${data.participants} persona/s.</p>
    <p>Tipo de actividad: ${data.type} </p>
    <a href='${data.link}'></a>
    `
    if(data.price > 0) {
        precioApi.innerHTML = 'Esta actividad puede costar dinero.'
    } else {
        precioApi.innerHTML = 'Esta actividad es gratuita!'
    }

})
