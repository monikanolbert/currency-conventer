let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amountPln");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amountPln = amountElement.value;
    let currency = currencyElement.value;

    resultElement.value = amountPln / currency;
    resultElement.value = (amountPln / currency).toFixed(2);

    resultElement.innerText = resultElement.value;
    console.log("formularz został pomyślnie wysłany");

});

formElement.addEventListener("reset", () => {

    resultElement.innerText = "N/A";
    console.log("formularz został zresetowany");
  });