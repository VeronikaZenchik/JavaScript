const slides = document.querySelectorAll(".slides img")
let slideIndex = 0
let intervalId = null

document.addEventListener("DOMContentLoaded", intializeSlider)

function intializeSlider() {

  if(slides.length > 0){
    slides[0].classList.add("displaySLide")
    intervalId = setInterval(nextSlide, 5000)
  }

}

function showSlide(index) {

  if (index >= slides.length) {
    slideIndex = 0
  } else if (index < 0){
    slideIndex = slides.length - 1
  }

  slides.forEach(slide=> {
    slide.classList.remove("displaySLide")
  })
    slides[slideIndex].classList.add("displaySLide")
}

function prevSlide() {
  clearInterval(intervalId)
  slideIndex--
  showSlide(slideIndex)
}


function nextSlide() {
  slideIndex++
  showSlide(slideIndex)
}