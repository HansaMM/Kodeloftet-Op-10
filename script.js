function setStage(newStage) {
 const form = document.querySelector(".multi-step")

 form.classList.remove("meny-nåverende-1")
 form.classList.remove("meny-nåverende-2")
 form.classList.remove("meny-nåverende-3")
 form.classList.remove("meny-nåverende-4")

 const newClass = "meny-nåverende-" + newStage
 form.classList.add(newClass)


 
}