// nav js
const navheader =[ "მთავარი","ჩვენ შესახებ", "საქმიანობა", "თავშესაფარი","შთაგონება",  "კონტაქტი" ];
const links = ["index.html", "about.html", "ourworks.html","shelter.html", "love.html", "contacts.html"];

let navlenghth = navheader.length;
let navtext = "<ul>";

for(let i=0; i<navlenghth; i++){
navtext +='<li><a href=" '+ links [i] +' ">' + navheader[i] + "</a></li>";
}

navtext += "</ul>";

document.getElementById("navheader"). innerHTML = navtext;

// chat js
function show(){
document.getElementById("messageboxcontainer").style.display = "block";
}

function hide(){
document.getElementById("messageboxcontainer").style.display = "none";
}

