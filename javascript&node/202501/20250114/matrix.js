const m1 = [
    [2,1,4,0],
    [-7,3,6,1],
    [8,-4,-2,3],
    [1,9,4,-2]
]

const m2 = [
    [7,-1,2,4],
    [2,8,-5,1],
    [-3,-4,2,-2],
    [9,6,-2,0]
]

const m3 = [];
m1.forEach( (arrayValue,y,a1)=>{
    m3.push([])
    arrayValue.forEach((v,x,a2)=>{
        m3[y].push( m1[y][x] - m2[y][x] );
    });
} );
console.log(m3);