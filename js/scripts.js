// # Costants declaration
const pricePerKm = 0.21;
const ageMinor = 18;
const ageSenior = 65;
const discountMinor = 0.8;
const discountSenior = 0.6;

// # DOM Elements
const elementTravelDistance = document.getElementById('travel-distance');
const elementPassengerAge = document.getElementById('passenger-age');
const elementTicketPrice = document.getElementById('ticket-price');
const elementDiscounts = document.getElementById('discounts');

// # Collecting inputs
const kilometers = parseInt(prompt('How many km are you traveling?', '300'));
const passengerAge = parseInt(prompt("What's the passenger's age?", '32'));

// ? Validation
let isValid = true;
let error = '';

//check if km is a number > 0
if (!kilometers || kilometers <= 0){
    isValid = false;
    error = "ERROR: Km must be a number greater than 0.";
}

//check if age is 0 < number > 120
if (!passengerAge || passengerAge < 1 || passengerAge > 120){
    isValid = false;
    error += "\nERROR: You must enter a valid age, age must be a number between 0 and 120."
}

// # Calculating price
if (!isValid){
    alert(error);
}else{

    let price = kilometers * pricePerKm;
    
    let discountedPrice = 0;

    if (passengerAge < ageMinor) {
        discountedPrice = price * discountMinor;
    } else if (passengerAge > ageSenior){
        discountedPrice = price * discountSenior;
    }

    // Printing data
    elementTravelDistance.innerText = kilometers + 'km';
    elementPassengerAge.innerText = passengerAge;
    elementTicketPrice.innerText = price.toFixed(2) + '€';

    if (discountedPrice){
        elementDiscounts.innerHTML = `
        <span>Discounted Price:</span>
        <span class="fw-bold">${discountedPrice.toFixed(2)}€</span>`;
    }
}