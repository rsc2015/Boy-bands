/* let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById(???);

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = ???;

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < ???; loopTracker += 1) {

  // Get a reference to the current item in the bands array
  const currentBand = ???;

  // Update the innerHTML value of the DOM element for bands

  // Get a reference to the current item in the vegetables array
  const currentVeggie = ???;

  // Update the innerHTML value of the DOM element for vegetables
} 


Update the code to iterate the two arrays provided (bands and vegetables) and 
output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element 
(e.g. li, div, p, etc...)*/
let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];

let bandList = "";

console.log("how many bands? ", bands.length);

for (let i = 0; i < bands.length; i++) {
  console.log("the index", i);
  bandList += `<li>${bands[i]}</li>`;
  console.log("bandList ", bandList );
}
document.getElementById("boy-bands").innerHTML = bandList ;

/*  tried  const........

function bandList() { 

const bandElement = document.getElementById("boy-bands").innerHTML;;
console.log("how many bands? ", bands.length);
for (let loopTracker = 0; loopTracker < bands.length; loopTracker++) {
  console.log("what is", loopTracker);
  const bandElement += `<li> ${bands[loopTracker]}</li>`;
  console.log("bandsList",  bandElement);
 }

}*/




let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
let vegetablesList = "";

console.log("how many vegetables? ", vegetables.length);

for (let j = 0; j < vegetables.length; j++) {
  console.log("the index", j);
  vegetablesList += `<li> ${vegetables[j]}</li>`;
  console.log("vegetablesList ", vegetablesList );
}
document.getElementById("vegetables").innerHTML = vegetablesList ;

