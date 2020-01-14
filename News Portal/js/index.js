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

GetNews(Request());

let business = document.querySelector(".Business");
let sport = document.querySelector(".Sport");
let science = document.querySelector(".Science");
let entertainment = document.querySelector(".Entertainment");

business.addEventListener("click", Request);
sport.addEventListener("click", Request);
science.addEventListener("click", Request);
entertainment.addEventListener("click", Request);

async function Request() {
  let url =
    "https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=18f1c87e444741aca30db0a569bba999";

  var response = await fetch(url);
  var data = await response.json();
  console.log(data);
  return data;
}
function GetNews(data) {
  var sport = document.querySelector("#business");
  for (let i = 0; i < 5; i++) {
    let h3 = document.createElement("h3");
    h3.className = "newsTitle";
    h3.innerHTML = data.articles[i].title;
    sport.appendChild(h3);
    let img = document.createElement("img");
    img.className = "newsImg";
    img.setAttribute("alt", "Image");
    img.setAttribute("src", data.articles[i].urlToImage);
    sport.appendChild(img);
    let desc = document.createElement("div");
    desc.className = "newsArticle";
    desc.innerHTML = data.articles[i].description;
    sport.appendChild(desc);
    let date = document.createElement("span");
    date.className = "newsPublishedAt";
    date.innerHTML = data.articles[i].publishedAt;
    sport.appendChild(date);
    let author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = data.articles[i].author;
    sport.appendChild(author);
  }
}
