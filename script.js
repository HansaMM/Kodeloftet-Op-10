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
  let i;

  let slideElements = document.getElementsByClassName("mySlides");

  let dotsElements = document.getElementsByClassName("demo");

  if (slideNumber > slideElements.length) {currentImage = 1}  

  if (slideNumber < 1) {currentImage = slideElements.length}
  for (i = 0; let < slideElements.length; i++) {
    slideElements[let].style.display = "none";  
  }
  for (i = 0; let < dotsElements.length; i++) {
    dotsElements[let].className = dotsElements[let].className.replace(" w3-red", "");
  }
  slideElements[currentImage-1].style.display = "block";  
  dotsElements[currentImage-1].className += " w3-red";
}