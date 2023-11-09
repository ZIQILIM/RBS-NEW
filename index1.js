// DOM elemnt IDs.
const priceValueID = "price-value";
const promoInputID = "promo-input";
const errorPopupID = "error-popup";

const elements = {};

let basePrice = 30;

const promos = {
    "10PERCENT": 0.9,
    "20PERCENT": 0.8,
    "50PERCENT": 0.5,
};

const notifyOK = "NOTIFY_OK";
const notifyErr = "NOTIFY_ERR";

function notify(code, message) {
    // TODO: Show an actual popup.

    elements[errorPopupID].innerText = message;

    switch (code) {
    case notifyErr:
        console.error(message);
        break;
    case notifyOK:
        break;
    default:
        console.error(`unknown notify code "${code}"`);
    }
}

function notifyReset() {
    notify(notifyOK, "");
}

function updateElement(elem, value) {
    elem.innerText = value;
}

function enterPromoCallback() {
    const promoInput = elements[promoInputID];
    const value = promoInput.value;
    
    let actualPrice;
    
    // Check if the promo code is correct.
    if (!value) {
        notify(notifyErr, `please enter a promo code.`);
        return;
    }
    if (!promos[value]) {
        actualPrice = basePrice;
        notify(notifyErr, `promo code "${value}" does not exist.`);
    } else {
        actualPrice =  basePrice * promos[value];
        notify(notifyOK, `promo code accepted!`);
    }

    // Round off to nearest cent.
    const dollars = Math.floor(actualPrice) + Math.round(actualPrice * 100 % 100) / 100;
    // ??

    // Update priceValueDiv.
    updateElement(
        elements[priceValueID],
        `$${dollars}`,
    );
}

function _getElementById(id) {
    const elem = document.getElementById(id);
    if (elem === null) {
        notify(notifyErr, `elements by ID ${id} does not exist.`);
    }

    return elem;
}
function main() {
    [
        priceValueID,
        promoInputID,
        errorPopupID,
    ].forEach((id) => {
        elements[id] = _getElementById(id);
    });

    // Get priceValueDiv and set its base price.
    const priceValueDiv = elements[priceValueID];
    updateElement(priceValueDiv, `$${basePrice.toString()}`);
}

main();


function showConfirmationPopup() {
    
    var confirmationMessage = "Are you sure you want to proceed with the payment?";

    if (confirm(confirmationMessage)) {
        window.location.href = "booking-confirmed.html";
    } else {
        
    }
}

var confirmButton = document.getElementById("confirmationButton");
if (confirmButton) {
    confirmButton.addEventListener("click", showConfirmationPopup);
}
