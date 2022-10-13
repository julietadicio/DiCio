document.getElementById("bienvenido").innerHTML = "Bienvenid@ " + localStorage.nombre + " " + localStorage.apellido + ", te estábamos esperando."

const url = 'https://www.boredapi.com/api/activity/'

fetch(url)
.then(response => response.json())
.then(data => {

    let verApi = document.getElementById('api')
    let precioApi = document.getElementById('precioApi')
    let linkApi = document.getElementById('linkApi')
    verApi.innerHTML =
    `
    <h4>${data.activity}</h4>
    <p>Para hacerlo de a ${data.participants} persona/s.</p>
    <p>Tipo: ${data.type} </p>
    `
    if(data.price > 0) {
        precioApi.innerHTML = 'Esta actividad puede costar dinero.'
    } else {
        precioApi.innerHTML = 'Esta actividad es gratuita!'
    }

    if(data.link != '') {
        linkApi.innerHTML = `<a href='${data.link}'>Ir a la página</a>`
    }
console.log(data);
})
