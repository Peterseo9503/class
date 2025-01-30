"use strict";
const A :boolean[][]=
    [
        [true, false, false],
        [true, true, true]    
    ]
const B: boolean[][]=[
    [false,true],
    [true,true],
    [true,false]
]
const firstLoop: number = A.length;
const secondLoop: number = B[0].length;
const thirdLoop: number = B.length;
const result: any[] = [];
for(let i=0; i< firstLoop;i++){
    result.push([]);
    for(let j =0; j< secondLoop; j++)
    {
        result[i][j] = 0;
        for( let k=0; k< thirdLoop; k++ ){
            result[i][j] += A[i][k] && B[k][j];
        }
        result[i][j] = result[i][j] >=1 ? true: false
    }
}

console.log(result);
