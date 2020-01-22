let business = document.querySelector("#Business");
let sport = document.querySelector("#Sport");
let science = document.querySelector("#Science");
let technology = document.querySelector("#Technology");
let health = document.querySelector("#Health");
let entertainment = document.querySelector("#Entertainment");

let ua = document.querySelector("#ua");
let uk = document.querySelector("#gb");
let us = document.querySelector("#us");

let searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", SearchWeather);

let currentCategoty = "business";
let currnetCountry = "ua";

business.addEventListener("click", ChangeCategoty);
sport.addEventListener("click", ChangeCategoty);
science.addEventListener("click", ChangeCategoty);
technology.addEventListener("click", ChangeCategoty);
health.addEventListener("click", ChangeCategoty);
entertainment.addEventListener("click", ChangeCategoty);

ua.addEventListener("click", ChangeCountry);
uk.addEventListener("click", ChangeCountry);
us.addEventListener("click", ChangeCountry);

WeatherRequest("Rivne");
Request("Business");

function ChangeCountry() {
  let contr = this;
  ua.classList.remove("selected");
  uk.classList.remove("selected");
  us.classList.remove("selected");

  contr.setAttribute("class", "selected");
  currnetCountry = contr.id;
  Request(currentCategoty);
}

function SearchWeather() {
  let inputValue = document.querySelector(".searchInput").value;
  if (inputValue != "") {
    WeatherRequest(inputValue);
  }
}

function ChangeCategoty() {
  let category = this;
  business.classList.remove("active");
  sport.classList.remove("active");
  science.classList.remove("active");
  technology.classList.remove("active");
  health.classList.remove("active");
  entertainment.classList.remove("active");

  category.setAttribute("class", "active");
  category = category.textContent.toLowerCase();
  category = category.trim();
  currentCategoty = category;
  console.log(category);

  Request(category);
}

async function Request(cat) {
  // let elem = document.getElementById(`${cat}`);
  // let val = elem.getAttribute("value");
  let url = `https://newsapi.org/v2/top-headlines?country=${currnetCountry}&category=${cat}&apiKey=1672043ef0e34c7cb1cb038b25310ebe`;
  var response = await fetch(url);
  var data = await response.json();
  console.log(data);
  GetNews(data);
}
async function WeatherRequest(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8afe1427d4e81cf9ae40a2f44c7a9ceb`;
  var response = await fetch(url);
  var data = await response.json();
  console.log(data);
  GetWeather(data);
}

function GetNews(data) {
  let sport = document.querySelector("#news");

  let wrapperChack = document.querySelector(".wrapper");
  if (wrapperChack != null) {
    sport.removeChild(wrapperChack);
  }

  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  sport.appendChild(wrapper);

  for (let i = 0; i < 6; i++) {
    let newsBlock = document.createElement("div");
    newsBlock.className = "blockNews col-md-4";
    wrapper.appendChild(newsBlock);
    let h3 = document.createElement("h3");
    h3.className = "newsTitle";
    h3.innerHTML = data.articles[i].title;
    newsBlock.appendChild(h3);
    let img = document.createElement("img");
    img.className = "newsImage";
    img.setAttribute("alt", "Image");
    img.setAttribute("src", data.articles[i].urlToImage);
    img.onerror = function() {
      this.src = "https://pokrovsk.news/i/news.svg";
    };

    newsBlock.appendChild(img);
    let desc = document.createElement("div");
    desc.className = "newsArticle";
    desc.innerHTML = data.articles[i].description;
    newsBlock.appendChild(desc);
    let date = document.createElement("span");
    date.className = "newsPublishedAt";
    date.innerHTML = data.articles[i].publishedAt;
    newsBlock.appendChild(date);
    let author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = data.articles[i].author;
    newsBlock.appendChild(author);
  }
}

function GetWeather(data) {
  let weather = document.querySelector("#weather");
  let wrapperChack = document.querySelector(".weatherwrapper");
  if (wrapperChack != null) {
    weather.removeChild(wrapperChack);
  }

  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "weatherwrapper");
  weather.appendChild(wrapper);

  let weatherBlock = document.createElement("div");
  weatherBlock.className = "blockWeather col-md-4";
  wrapper.appendChild(weatherBlock);

  let cityName = document.createElement("h3");
  cityName.textContent = data.name;
  weatherBlock.appendChild(cityName);

  let weatherUl = document.createElement("ul");
  weatherBlock.appendChild(weatherUl);

  let tempLi = document.createElement("li");
  tempLi.textContent = "Temperature: " + data.main.temp;
  weatherUl.appendChild(tempLi);
}
