//Question # 2.
//Write a program that checks if a number entered by the user is positive, negative, or zero.

let num1 = prompt("Enter a number: ");

if (num1 < 0) {
    console.log(num1, " is negative number!");
}
else if (num1 > 0) {
    console.log(num1, " is positive number!");
}
else {
    console.log(num1, " equals to 0.")
}
