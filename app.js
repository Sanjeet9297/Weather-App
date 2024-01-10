// const apiKey = "b89b8fd27faac5ea4f623732f5808c78";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";
// const citi = document.querySelector(".city");
// const humidity = document.querySelector(".humidity");
// const temp = document.querySelector(".temp");
// const wind = document.querySelector(".wind");
// const icon = document.querySelector(".weather-icon");

// const searchBox = document.getElementById("search");
// const searchBtn = document.getElementById("button");

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   var data = await response.json();
//   console.log(data);
//   citi.innerHTML = data.name;
//   humidity.innerHTML = data.main.humidity + "%";
//   temp.innerHTML = Math.round(data.main.temp) + "°C";
//   wind.innerHTML = data.wind.speed + " km/hr";

//   if (data.weather[0].main === "Clouds") {
//     icon.src = "images/clouds.png";
//   }

//   if (data.weather[0].main === "Mist") {
//     icon.src = "images/mist.png";
//   }

//   if (data.weather[0].main === "Clear") {
//     icon.src = "images/clear.png";
//   }

//   if (data.weather[0].main === "Rain") {
//     icon.src = "images/rain.png";
//   }

//   if (data.weather[0].main === "Drizzle") {
//     icon.src = "images/drizzle.png";
//   }
// }

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
//   console.log("hello wolrd");
// });

const apikey = "b89b8fd27faac5ea4f623732f5808c78";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
// https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=b89b8fd27faac5ea4f623732f5808c78&units=metric

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
});

