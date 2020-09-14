function displayTimeDate() {
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
}

displayTimeDate();
