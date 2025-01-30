"use strict";
const A =
    [
        [true, false, false],
        [true, true, true]
    ]
const B =[
    [false,true],
    [true,true],
    [true,false]
]
const firstLoop=A.length;
const secondLoop =B[0].length;
const thirdLoop = B.length;
const result = [];
for(let i=0; i< firstLoop;i++){
    result.push([]);
    for(let j =0; j< secondLoop; j++)
    {
        result[i][j] = 0;
        for( let k=0; k< thirdLoop; k++ ){
            // console.log( `${result[i][j]} += ${A[i][k]} * ${B[j][k]}`  )
            result[i][j] += A[i][k] && B[k][j];
        }
        result[i][j] = result[i][j] >=1 ? true: false
    }
}

console.log(result);
