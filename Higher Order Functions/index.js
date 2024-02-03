// Higher Order functions 

// When a function takes another function as an argument or return a function - Higher Order Function

function x (){
    console.log("Namaste");

}

function y (x){ // y is a higher order function
    x();
}

// Higher Order Functions definition ended

const radius = [ 3, 2, 1, 5];

const area = function (radius){
    return( Math.PI * radius * radius);
}

const circumference = function (radius){
    return( 2 * Math.PI * radius );
}

const diameter = function (radius){
    return( 2 * radius);
}

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
