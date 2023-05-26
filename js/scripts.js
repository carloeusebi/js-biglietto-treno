console.log('JSOK');

// # Costants declaration
const pricePerKm = 0.21;
const ageMinor = 18;
const ageSenior = 65;
const discountMinor = 0.8;
const discountSenior = 0.6;

// # Collecting inputs
const kilometers = parseInt(prompt('How many km are you traveling?', '300'));
const passengerAge = parseInt(prompt("What's the passenger's age?", '32'));

console.log("Kilometers: " + kilometers);
console.log("Passenger's Age: " + passengerAge);

// TODO Validation

// # Calculating price
let price = kilometers * pricePerKm;

if (passengerAge < ageMinor) {
    price *= discountMinor;
} else if (passengerAge > ageSenior){
    price *= discountSenior;
}
price = price.toFixed(2);
console.log(`Price: ${price}€`);