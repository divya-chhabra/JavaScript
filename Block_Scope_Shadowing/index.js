var a = 100;
let b = 100;
const c = 100;


{
    var a = 10;     // hoisted in global scope
    let b = 20;     // hoisted in block scope
    const c = 30;   // hoisted in block scope

    console.log(a); // 10
    console.log(b); //20
    console.log(c); // 30
}

    console.log(a); // 10
    console.log(b); // 100
    console.log(c); // 100


{
    // pair of braces used to combine various statements in a group and use it where JavaScript expects 
    // for a single statement
}

// Illegal Shadowing

// let a = 100;
// {
//     var a = 10;

// }

// Legal Shadowing
// var a = 100;
// {
//     let a = 10;
// }

// Legal Shadowing
// var a = 100;
// function x(){
//     let a = 10;
// }