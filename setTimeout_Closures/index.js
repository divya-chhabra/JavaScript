// function x (){

//     var  i = 1;

//     setTimeout(function(){
//         console.log(i)
//     }, 3000);

//     console.log("Namaste JavaScript");

// }
// x();

// display 1 to 5 after every 1 second
// function x (){
    
//     for(var i=1; i<=5; i++){

//         setTimeout(function(){
//             console.log(i)
//         }, i * 1000);
//     }
//     console.log("Namaste JavaScript");

// }
// x(); // this won't work as all the setout function refers to the reference of same i variable which 
     // has global scope

// function x (){
    
//     for(let i=1; i<=5; i++){

//         setTimeout(function(){
//             console.log(i)
//         }, i * 1000);
//     }
//     console.log("Namaste JavaScript");

// }
// x(); // this will work as the setout function has block level i variable

// another way to do it without using let variable

function x (){
    for(var i=1; i<=5; i++){
        function close(x){
        
            setTimeout(function(){
                console.log(x)
            }, x * 1000);
        }

        close(i);
    
    }
 
    console.log("Namaste JavaScript");
}
x();

