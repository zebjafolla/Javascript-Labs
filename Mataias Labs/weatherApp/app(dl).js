const api = {
  key: "d589e6a09737638b862a1d75565bcdb0", // personal key so that they know its me making requests
  base: "https://api.openweathermap.org/data/2.5/", //base got from api documentation form openweather.org
};

const searchbox = document.querySelector(".search-box"); //this targets the class search box(which is the in fact the search box) on the html page
searchbox.addEventListener("keypress", setQuery); //this sets an event listener to the search box so that when the enter key is pressed it will run the setQuery function

function setQuery(evt) { //evt is passed automatically to the function next to an event listener, evt could be an value, like 'e', or 'event' or 'apple'. evt here is the event that happened which would be keypress. keypress comes with its own properties that you can call the value of. in this case the user needs to hit enter which would translate to the number '13'.
  if (evt.keyCode == 13) { //if the keypress.keycode property which is saved in the 'evt' is '13' then enter was pressed and now the getResults function will execute.
    getResults(searchbox.value);//searchbox.value is whatever the user typed in which in this app should be a city and state, or maybe a city and country
  }
}

function getResults(query) { //query here is the searchbox.value which is what the user typed in
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)//this fetches a json file from openweathermap.org with the city or 'query', and the api key which is specific to the user, you can look on their api documentation to get all different types of results
    .then((weather) => { //weather is the promise
      return weather.json();// weather is a response that the josn method is used on, the return gets passed to the next .then
    })
    .then(displayResults); //this .then takes the json data now
}   

function displayResults(weather) { //weather is passed into here from the 2nd .then
  let city = document.querySelector(".location .city"); // the variable city contains boths the class location and the class city
  city.innerText = `${weather.name}, ${weather.sys.country}`; // this is changing the section with class name location and the div with class named city to the returned response from the api

  let now = new Date(); // this is storing the string from the Date class inside of the variable now
  let date = document.querySelector(".location .date");// this is selecting both the class named location and the class named date inside of the date variable
  date.innerText = dateBuilder(now); // this is changing the text in between the class named location and the class named dates opening and closing tags with the result of the Datebuilder function

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°f / ${Math.round(
    weather.main.temp_max
  )}°f`;

  document.body.style.backgroundImage = `url('https://source.unsplash.com/random/?${weather.name},${weather.sys.country}')`;
}

function dateBuilder(d) {
  let months = [
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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

getResults("Philadelphia");
