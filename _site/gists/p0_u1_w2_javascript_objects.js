// I paired [by myself] on this challenge.
 
 
 
 
// Pseudocode

/*
 
 
 SET secretNumber = 0
 SET secretNumber = 7
 SET password = ""
 SET password = "just open the door";
 SET allowedIn = true;
 SET allowedIn = false;
 SET members = 1;
 SET members to an array
 SET the first element of members to "John
 SET the fouth element of members to "John
 

 
 
 
*/ 
 
 
 
// __________________________________________
// Write your code below.
 
 
/*
 var secretNumber = 1;
 var secretNumber = 7;
 var password = "hello";
 var password = "just open the door";
 var allowedIn = true;
 var allowedIn = false;
 var members = 1;
 var members = [];
 var members = ["John"];
 var members = ["John", , ,"Mary"];
 */
 
 
 
 
// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
 
 var secretNumber = 7;
 var password = "just open the door";
 var allowedIn = false;
 var members = ["John", , ,"Mary"];
 
 
 
// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// 
//  pretty simple solutions. Just had to set each variable. Almost ridic to have to do seudocode for this.
// 
// 
// 
 
 
// __________________________________________
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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)
 
assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)
 
assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)
 
assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)
 
assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)
 
assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)
 
assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)
 
assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)
 
assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)