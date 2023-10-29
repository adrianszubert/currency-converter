{

    const calculateResult = (amount, currency) => {

        const EUR = 4.67;
        const USD = 4.29;
        const GBP = 5.31;
        const NOK = 0.41;

        switch (currency) {
            case "EUR":
                return amount * EUR;

            case "USD":
                return amount * USD;

            case "GBP":
                return amount * GBP;

            case "NOK":
                return amount * NOK;
        }
    };


    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount} ${currency} = ${result.toFixed(2)} PLN`;
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value
        const currency = currencyElement.value

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}