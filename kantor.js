{
const amountElement = document.querySelector(".js-amount");
const formElement = document.querySelector(".js-form");
const resultElement = document.querySelector(".js-result");
const currencyElement = document.querySelector(".js-currency");

const EUR = 4.67;
const USD = 4.29;
const GBP = 5.31;
const NOK = 0.41;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = +amountElement.value;
    const currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = amount * EUR;
            break;
        case "USD":
            result = amount * USD;
            break;
        case "GBP":
            result = amount * GBP;
            break;
        case "NOK":
            result = amount * NOK;
            break;
    }
    resultElement.innerText = `${amount} ${currency} = ${result.toFixed(2)} PLN`;
});

}