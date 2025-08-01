const btnMode = document.querySelector(".mode")
const container = document.querySelector(".container")
const card = document.querySelector(".card")

btnMode.addEventListener("click", () =>{
container.classList.toggle("white-theme")
card.classList.toggle("dark-theme")
btnMode.classList.toggle("white-theme")


})