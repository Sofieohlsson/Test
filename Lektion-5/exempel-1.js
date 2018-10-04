// Arbeta med arrayer 

// Skapa en tom array 
let cars1 = []; 

// SKapa en array som innehåller data 
let cars2 = ["Volvo", "Saab", "BMW"]; 
// Detta är en array-literal 

// Skapa en array med en konstruktor 
let cars3 = new Array (1 , 2 , 3); 
let cars4 = new Array (); // en tom array 

// Att komma åt data 
console.log(cars2[0]); 
console.log(cars2[1]); 
console.log(cars2[2]); 
console.log(cars2); 

// Hämta ett element och spara i en ny variabel
let bil1 = cars2[0]; // en kopia
console.log(bil1);

// Ändra ett element 
cars2[0] = "Mazda"; 
console.log(cars2);
console.log(bil1);

// En array i JS kan innehålla olika typer 
let person = ["Sofie", "Ohlsson", 23 , false]; 

// Du kan skapa 4 olika variabler istället för en array 
let firstName = "Sofie"; 
let lastName = "Ohlsson"; 
let age = 23; 
let married = false; 

// Hitta antal element med egenskapen length 
let antal = person.length; 
console.log(antal); 

// Sortera en array 
console.log(cars2);
cars2.sort();
console.log(cars2);

// Reverse sort 
cars2.sort();
cars2.reverse(); 
console.log(cars2);
