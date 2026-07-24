const age = 20;

if (age >= 18) {
    console.log("Please Vote");
}
else {
    console.log("grow up kid");
}

shortcut 

 (age >= 18) ? console.log("Please Vote") : console.log("grow up kid")

// -----------------------------------------------------------------------------------------------------
let price = 500;
const isLeader = true;

if (isLeader) {
    price = 0;
}
else {
    price = price + 100;
}
console.log("Price is: ", price);


shortcut 
(isLeader) ? price = 0 : price = price + 100
price = isLeader ? 0 : price + 100;
console.log("Price is: ", price);

// -----------------------------------------------------------------------------------------------------------------

let name = 'sagor';
const student = false;

(student) ? console.log("come in class") : console.log("You can't come in class");



