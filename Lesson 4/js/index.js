let main = document.querySelector(".main");
let form = document.querySelector(".main_form");
let city = document.querySelector(".city");
let btnSearch = document.querySelector(".btnSearch");
let data_terminal = [];
let data = [{}];
btnSearch.addEventListener("click", Request);
window.addEventListener("load", Init);
function Init() {
  let table = document.createElement("table");
  row = document.createElement("tr");
  row.innerHTML = "<th>ID</th><th>Address</th><th>Place</th><th>Map</th>";
  table.appendChild(row);
  form.appendChild(table);
}
function Request() {
  data_terminal = [];
  const URL = `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${city.value}`;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL, true);
  console.log("Request");
  xhr.onreadystatechange = function(aEvt) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        for (let i = 0; i < data.devices.length; i++) {
          const information = {
            ID: i + 1,
            latitude: data.devices[i].latitude,
            longitude: data.devices[i].longitude,
            tw: data.devices[i].tw,
            fullAddressUa: data.devices[i].fullAddressUa,
            placeUa: data.devices[i].placeUa
          };
          data_terminal.push(information);
        }
        CreateTable();
      } else {
        console.log("Error loading page\n");
      }
    }
  };
  xhr.send();
}
function CreateTable() {
  let chkTable = document.getElementsByTagName("table");
  if (chkTable.length > 0) {
    form.removeChild(form.lastChild);
  }
  let table = document.createElement("table");
  row = document.createElement("tr");
  row.innerHTML = `<th>ID</th><th>Address</th><th>Place</th><th>Map</th>`;
  table.appendChild(row);
  for (let i = 0; i < data_terminal.length; i++) {
    tdBtn = document.createElement("td");
    btnShowMap = document.createElement("button");
    btnShowMap.setAttribute("type", "button");
    btnShowMap.addEventListener("click", initMap);
    btnShowMap.value = data_terminal[i].ID;
    btnShowMap.innerHTML = "Show in a map";
    tdBtn.appendChild(btnShowMap);
    row = document.createElement("tr");
    row.innerHTML = `<td>${data_terminal[i].ID}</td><td>${data_terminal[i].fullAddressUa}</td><td>${data_terminal[i].placeUa}</td>`;
    row.appendChild(tdBtn);
    table.appendChild(row);
  }
  form.appendChild(table);
  initMap();
}
function initMap() {
  let f = Array.from(data_terminal).filter(
    option => option.ID == this.value
  )[0];
  try {
    let la = parseFloat(f.latitude);
    let ln = parseFloat(f.longitude);
    var uluru = { lat: ln, lng: la };
    var map = new google.maps.Map(document.querySelector(".map"), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({ position: uluru, map: map });
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  } catch {
    let mapV = document.createElement("div");
    mapV.setAttribute("class", "map");
    form.appendChild(mapV);
    let la = 0;
    let ln = 0;
    var uluru = { lat: la, lng: ln };
    var map = new google.maps.Map(document.querySelector(".map"), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }
}
