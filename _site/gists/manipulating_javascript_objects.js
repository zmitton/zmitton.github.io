manipulating_javascript_objects.js



//pseudocode

/*
SET adam as empty object
 
SET adam's name to Adam
  
SET terah's spouse to adam 
 
SET terahs weight to 125 
 
REMOVE the eyecolor property from terah
 
SET spouse property of adam to terah
 
INIT a children property to terah
  
SET a carson property for the terah's children property to "Carson"
 
SET a carter property for the terah's children property to "Carter"
    
SET a colton property for the terah's children property to "Colton"
 
SET a children property for adam to the children property of terah
*/



//initial code

/*
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
 
var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"}; 
terah.children.carter = {name: "Carter"}; 
terah.children.colton = {name: "Colton"};
adam.children = terah.children;
 
console.log(terah);
*/



//refactored

/*
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
  children: {}
} 
terah.children.carson = {name: "Carson"}; 
terah.children.carter = {name: "Carter"}; 
terah.children.colton = {name: "Colton"};
var adam = {
  name: "Adam",
  spouse: terah,
  children: terah.children  
};
terah.spouse = adam;
*/



//reflections

/*
I feel like I learned a lot about javascript here, although the structure was arbitrarily simple so writing pseudocode was a bit weird . Other than that I got good practice with the different feature of gitHub.
*/









// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}
 
assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)
 
assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)
 
assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)
 
assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)
 
assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)
 
assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)
 
assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)
 
assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)
 
assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)
 
assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)
 
assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)
 
console.log("\nHere is your final terah object:")
console.log(terah)


