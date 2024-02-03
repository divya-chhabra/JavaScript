// Closure Example
function outer(){
    var a = 7;          // can be replaced with let also
    function inner(){       // closure function 
        console.log(a);
    } 

    return inner;
}

outer()();
// var close = outer();
// close();

// Closure Function with a parameter//

//  function outer(b){
//     var a = 7;          // can be replaced with let also
//     function inner(){       // closure function 
//         console.log(a,b);
//     } 

//     return inner;
// }

// outer("Hello World")();

//nested outer function//
// function outest(){
//     var c = 100;
//     function outer(b){
//         var a = 7;          // can be replaced with let also
//         function inner(){       // closure function 
//             console.log(a,b,c);
//         } 
    
//         return inner;
//     }
//     return outer;
// }

// outest()("Hello World")();

// conflicting variable name

// function outer(){
//     let a = 7;         // block level variable 
//     function inner(){       // closure function 
//         console.log(a);
//     } 

//     return inner;
// }

// let a = 30; //Script scope variable

// outer()(); // it will print 7

// Data Hiding and Encapsulation

// function counter(){
//     var count = 0;
//     function incrementCounter(){
//         count++;
//         console.log(count);
//     }

//     return incrementCounter;

// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();


// Constructor Function

// function Counter(){

//     var count = 0;

//     this.incrementCounter = function(){
//         count++;
//         console.log(count);
//     }

//     this.decrementCounter = function(){
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();
// counter1.incrementCounter();

function outer(){
    var a = 7;          // can be replaced with let also
    var z = 10;         // smartly collected by garbage collector of JS Engine
    function inner(){       // closure function 
        console.log(a);
    } 

    return inner;
}

outer()();








