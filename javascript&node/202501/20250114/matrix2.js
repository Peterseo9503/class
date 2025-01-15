
const m2 = [
  [0, 1, 2],
  [9, 3, 8],
  [4, 7, 5],
];

const m1 = [
  [0, 6, 1],
  [3, 5, 2],
];

const m3 = [];
for( let x=0; x<2; x++ ){
    m3.push([0,0,0]);
    for( let y=0; y<3; y++ ){
        for(let z=0; z<3; z++){
            m3[x][y] +=  (m1[x][z] * m2[z][y]);
        }
    }
}

console.log(m3);
