// Arrays in JavaScript

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[fruits.length - 1]); // "Orange"

console.log(fruits.length); //  4

// 2nd way of creating array

const numbers = new Array(1, 2, 3, 4);
numbers.push(5);
numbers.push(6);

console.log(numbers); //  [ 1, 2, 3, 4, 5, 6 ]

let pop = numbers.pop(); //  6

console.log(numbers); //  [ 1, 2, 3, 4, 5 ]
console.log(pop); //  6

// Arrays methods in JavaScript

// push()

fruits.push("Grapes");
fruits.push("Kiwi");

console.log(fruits); //  [ 'Mango', 'Banana', 'Apple', 'Orange', 'Grapes', 'Kiwi' ]

// pop()

let pop1 = fruits.pop();
let pop2 = fruits.pop();

console.log(pop1); //   Kiwi
console.log(pop2); //   Grapes
console.log(fruits); //   [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// sort()

fruits.sort();
console.log(fruits); //   [ 'Apple', 'Banana', 'Mango', 'Orange' ]

const myNumbers = [5, 2, 4, 1, 3];

myNumbers.sort();
console.log(myNumbers); //   [ 1, 2, 3, 4, 5 ]

// main working method
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

// slice()

let slicedFruits1 = fruits.slice(1);
let slicedFruits2 = fruits.slice(1, 3);

console.log(fruits); //   [ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(slicedFruits1); //   [ 'Banana', 'Mango', 'Orange' ]
console.log(slicedFruits2); //   [ 'Banana', 'Mango' ]

// includes()

console.log(fruits.includes("Apple")); //  true
console.log(fruits.includes("A")); //  false

// concat()

const myBoys = ["Prasad", "Maruthi", "Sai"];
const myGirls = ["Divya", "Harika", "Mythri"];

const myStudents = myBoys.concat(myGirls);

console.log(myStudents); //  [ 'Prasad', 'Maruthi', 'Sai', 'Divya', 'Harika', 'Mythri' ]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const arr3 = [10, 11, 12];

const myArray = arr1.concat(arr2, arr3);

console.log(myArray); // [ 1,  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// shift()

const users = ["Prasad", "Maruthi", "Sai", "Kumar"];

const shiftedUsers = users.shift();

console.log(shiftedUsers); //  "Prasad"
console.log(users); //  [ 'Maruthi', 'Sai', 'Kumar' ]

//unshift()

users.unshift("Prasad");
users.unshift("Priya");

console.log(users); //  [ 'Priya, 'Prasad', 'Maruthi', 'Sai', 'Kumar' ]

// every method
const evenNum = [2, 4, 6, 8, 10];
const ans = evenNum.every((value) => value % 2 === 0);
console.log(ans); // true

// some method
const oddNum = [1, 3, 5, 7, 9];
const ans2 = oddNum.some((value) => value % 2 === 0);
console.log(ans2); // false

// fill method
const arrFill = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrFill.fill(0, 2, 5);
console.log(arrFill); // [ 1, 2, 0, 0, 0, 6, 7, 8, 9 ]

// splice method
const arrSplice = ["it1", "sample", "it3", "it4", "it5", "it6"];
console.log(arrSplice); // [ 'it1', 'sample', 'it3', 'it4', 'it5', 'it6' ]

arrSplice.splice(1, 1, "it2");
console.log(arrSplice); // [ 'it1', 'it2', 'it3', 'it4', 'it5', 'it6' ]

arrSplice.splice(5, 1);
console.log(arrSplice); // [ 'it1', 'it2', 'it3', 'it4', 'it5' ]

// Array Destructuring in JavaScript

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

let [item1, item2, item3, item4] = fruits;

console.log(item1); // Apple
console.log(item2); // Banana
console.log(item4); // Orange

const myNumbers1 = [1, 2, 3, 4, 5];

let [one, , , four] = myNumbers1;

console.log(one); // 1
console.log(four); // 4
