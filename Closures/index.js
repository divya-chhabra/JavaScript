function x(){
    var a = 7;

    // function can be returned here also using return statement
    
    function y(){              // Closure is a function bundled together with 
                              // references to its surrounding state(lexical environment)
        console.log(a);
    }

    return y; // y(); 
}

var z = x();
console.log(z);
z(); // display 7 as value  of a because not only a function is returned but 
     //it's lexical scope is also returned along with.



// Functions in JavaScript can be assigned to a variable and 
//also, can be passed as an argument to a function, Also, we can return a function 

// x = function y (){}
// x(function y(){ console.log(a);}) //  callback function
// return y