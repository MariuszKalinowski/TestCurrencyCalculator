let sumElement = document.querySelector(".js-sum");
let selectElement = document.querySelector(".js-select");
let formElement = document.querySelector(".js-form");
let result = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let eur = 4.31;
    let usd = 3.95;
    let gbp = 5.03;

    let sum = sumElement.value;
    let select = selectElement.value;

    switch (select) {
        case "EUR":
            result.value = sum / eur;
            break;

        case "USD":
            result.value = sum / usd;
            break;

        case "GBP":
            result.value = sum / gbp;
            break;

    }
    result.innerHTML = `<strong>${sum} PLN = ${result.value.toFixed(2)} ${select}</strong>`;

});