a();   
b();
// Function Statement aka Function Declaration
function a(){
    console.log("a called");
}

// Function Expression
var b = function (){
    console.log("b called");
}

// difference between function declaration and function statement is during hoisting phase,
// the statement will produce desired results and expression won't.

// Anonymous Function are used where functions are used as values
// function(){ // Invalid way of usage of anonymous functions

// }

// Named Function Expression

var b = function xyz(){
    console.log("b called");
}

b(); // this will work
xyz(); // this won't work, as xyz is not in global scope, 
      // xyz is local and can be used only inside the function itself

// First Class Functions or First Class Citizens

// Functions ability to be used as values to a variable, to be passed as an argument to another function and
// to be returned from another function, this ability of functions is called as 
//First Class Functions 


