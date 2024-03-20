function setStage(newStage) {
 const form = document.querySelector(".multi-step")

 form.classList.remove("meny-nåverende-1")
 form.classList.remove("meny-nåverende-2")
 form.classList.remove("meny-nåverende-3")
 form.classList.remove("meny-nåverende-4")

 const newClass = "meny-nåverende-" + newStage
 form.classList.add(newClass)
 
}

var currentImage = 1;
showDivs(currentImage);

function plusDivs(n) {
  showDivs(currentImage += n);
}

function currentDiv(n) {
  showDivs(currentImage = n);
}

function showDivs(slideNumber) {
  var let;

  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (slideNumber > x.length) {currentImage = 1}    
  if (slideNumber < 1) {currentImage = x.length}
  for (let = 0; let < x.length; let++) {
    x[let].style.display = "none";  
  }
  for (let = 0; let < dots.length; let++) {
    dots[let].className = dots[let].className.replace(" w3-red", "");
  }
  x[currentImage-1].style.display = "block";  
  dots[currentImage-1].className += " w3-red";
}