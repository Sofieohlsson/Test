// Aritmetiska operatorer i JS 

let y = 5; 
let x; 

x = y + 2; 
x = y - 2; 
x = x + 2;
x = x - 2;  
x = y * 2; 
x = x * 2; 
x = y / 2; 

// Modulus-operator 
x = y % 2; 
x = 10 % 2; 
x = 7 % 5; 
x = 5 % 7; 

// Ökningsoperator 
x = 10; 
x++; // öka alltid med ett 
x++;
// öka med två
x = x + 2; 
// eller 
x += 2; // lägg till 2
x += 5; // lägg till 5 

// Minskningsoperator 
x = 10; 
x-- ; // minska med 1 
// Minska med två 
x = x - 2; 
x -= 2; 

//
x = "TEXT"; 
x = x / 2; // NaN
x = 2 / x; // NaN 
x = x / x; // NaN 

let x2; 
console.log(x2/2); // NaN 
console.log(2/x2); // NaN 
console.log(x2/x2); // NaN 

console.log(x); 

// Konkatenering
let firstName = "Sofie"; 
let lastName = "Ohlsson"; 
let fullName = "Hej" + firstName + " " + lastName + "!"; 
console.log(fullName); 

x = "1" + 2; // 12 
x = 1 + "2"; // 12 
x = "1" + "2"; // 12 
x = "1" + 2 + 3; // 123
x = 1 + 2 + "3"; // 33
x = "1" + (2+3); // 15 

// Implicit typomvandling 
x = "1" - "2"; // -1 
// Vi får en automatisk typomvandling 
x = 1 - "2"; // -1
x = "1" - 2; 

x = "1" * "2";
x = "1" / "2";
console.log(x); 
