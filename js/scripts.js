console.log('JSOK');

// # Costants declaration
const pricePerKm = 0.21;
const ageMinor = 18;
const ageSenior = 65;
const discountMinor = 20;
const discountSenior = 65;

// # Collecting inputs
const kilometers = parseInt(prompt('How many km are you traveling?', '300'));
const passengerAge = parseInt(prompt("What's the passenger's age?", '32'));

console.log("Kilometers: " + kilometers);
console.log("Passenger's Age: " + passengerAge);