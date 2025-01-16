const array =[
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

const firstLoop = array[0].length;

const resultArray = [];
for(let x=0; x<3; x++){
    for(let y=0; y<3; y++){
        for(let z=0; z<3; z++){
            resultArray.push( [array[0][x], array[1][y], array[2][z]] );
        }
    }
}

console.log( resultArray );


// for(let x=0; x<firstLoop; x++){
//     resultArray.push([]);
//     for(let y=0; y<3; y++){
//         for(let z=0; z<3; z++){
//             resultArray[x][y]
//         }
//     }
// }