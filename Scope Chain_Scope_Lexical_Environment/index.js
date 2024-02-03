function a(){
    c();
    function c(){
        console.log(b); // function c can access b due to the access to reference of the lexical 
                        // environment of parent a, which also has access to the reference of the lexical 
                        // environment of its parent 
    }
    
}

var b = 10;
a();