function displayTimeDate() {
  let monthDays = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = new Date();
  let month = monthDays[currentDay.getMonth()];
  let date = currentDay.getDate();
  let year = currentDay.getFullYear();
  let day = weekDays[currentDay.getDay()];
  let hour = currentDay.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = currentDay.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let today = document.querySelector(".timeStamp");
  today.innerHTML = `Updated: ${day} at ${hour}:${minute}`;

  let todaysDate = document.querySelector(".today");
  todaysDate.innerHTML = `Today: ${month} ${date}, ${year}`;
}

displayTimeDate();

function displayInput(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  let apiKey = `95411422750c0e03350b1c829891759b`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  function citySubmission() {
    let cityValue = document.querySelector("h2");
    cityValue.innerHTML = city;
  }

  citySubmission();

  function displayWeatherData(response) {
    let temp = document.querySelector("#current-weather");
    temp.innerHTML = ` ${Math.round(response.data.main.temp)}°F`;

    let weatherDescription = document.querySelector("#weather-description");
    weatherDescription.innerHTML = response.data.weather[0].description;

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}mph`;

    let feelsLike = document.querySelector("#feels-like");
    feelsLike.innerHTML = `Feels like: ${Math.round(
      response.data.main.feels_like
    )}°F`;

    let weatherIcon = document.querySelector("#description-icon");
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    weatherIcon.setAttribute("alt", response.data.weather[0].description);

    function displayFahrenheitTemp() {
      event.preventDefault();
      fahrenheit.classList.add("active");
      tempConverter.classList.remove("active");

      let temp = document.querySelector("#current-weather");
      temp.innerHTML = ` ${Math.round(response.data.main.temp)}°F`;

      let feelsLike = document.querySelector("#feels-like");
      feelsLike.innerHTML = `Feels like: ${Math.round(
        response.data.main.feels_like
      )}°F`;
    }

    function displayCelsiusTemp() {
      event.preventDefault();
      tempConverter.classList.add("active");
      fahrenheit.classList.remove("active");

      let celsiusTemp = document.querySelector("#current-weather");
      celsiusTemp.innerHTML = ` ${Math.round(
        ((response.data.main.temp - 32) * 5) / 9
      )}°C`;

      let celsiusFeel = document.querySelector("#feels-like");
      celsiusFeel.innerHTML = `Feels like: ${Math.round(
        ((response.data.main.feels_like - 32) * 5) / 9
      )} °C`;
    }
    let tempConverter = document.querySelector("#celsius");
    tempConverter.addEventListener("click", displayCelsiusTemp);

    let fahrenheit = document.querySelector("#fahrenheit");
    fahrenheit.addEventListener("click", displayFahrenheitTemp);
  }
  axios.get(apiUrl).then(displayWeatherData);
}
let cityInput = document.querySelector("#city-search-form");
cityInput.addEventListener("submit", displayInput);
