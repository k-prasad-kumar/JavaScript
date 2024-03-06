// String methods in JavaScript

// String Indexing in JavaScript

let myFullName = "Prasad Kumar";

// P r a s a d   K u m a r
// 0 1 2 3 4 5 6 7 8 9 10 11

console.log(myFullName[0]); // it will print "P"
console.log(myFullName[-1]); // it will print undefined
console.log(myFullName[myFullName.length - 1]); // it will print "r"
console.log(myFullName[5]); // it will print "d"
console.log(myFullName.length); // it will print 12

// slice()

let slicedName1 = myFullName.slice(7);
let slicedName2 = myFullName.slice(0, 6);
let slicedName3 = myFullName.slice(4, 8);

console.log(myFullName); // "Prasad Kumar"
console.log(slicedName1); // "Kumar"
console.log(slicedName2); // "Prasad"
console.log(slicedName3); // "ad K"

// trim()

let myName = "    Prasad Kumar    ";

let trimedName = myName.trim();

console.log(myName); // "    Prasad Kumar    "
console.log(trimedName); // "Prasad Kumar"  it will remove spaces from before and after the string

// replace()

let note = "Please visit Microsoft";

let replacedNote = note.replace("Microsoft", "W3Schools");

console.log(note); // "Please visit Microsoft"
console.log(replacedNote); // "Please visit W3Schools"

// toLowercase()

let myFullName2 = "PRASAD KUMAR";

let myFullName3 = myFullName2.toLowerCase();

console.log(myFullName2); // "PRASAD KUMAR"
console.log(myFullName3); // "prasad kumar"

// toUpperCase()

let myFullName4 = "prasad kumar";

let myFullName5 = myFullName4.toUpperCase();

console.log(myFullName4); // "prasad kumar"
console.log(myFullName5); // "PRASAD KUMAR"

// -------- more useful string methods -----------

let myFullName6 = "Prasad Kumar";

// startsWith()

console.log(myFullName6.startsWith("P")); // true
console.log(myFullName6.startsWith("S")); // false

// endsWith()

console.log(myFullName6.endsWith("r")); // true
console.log(myFullName6.endsWith("R")); // false

// includes()

console.log(myFullName6.includes("d")); // true
console.log(myFullName6.includes("z")); // false

// Template Strings in JavaScript

let firstName = "Prasad";
let lastName = "Kumar";
let age = 24;

// without template strings

console.log(
  "My name is " + firstName + " " + lastName + " and my age is " + age
); // My name is Prasad Kumar and my age is 24

// with template strings

console.log(`My name is ${firstName} ${lastName} and my age is ${age}`); // My name is Prasad Kumar and my age is 24

let a = 10;
let b = 20;
console.log(`sum of a,b is ${a + b}`); // sum of a,b is 30
