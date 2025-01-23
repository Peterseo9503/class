const os = require('os');
const fs = require('fs');

// 2초마다 메모리 상태를 출력
const settimeOut = setInterval(() => {
    const jsondata = {
        freemem: os.freemem(),
        totalmem: os.totalmem()
    };
    fs.writeFile('./data.json', JSON.stringify(jsondata, null, 2), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data has been saved!");
        console.log( os.freemem());
        console.log( os.totalmem());
    }
);
    
}, 2000);

// 필요 시 타이머를 중단하는 코드 추가 가능
// setTimeout(() => {
//     clearInterval(settimeOut);
//     console.log("Stopped interval.");
// }, 10000); // 10초 후 중단