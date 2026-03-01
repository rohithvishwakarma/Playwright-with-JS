// var, let, const & function

console.log("var");
var a = 10; // Redeclaration is allowed
console.log(a);

//Definition of the function
function printVarFunction() {
    console.log("Hello Rohith");
    var a = 20; // Redeclaration is allowed
    console.log(a);
    if (true) { // Block scope is not applicable for var
        var a = 30; // Redeclaration is allowed
        console.log(a);
    }
    console.log("Focused Value --> " + a);
}

printVarFunction();

console.log("--------------------------------");

console.log("let");
let b = 20; // Redeclaration is not allowed
console.log(b);

//Definition of the function
function printLetFunction() {
    console.log("Hello Rohith");
    let b = 30; // Redeclaration is not allowed
    console.log(b);
    if (true) { // Block scope is applicable for let
        let b = 40; // Redeclaration is not allowed
        console.log(b);
    }
    console.log("Focused Value --> " + b);
}

printLetFunction();

console.log("--------------------------------");

console.log("const");
let c = 20;
console.log(c);

//Definition of the function
function printConstFunction() {
    console.log("Hello Rohith");
    let c = 30; // Redeclaration is not allowed
    console.log(c);
    if (true) { // Block scope is applicable for let
        let c = 40; // Redeclaration is not allowed
        console.log(c);
    }
    console.log("Focused Value --> " + c);
}

printConstFunction();
