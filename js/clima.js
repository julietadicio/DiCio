const inputClima = document.getElementById('inputClima')
const btnClima = document.getElementById('btnClima')

btnClima.addEventListener('click', function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputClima.value+'&appid=7fb4ad82d4bd3e2f6f87ae976a4f5850&lang=es&units=metric')
    .then(response => response.json())
    .then(data => {
        let verClima = document.getElementById('verClima')

        verClima.innerHTML = `
        <h1>${inputClima.value}</h1>
        <h3> Clima: ${data['weather'][0]['description']} </h3>
        <h3> Grados: ${data.main.temp}°c</h3>
        <h3> Mínima: ${data.main.temp_min}°c</h3>
        <h3> Máxima: ${data.main.temp_max}°c</h3>
        <h3> Humedad: ${data.main.humidity}% </h3>
        <h3> Nubosidad: ${data.clouds.all}%</h3>
        
        `
    })

}) 

let lang = 'es'
let units = 'metric'

btnClima.addEventListener('click', function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputClima.value+'&appid=7fb4ad82d4bd3e2f6f87ae976a4f5850')
    .then(response => response.json())
    .then(data => console.log(data))
}) 




