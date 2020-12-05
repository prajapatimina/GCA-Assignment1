
function calculate(){
    amount = document.getElementById("amount").value
    tip = document.getElementById("tip").value
    result = document.getElementById("result")
    let total = parseInt(amount) + parseInt((tip/100) * amount)
    result.innerHTML = `
    <p> Total: ${total}</p>`
}