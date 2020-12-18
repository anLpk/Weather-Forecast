// TODO: Write your JS code in here
// console.log("Hello from inside");
// data.main.temp = temperature;
// data.weather[0].description = weather
// data.dt = time;
import $ from "jquery";
import "select2";

$("#city-input").select2();

const cities = [
  "Amsterdam",
  "Bali",
  "Barcelona",
  "Belo Horizonte",
  "Berlin",
  "Bordeaux",
  "Brussels",
  "Buenos Aires",
  "Casablanca",
  "Chengdu",
  "Copenhagen",
  "Kyoto",
  "Lausanne",
  "Lille",
  "Lisbon",
  "London",
  "Lyon",
  "Madrid",
  "Marseille",
  "Melbourne",
  "Mexico",
  "Milan",
  "Montréal",
  "Nantes",
  "Oslo",
  "Paris",
  "Rio de Janeiro",
  "Rennes",
  "Rome",
  "São Paulo",
  "Seoul",
  "Shanghai",
  "Shenzhen",
  "Singapore",
  "Stockholm",
  "Tel Aviv",
  "Tokyo",
];

$("#city-input").select2({ data: cities, width: "100%" });
const display = document.getElementById("show-it");
const form = document.getElementById("form-one");

const weatherApp = (event) => {
  event.preventDefault();
  display.innerHTML = "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      document.querySelector("#city-input").value
    }&appid={YOUR API ID}`
  )
    .then((response) => response.json())
    .then((data) => {
      const displayWeather = `
    <p class="data">Temperature: ${data.main.temp}</p>
    <p class="data">Weather :${data.weather[0].description}</p>
    <p class="data">${new Date()}</p>
    `;
      display.insertAdjacentHTML("beforeend", displayWeather);
    });
};
// console.log("heeey");
form.addEventListener("submit", weatherApp);
