// Last 30 days currency exchange rate
const USD = 5.65
const EUR = 6.35
const GBP = 7.60
const AUD = 3.65
const CAD = 4.10
const CNY = 0.785

// Obtaining document objects
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        case "AUD":
            convertCurrency(amount.value, AUD, "A$")
            break
        case "CAD":
            convertCurrency(amount.value, CAD, "C$")
            break
        case "CNY":
            convertCurrency(amount.value, CNY, "¥")
            break
    }
}

function convertCurrency(amount, price, symbol){
    try{
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        
        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")
        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
    } catch (error) {
        footer.classList.remove("show-result")

        console.log(error)
        alert("Convertion not possible. Please try again later")
    }
}

// Convert value argument to Number to be able to use .toLocaleString
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })
}