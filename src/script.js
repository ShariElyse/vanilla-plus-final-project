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
  console.log(event);
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
    console.log(response);
    let temp = document.querySelector("h3");
    temp.innerHTML = `${Math.round(response.data.main.temp)}°F`;

    let weatherDescription = document.querySelector("#weather-description");
    weatherDescription.innerHTML = response.data.weather[0].description;

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}mph`;
  }
  axios.get(apiUrl).then(displayWeatherData);
}
let cityInput = document.querySelector("#city-search-form");
cityInput.addEventListener("submit", displayInput);
