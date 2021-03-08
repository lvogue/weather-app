///Date 
let now= new Date();
let currentDate=document.querySelector("h2");
let year=now.getFullYear();
let months=["January","Febuary","March","April","May","June","July","August","September", "October","November","December"];
let month=months[now.getMonth()];
let date=now.getDate();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=days[now.getDay()];
let hour=now.getHours();
let min=now.getMinutes();
if (min<10){
  min=`0${min}`
};
currentDate.innerHTML=`Today is ${day}, ${month} ${date}, ${year} (${hour}:${min})`;

function showTemp(response){
document.querySelector("#city").innerHTML=response.data.name;
document.querySelector("#raw-temp").innerHTML=Math.round(response.data.main.temp);
document.querySelector("#icon").innerHTML =
    response.data.weather[0].main;
    console.log(response.data.weather);
}
function search(city) {
  let apiKey = "e12d9ab66f6318d8049410e9e1d186f4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function enter(event){
  event.preventDefault();
  let searchInput=document.querySelector("#search-input");
  let replacement=document.querySelector("#city").value;
  search(city);
}
let form=document.querySelector("#search-bar");
form.addEventListener("submit",enter);



search("Portland");

//to get location 
// function showPortland(response){
//   let temperature = Math.round(response.data.main.temp);
//   console.log(temperature);
//   console.log(response);
//   let city = response.data.name;




//   let h1 = document.querySelector("#city");
//   h1.innerHTML = city;
//   let h2=document.querySelector("#raw-temp");
//   h2.innerHTML=temperature;
// };
//   let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
//   let apiKey="e12d9ab66f6318d8049410e9e1d186f4";
//   let city= "Portland";
//   let units="metric"
//   axios.get(apiUrl).then(showPortland);



