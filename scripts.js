const apiKey ='815c5566ca1d4818b3695405240808';
const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("weatherIcon");

async function checkWeather(city){
    const response = await fetch(apiUrl + apiKey + '&q=' + city + '&days=3&aqi=no');
    
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    
    var data = await response.json();

    console.log(data);

    document.querySelector(".weatherIcon").src=data.current.condition.icon;
    document.querySelector(".weatherStatus").innerHTML = data.current.condition.text;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.current.wind_mph) + " mp/h";
    
    document.querySelector(".forecastWeatherIcon_0").src=data.forecast.forecastday[0].day.condition.icon;
    document.querySelector(".date_0").innerHTML = data.forecast.forecastday[0].date;
    document.querySelector(".forecastMaxTemp_0").innerHTML = "Max " + Math.round(data.forecast.forecastday[0].day.maxtemp_c) + "°C";
    document.querySelector(".forecastMinTemp_0").innerHTML = "Min " + Math.round(data.forecast.forecastday[0].day.mintemp_c) + "°C";

    document.querySelector(".forecastWeatherIcon_1").src=data.forecast.forecastday[1].day.condition.icon;
    document.querySelector(".date_1").innerHTML = data.forecast.forecastday[1].date;
    document.querySelector(".forecastMaxTemp_1").innerHTML = "Max " + Math.round(data.forecast.forecastday[1].day.maxtemp_c) + "°C";
    document.querySelector(".forecastMinTemp_1").innerHTML = "Min " + Math.round(data.forecast.forecastday[1].day.mintemp_c) + "°C";

    document.querySelector(".forecastWeatherIcon_2").src=data.forecast.forecastday[2].day.condition.icon;
    document.querySelector(".date_2").innerHTML = data.forecast.forecastday[2].date;
    document.querySelector(".forecastMaxTemp_2").innerHTML = "Max " + Math.round(data.forecast.forecastday[2].day.maxtemp_c) + "°C";
    document.querySelector(".forecastMinTemp_2").innerHTML = "Min " + Math.round(data.forecast.forecastday[2].day.mintemp_c) + "°C";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();