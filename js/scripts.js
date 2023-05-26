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

// ? Validation
let isValid = true;
let error = '';

//check if km is a number > 0
if (!kilometers){
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
    
    if (passengerAge < ageMinor) {
        price *= discountMinor;
    } else if (passengerAge > ageSenior){
        price *= discountSenior;
    }
    price = price.toFixed(2);
    console.log(`Price: ${price}€`);
}