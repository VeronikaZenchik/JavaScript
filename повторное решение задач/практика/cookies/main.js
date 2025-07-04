const firstText = document.querySelector("#firstText")
const lastText = document.querySelector("#lastText")
const submitBtn = document.querySelector("#submitBtn")
const cookiesBtn = document.querySelector("#cookiesBtn")

submitBtn.addEventListener("click", ()=> {
  setCookie("firstName", firstText.value, 365)
  setCookie("lastName", lastText.value, 365)
})

cookiesBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName")
  lastText.value = getCookie("lastName")
})

function setCookie (name, value, daysToLive) {
  const date= new Date()
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
  let expires = "expires=" + date.toUTCString()
  document.cookie = `${name} = ${value}; ${expires}; path=/`
}

function getCookie (name) {
  const cDecoded = decodeURIComponent(document.cookie)
  const cArray = cDecoded.split("; ")
  let result = null

  cArray.forEach(element => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1)
    }
  })
  return result
}