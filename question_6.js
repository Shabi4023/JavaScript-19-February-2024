//Question # 4.

//Write a program that prompts the user to enter two numbers and checks if their sum is even and greater than 20.

let num4 = prompt("Enter your first number: ");
let num5 = prompt("Enter your second number: ");

let sumNum = num4 + num5;

if (sumNum % 2 == 0 && sumNum > 20) {
    console.log("Sum is greater than 20 and is even.", sumNum)
}
