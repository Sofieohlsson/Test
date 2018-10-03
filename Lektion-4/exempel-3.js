// Arbeta med primitiva typer (datatyper)

// 1. string
let firstName = "Sofie";
let lastName = 'Ohlsson'; 
console.log(firstName, lastName); 
console.log("It's very nice!");

// 2. Number
let age = 23; 
const PI = 3.14159;  
let price = 5.50; 
let quantity = 10;
let total = price * quantity; 
console.log(total);  

// 3. Boolean (antingen true eller false)
let again = false; // eller 0
if(again)
    console.log("Inne i if-satsen");
again = true; 
if(again)
    console.log("Inne again i for-satsen");

// 4. Undefined (OBS! Detta är en typ i JS)
let name; 
console.log(name);

console.log(mobile); // OK eftersom mobile har deklarerats med var 
var mobile; 
mobile = "074-98098034";

// console.log(adress); 
let adress; 
adress = "Hemfridsvägen 17"; 

// 5. Null 
let ingenting = null; 

// Typeof 
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof again);
console.log(typeof name);
console.log(typeof ingenting);
