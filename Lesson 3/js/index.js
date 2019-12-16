let elem = document.getElementById("root");

let tbl = document.createElement("table");

tbl.setAttribute("style", "width:50%");

elem.appendChild(tbl);

let headrow = document.createElement("tr");

let headrowelem1 = document.createElement("th");
headrowelem1.innerHTML = "Company";

let headrowelem2 = document.createElement("th");
headrowelem2.innerHTML = "Contact";

let headrowelem3 = document.createElement("th");
headrowelem3.innerHTML = "Country";

headrow.appendChild(headrowelem1);
headrow.appendChild(headrowelem2);
headrow.appendChild(headrowelem3);

tbl.appendChild(headrow);

let firstrow = document.createElement("tr");

let firstrowelem1 = document.createElement("td");
firstrowelem1.innerHTML = "Alfreds Futterkiste";

let firstrowelem2 = document.createElement("td");
firstrowelem2.innerHTML = "Maria Anders";

let firstrowelem3 = document.createElement("td");
firstrowelem3.innerHTML = "Germany";

firstrow.appendChild(firstrowelem1);
firstrow.appendChild(firstrowelem2);
firstrow.appendChild(firstrowelem3);

tbl.appendChild(firstrow);

let secondrow = document.createElement("tr");

let secondrowelem1 = document.createElement("td");
secondrowelem1.innerHTML = "Centro comercial Moctezuma";

let secondrowelem2 = document.createElement("td");
secondrowelem2.innerHTML = "Francisco Chang";

let secondrowelem3 = document.createElement("td");
secondrowelem3.innerHTML = "Mexico";

secondrow.appendChild(secondrowelem1);
secondrow.appendChild(secondrowelem2);
secondrow.appendChild(secondrowelem3);

tbl.appendChild(secondrow);
