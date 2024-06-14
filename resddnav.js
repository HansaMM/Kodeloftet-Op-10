let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".hoved-meny");
let menuCloseBtn = document.querySelector(".nav-links ");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}
// sidebar submenu open close js code
let hoved-meny = document.querySelector(".hoved-meny");
hoved-meny.onclick = function() {
 navLinks.classList.toggle("show1");
}
let link-meny-2 = document.querySelector(".link-meny-2");
link-meny-2.onclick = function() {
 navLinks.classList.toggle("show2");
}
let link-meny-3 = document.querySelector(".link-meny-3");
link-meny-3.onclick = function() {
 navLinks.classList.toggle("show3");
}
