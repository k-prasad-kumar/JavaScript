// Comparisions in JavaScript

let userName = "logan";
let password = "logan@123";
let email = "logan@gmail.com";

// if statement

if (userName === "logan") {
  console.log("Welcome Logan"); // Welcome Logan
}

// if else statement

if (userName === "logan") {
  console.log("Welcome Logan"); // Welcome Logan
} else {
  console.log("Username Wrong!!!");
}

if (userName === "John") {
  console.log("Welcome Logan"); // Username Wrong!!!
} else {
  console.log("Username Wrong!!!");
}

// if else if statement

let temparature = 35;

if (temparature < 0) {
  console.log(`it's extremely cold!!!`); // it's hot
} else if (temparature < 20) {
  console.log(`it's Cold!`);
} else if (temparature < 35) {
  console.log(`it's OK`);
} else if (temparature < 45) {
  console.log(`it's hot!`);
} else {
  console.log(`it's extremely hot!!!`);
}

// nested if else

if (userName === "logan") {
  if (password === "logan@123") {
    if (email === "logan@gmail.com") {
      console.log(`login success`);
    } else {
      console.log(`email wrong!!!`);
    }
  } else {
    console.log(`password wrong!!!`);
  }
} else {
  console.log(`username wrong!!!`);
}

// Switch statement in JavaScript

let day = new Date().getDay();

console.log(day);

switch (day) {
  case 0:
    console.log(`Sunday`);
    break;
  case 1:
    console.log(`Monday`);
    break;
  case 2:
    console.log(`Tuesday`);
    break;
  case 3:
    console.log(`Wednesday`);
    break;
  case 4:
    console.log(`Thursday`);
    break;
  case 5:
    console.log(`Friday`);
    break;
  case 6:
    console.log(`Saturday`);
    break;
  default:
    console.log(`Inavild Day`);
}
