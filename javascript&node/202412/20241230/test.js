// calculateObj["frequency"] = sortList.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});


// const randomHundred = [...new Array(100)].map((_, i) => Math.floor(Math.random() * (100 + 1)));

// console.log(randomHundred);

// const sortedList = [...randomHundred].sort((a, b) => a-b);

// console.log(sortedList);

// const result = [];

// let key = undefined;

// for (let i=0; i<sortedList.length; i++) {
//     if (key === sortedList[i]) {
//         result[result.length - 1][1] += 1;
//     } else {
//         key = sortedList[i];
//         result.push( [key, 1] ); // [value, count]
//     }
// }

// console.log(result);

const rawData = [1,2,3,4,2,1,2,2,1,1,1];

const sortedList = rawData.sort( (a,b)=>{a-b} );

console.log( sortedList );
const result = [];
let key = undefined;
for( let i=0; i<sortedList.length; i++ ){
    if( key === sortedList[i] ){
        result[result.length -1][1] += 1;
    }else{
        key = sortedList[i];
        result.push( [key,1] );
    }
}
console.log( result );

