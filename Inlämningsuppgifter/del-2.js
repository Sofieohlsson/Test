// sort()
let test = ["Sofie", "Caroline", "Christina", "Iza", "Harriet"]; 
test.sort(); 

console.log(test); 

let hundraser = ["Jack Russell", "Labrador", "Pug", "Beagle", "Elkhound"]; 
hundraser.reverse(); 

console.log(hundraser); 

let authors = ["Stephen King", "Neil Gaiman", "Lemony Snicket"]; 
authors.push("JRR Tolkien"); 

console.log(authors); 

let sodas = ["cola", "pepsi", "fanta", "loka"];
sodas.pop(); 

console.log(sodas); 

let girls = ["Sofie", "Caroline", "Christina"]; 
let boys = ["Calle", "Kai"]; 
let family = girls.concat(boys); 

console.log(family); 

let pets = ["coco", "Yuffi", "Iza", "Plüttolf"]; 
let familymembers = pets.join(); 

console.log(familymembers); 

let movies = ["Lord of the Rings", "Lilo and Stitch", "Inside out"]; 
movies.toString(); 

let DisneyCharacter = ["Nani", "Raymond", "Moana", "Elsa", "Anna"];
DisneyCharacter.copyWithin(1, 3);

console.log(DisneyCharacter); 

let makeupBrands = ["Mac", "Isadora", "Dior", "Clinic", "Lumene"];
makeupBrands.fill("Nyx");  

console.log(makeupBrands); 

let myArr = Array.from("SOFIE"); 

console.log(myArr); 

let myLife = ["Food", "Creativity", "Happiness", "Dog", "Family", "School"]; 
let h = myLife.includes("Happiness"); 

console.log(h); 

let countries = ["Sweden", "England", "UAE", "Australia", "Czech Republic", "Switzerland"]; 
let a = countries.indexOf("Australia"); 

console.log(a); 

let colors = ["red", "blue", "yellow", "pink", "purple"]; 
let y = colors.lastIndexOf("yellow"); 

console.log(y); 

let superheros = ["Green Arrow", "Spiderman", "Batman"];
superheros.shift(); 

console.log(superheros); 

let drinks = ["Whiskey sour", "Blue Hawaii", "Tequila sunrise", "Malibu sunset"]; 
drinks.unshift("Rum and coke", "Piña colada"); 

console.log(drinks); 

let holidays = ["Halloween", "Thanksgiving", "Christmas", "Easter"];
let autumn = holidays.slice(0, 2); 

console.log(autumn); 

let zelda = ["Ocarina of time", "Majoras mask", "Twilight princess", "Wind waker", "A link to the past"]; 
let z = zelda.valueOf(); 

console.log(z); 

let pokemons = ["cubone", "vulpix", "charmander", "pikachu"]; 
let testIfArray = Array.isArray(pokemons); 

console.log(testIfArray); 

