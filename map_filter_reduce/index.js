var arr = [5,1,2,7,8];

const double = function(value){
    return (2*value);
}


const output  = arr.map(double);

const output2 = arr.map(function(value){
    return (value.toString(2));
})


const filteredArray = arr.filter((x)=> (x>4))
console.log(output);

const Sum = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);