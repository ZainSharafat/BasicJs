let score = true;

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber);


// "33" = > 33
// "33abc" => NaN
// true => 1; False => 0

let isLoggedIn = 1

let changeInBoolean = Boolean(isLoggedIn)

console.log(changeInBoolean);


let someNumber = 123;

let changeInString = String(someNumber);

console.log(changeInString);

console.log(typeof (changeInString));

// Operations

let value = 3
let negValue = -value
console.log(negValue);


let str1 = "hello";
let str2 = " zain";

let com = str1+str2;
console.log(com);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);

console.log(1 + 2 + "2")

console.log(+true) // 1

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2 //donot write this kind of confusing code

let gameCounter = 100
gameCounter++; //postfix
++gameCounter; //prefix
console.log(gameCounter);



