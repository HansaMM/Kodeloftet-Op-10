function setStage(newStage) {
 const form = document.querySelector(".multi-step")

 form.classList.remove("meny-nåverende-1")
 form.classList.remove("meny-nåverende-2")
 form.classList.remove("meny-nåverende-3")
 form.classList.remove("meny-nåverende-4")

 const newClass = "meny-nåverende-" + newStage
 form.classList.add(newClass)
 
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}