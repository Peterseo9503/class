const myA = [
    10,
    [20,21,22,23,24],
    30,
    [40,41,42,43,44],
    50
];

myA.forEach( v=>{
    if(Array.isArray(v) ){
        v.forEach( v2=>{
            console.log(v2);
        });
    }
    else{
        console.log(v);
    }
} )