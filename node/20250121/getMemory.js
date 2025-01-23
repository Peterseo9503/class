//먼저 값부터 받아오자 
const os = require('os');

const fs = require('fs');

console.log(os.freemem());
console.log(os.totalmem());
const jsondata = {
    "freemem":os.freemem(),
    "totalmem":os.totalmem()
}

fs.writeFile('./data.json', JSON.stringify(jsondata,null,2), (err, data) => {
    if(err){
        throw err;
    }
    if(data){
        fs.readFile( './data.json',(err,data)=>{
            if(err){
                throw err;
            }
            console.log(data);
        } );
    }
})

// for (; ;) {
const settimeOut = setInterval(() => {
    console.log(os.freemem());
    console.log(os.totalmem());
}, 2000);

setTimeout();
// }

// const timerId = setTimeout(() => {
//     console.log("This will be canceled before it runs.");
// }, 5000);

// // 타이머 취소
// clearTimeout(timerId);
// console.log("Timer has been cleared.");
