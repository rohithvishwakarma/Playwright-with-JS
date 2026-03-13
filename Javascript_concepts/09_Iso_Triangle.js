let a = 10;
let b = 10;
let c = -10;

if(a == b && b == c){
    console.log("Equilateral");
} else if(a == b || b == c || a == c){
    console.log("Isosceles");
} else if(a != b || b != c || a != c){
    console.log("Scalene");
}