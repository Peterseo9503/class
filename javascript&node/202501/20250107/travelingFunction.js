const myA = {first:[
    10,
    [20,21,22,23,24],
    30,
    [40,41,42,43,44,{a:"abc"}],
    {a:"1"},
    50
]
,second : {
    secondvalues:[1001,1002]
}};

const travel = (something) =>{
    if( Array.isArray(something) ){
        something.forEach( v=>{ //
            travel(v);          // 이부분을 Array 함수로 바꾸고
        } )
    }else if( typeof something === 'object' ){
        for(const key in something){// 이부분을 Object 함수로 바꾸면 선생님과 동일한 코드가 됨. 
            travel(something[key]); //
        }
    }else{
        console.log(something);
    }
}

travel( myA );

// 기능을 3개로 나눠라는 말씀이신지...?

// const checkType = (inputV)=>{
//     let type = "";
//     if(typeof inputV === 'object' ){
//         if(Array.isArray(inputV)){
//             type = "array";
//         }else{
//             type = "object";
//         }
//     }else{
//         type = "primitive";
//     }
//     return type;
// }

// const iteratorArray = (array)=>{
//     for(value of array){
//         if(checkType(value) === "array"){
//             iteratorArray(value);
//         }else if(checkType(value) === "object"){
//             //객체순환
//         }else{
//             console.log(value);
//         }
//     }
// }

// const iteratorObject = (object) =>{
//     for(let key in object){
//         if(checkType(object[key])==="array" ){
//             iteratorArray( object[key] )
//         }
//     }
// }

// console.log( checkType(myA) );