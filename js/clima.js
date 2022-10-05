const inputClima = document.getElementById('inputClima')
const btnClima = document.getElementById('btnClima')

btnClima.addEventListener('click', function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputClima.value+'&appid=7fb4ad82d4bd3e2f6f87ae976a4f5850')
    .then(response => response.json())
    .then(data => {
        let verClima = document.getElementById('clima')
    
        verClima.innerHTML = `<h3> Grados: ${data.main.temp}°F</h3>
        <h3> Mínima: ${data.main.temp_min}°F</h3>
        <h3> Máxima: ${data.main.temp_max}°F</h3>
        <h3> Sensación térmica: ${data.main.feels_like}°F</h3>
        <h3> Humedad: ${data.main.humidity}% </h3>
        <h3> Nubosidad: ${data.clouds.all}%</h3>
        `
    })
}) 
btnClima.addEventListener('click', function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputClima.value+'&appid=7fb4ad82d4bd3e2f6f87ae976a4f5850')
    .then(response => response.json())
    .then(data => console.log(data))
}) 




