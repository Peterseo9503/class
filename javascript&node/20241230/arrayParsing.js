// let tempA = [];
// let even = [2];
// let odd= [1,3,5,7];

// while (1) {
//   if (odd.length != 0) {
//     tempA.push(odd.shift());
//   }

//   if (even.length != 0) {
//     tempA.push(even.shift());
//   } else {
//     break;
//   }
// }
// console.log(tempA);

// const oA = [];
// let [even, odd] = [ [20,40,60,80], [10,30,50,70,90,110,130] ];

// while(odd.length !== 0 && even.length !== 0){
//         (odd.length !== 0) && (oA.push(odd.shift()));
//         (even.length !== 0) && (oA.push(even.shift()));
// }
// console.log(oA);

while (1) {
  if (odd.length != 0 || even.length != 0) {
    if (odd.length != 0) {
      tempA.push(odd.shift());
    }
    if (even.length != 0) {
      tempA.push(even.shift());
    }
  } else {
    break;
  }
}
