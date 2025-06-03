const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const masterCardBtn = document.getElementById("masterCardBtn")
const payPalBtn = document.getElementById("payPalBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentbResult = document.getElementById("paymentbResult")

mySubmit.onclick = function (){
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed!`
  }else {
    subResult.textContent = `You are NOT subscribed!`
  }
  if (visaBtn.checked) {
    paymentbResult.textContent = `You are paying with Visa!`
  } else if (masterCardBtn.checked){
    paymentbResult.textContent = `You are paying with MasterCard!`    
  } else if (payPalBtn.checked){
    paymentbResult.textContent = `You are paying with PayPal!`    
  } else {
    paymentbResult.textContent = `You must select a payment type`  
  }
}