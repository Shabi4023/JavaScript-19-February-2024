
//Question # 1.
let user = prompt("Are you disabled or not? ");

switch (user) {
    case "yes":
        console.log("You are not elligible for driving!");
        break;
    case "no":
        let age = prompt("Enter your age: ");
        if (age < 18) {
            console.log("You can't drive yet! You are under 18!");
        }
        else {
            console.log("You can drive now!");
        }
        break;
}