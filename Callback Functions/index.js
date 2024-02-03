// What is a Callback function in JS
// The functions we pass to another function as an argument are 
// called as Callback Functions
//  It gives us the power of asynchronous world in a single threaded and synchronous language

setTimeout( function (){
 console.log("Timer")
}, 5000);


function x (y){
    console.log("x")
}

x( function y(){                // here y is a callback function and calling this function is the responsibility 
    console.log("y");          // of x function

})

// Event Listener
function attachEventListener(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click", function xyz(){
    
        console.log("Button Clicked", ++count);
    
    })
}

attachEventListener();