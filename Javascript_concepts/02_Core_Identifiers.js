//Identifiers, Literal, Operator

var a = 10;
a = 20;
console.log(a);

//Identifiers - a (name which is given to container)
//Literal - 10 (value which is stored in container)
//Operator - = (operation which is performed on container)

//Rules for Identifiers
//1. Identifiers can start with a letter, underscore, or dollar sign
//2. Identifiers cannot start with a number
//3. Identifiers cannot contain spaces
//4. Identifiers cannot contain special characters except underscore and dollar sign
//5. Identifiers are case-sensitive

console.log("Literals - ");
//Integer Literal
var a = 10;
console.log(a);
//Float Literal
var b = 10.5;
console.log(b);
//String Literal
var c = "Hello";
console.log(c);
//Boolean Literal
var d = true;
console.log(d);
//Char Literal
var e = 'a';
console.log(e);
//Null Literal
var f = null;
console.log(f);
//Undefined Literal
var g = undefined;
console.log(g);
//Symbol Literal
var h = Symbol("a");
console.log(h);
//BigInt Literal
var i = 10n;
console.log(i);

console.log("Operators");
//Arithmetic Operators
var a = 10;
var b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b); // exponentiation operator

console.log("Assignment Operators");
var a = 10;
console.log(a);
var b = 20;
console.log(b);
var c = 30;
console.log(c);
var d = 40;
console.log(d);
var e = 50;
console.log(e);
var f = 60;
console.log(f);
var g = 70;
console.log(g);
var h = 80;
console.log(h);
var i = 90;
console.log(i);
var j = 100;
console.log(j);

console.log("Comparison Operators");
var a = 10;
var b = 20;
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log("Logical Operators");
var a = 10;
var b = 20;
console.log(a && b); //Returns Falsy value if any of the operand is Falsy
console.log(a || b); //Returns Truthy value if any of the operand is Truthy
console.log(!a); //Returns the opposite of the operand (It will work as a Not)

console.log("Bitwise Operators");
var a = 10;
var b = 20;
console.log(a & b); //Returns the bitwise AND of the operands (It will work as a Multiply)
console.log(a | b); //Returns the bitwise OR of the operands (It will work as a Add)
console.log(a ^ b); //Returns the bitwise XOR of the operands (It will work as a Subtraction)
console.log(~a); //Returns the bitwise NOT of the operands -(a+1)
console.log(a << b); //Returns the bitwise left shift of the operands (a*2^b)
console.log(a >> b); //Returns the bitwise right shift of the operands (a/2^b)
console.log(a >>> b); //Returns the bitwise unsigned right shift of the operands (a/2^b)

console.log("Ternary Operator");
var a = 10;
var b = 20;
console.log(a > b ? a : b); //Returns the value of the first operand if the condition is true, 
// otherwise returns the value of the second operand (condition ? valueIfTrue : valueIfFalse)

console.log("Type Operators");
var a = 10;
console.log(typeof a); //Returns the type of the operand
var b = 20;
console.log(typeof b);
var c = 30;
console.log(typeof c);
var d = 40;
console.log(typeof d);
var e = 50;
console.log(typeof e);
var f = 60;
console.log(typeof f);
var g = 70;
console.log(typeof g);
var h = 80;
console.log(typeof h);
var i = 90;
console.log(typeof i);
var j = 100;
console.log(typeof j);

console.log("instanceof Operator");
var a = 10;
console.log(a instanceof Number); //Returns true if the object is an instance of the specified class
var b = 20;
console.log(b instanceof Number);
var c = 30;
console.log(c instanceof Number);
var d = 40;
console.log(d instanceof Number);
var e = 50;
console.log(e instanceof Number);
var f = 60;
console.log(f instanceof Number);
var g = 70;
console.log(g instanceof Number);
var h = 80;
console.log(h instanceof Number);
var i = 90;
console.log(i instanceof Number);
var j = 100;
console.log(j instanceof Number);

console.log("void Operator");
var a = 10;
console.log(void a);
var b = 20;
console.log(void b);
var c = 30;
console.log(void c);
var d = 40;
console.log(void d);
var e = 50;
console.log(void e);
var f = 60;
console.log(void f);
var g = 70;
console.log(void g);
var h = 80;
console.log(void h);
var i = 90;
console.log(void i);
var j = 100;
console.log(void j);

console.log("delete Operator");
// Note: 'delete' is used to remove properties from objects, NOT to delete variables.
// Using 'delete' on a plain variable (e.g., delete a) is forbidden in strict mode.
var obj1 = { a: 10, b: 20, c: 30, d: 40, e: 50, f: 60, g: 70, h: 80, i: 90, j: 100 };
console.log(delete obj1.a);   // true — property 'a' is removed
console.log(delete obj1.b);   // true — property 'b' is removed
console.log(delete obj1.c);   // true
console.log(delete obj1.d);   // true
console.log(delete obj1.e);   // true
console.log(delete obj1.f);   // true
console.log(delete obj1.g);   // true
console.log(delete obj1.h);   // true
console.log(delete obj1.i);   // true
console.log(delete obj1.j);   // true
console.log(obj1);            // {} — all properties deleted

var pi = 3.14;
console.log(pi);    