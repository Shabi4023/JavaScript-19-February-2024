
//Question # 5.
//Create a program that accepts three sides of a triangle as arguments and checks if it's an equilateral, isosceles, or scalene triangle.

let s1 = prompt("Enter first side of traingle: ");
let s2 = prompt("Enter second side of traingle: ");
let s3 = prompt("Enter third side of traingle: ");

if (s1 == s2 && s1 == s3) {
    console.log("This is Equiliteral Triangle!");
}
else if (s1 == s2 || s1 == s3 || s2 == s3) {
    console.log("This is Isosceles Trianlge!");
}
else if (s1 !== s2 && s2 !== s3 && s1 !== s3) {
    console.log("This is Scalene Triangle!");
}