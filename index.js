const apikey = "02aed78890e6ac3007c8f3fb977b464f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


document.getElementById('search').addEventListener('click',()=>{
    checkWeather(document.getElementById('input').value)
})

async function checkWeather(city){

    const response = await fetch(apiurl+ city + `&appid=${apikey}`)
    console.log(apiurl + city + `&appid=${apikey}`)

    let data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed+ "km/h";
    
}
   
