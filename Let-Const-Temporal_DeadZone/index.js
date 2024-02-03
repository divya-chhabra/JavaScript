console.log(a);

console.log(x);  // Reference Error, value can't be logged before
                    // Temporal Dead Zone. Also, they have different memory space not in Global Scope.
console.log(y); // Temporal Dead Zone. Also, they are in Script scope not the global one.

var a = 5;

let x = 7; 
//let x = 8; // Syntax error let variables can't be reinitialized


const y = 10;

//const z; // type error