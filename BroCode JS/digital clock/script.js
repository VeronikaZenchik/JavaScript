function updateClock() {
  const now = new Date()
  const hours = now.getHours().toString().padEnd(2, 0)
  const minutes = now.getMinutes().toString().padEnd(2, 0)
  const seconds = now.getSeconds().toString().padEnd(2, 0)
  const timeString = `${hours}:${minutes}:${seconds}`
  document.getElementById("clock").textContent = timeString
}

updateClock()
setInterval(updateClock, 1000)



// Format Currency
let number = 123456.789

// number = number.toLocaleString("ru-BY",{style: "currency", currency: "BYN"})
// number = number.toLocaleString("en-US",{style: "currency", currency: "USD"})
number = number.toLocaleString("de-DE",{style: "currency", currency: "EUR"})
console.log(number);
