// Write a program that determines whether a user - inputted number is divisible by both 3 and 5.

let num = prompt("Enter a number: ");

if (num % 3 == 0 && num % 5 == 0) {
    console.log(num, " is divisible by both 3 and 5.")
}
else {
    console.log(num, " is not divisible by both 3 and 5.")
}
