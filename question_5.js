//Question # 3.
//Create a program that takes two numbers as input and returns true if their sum is greater than 100 or their product is less than 100.

let num2 = prompt("Enter your first number: ");
let num3 = prompt("Enter your second number: ");

// let sum = num2 + num3;

if ((num2 + num3) > 100 || (num2 * num3) < 100) {
    console.log("True");
}
