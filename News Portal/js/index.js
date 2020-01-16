// $("ul.nav li.dropdown").hover(
//   function() {
//     $(this)
//       .find(".dropdown-menu")
//       .stop(true, true)
//       .delay(200)
//       .fadeIn(500);
//   },
//   function() {
//     $(this)
//       .find(".dropdown-menu")
//       .stop(true, true)
//       .delay(200)
//       .fadeOut(500);
//   }
// );

let business = document.querySelector("#Business");
let sport = document.querySelector("#Sport");
let science = document.querySelector("#Science");
let technology = document.querySelector("#Technology");
let health = document.querySelector("#Health");
let entertainment = document.querySelector("#Entertainment");

let ua = document.querySelector("#ua");
let uk = document.querySelector("#gb");
let us = document.querySelector("#us");

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
  let url = `https://newsapi.org/v2/top-headlines?country=${currnetCountry}&category=${cat}&apiKey=18f1c87e444741aca30db0a569bba999`;
  var response = await fetch(url);
  var data = await response.json();
  console.log(data);
  GetNews(data);
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

  for (let i = 0; i < 3; i++) {
    let h3 = document.createElement("h3");
    h3.className = "newsTitle";
    h3.innerHTML = data.articles[i].title;
    wrapper.appendChild(h3);
    let img = document.createElement("img");
    img.className = "newsImg";
    img.setAttribute("alt", "Image");
    img.setAttribute("src", data.articles[i].urlToImage);
    wrapper.appendChild(img);
    let desc = document.createElement("div");
    desc.className = "newsArticle";
    desc.innerHTML = data.articles[i].description;
    wrapper.appendChild(desc);
    let date = document.createElement("span");
    date.className = "newsPublishedAt";
    date.innerHTML = data.articles[i].publishedAt;
    wrapper.appendChild(date);
    let author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = data.articles[i].author;
    wrapper.appendChild(author);
  }
}
