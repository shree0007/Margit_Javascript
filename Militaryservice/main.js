function checkAge(){
const age = prompt("How old are you");

if (age < 18) {
    console.log("you are too young");
} else if (age < 27) {
    console.log("right age for military");
} else if (age < 41) {
    console.log("you are in reserve");
} else if (age < 55) {
    console.log("you are in backup service");
} else {
    console.log("you are too old");
}
}

checkAge();









