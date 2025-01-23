// const os =require("os");
// const fs = require("fs");

// const settimeOut = setInterval( ()=>{
//     const jsondata = {
//         freemem: os.freemem(),
//         totalmem: os.totalmem()
//     }
//     fs.writeFile( './mem-state-app/public/json/data.json',JSON.stringify( jsondata ,null,2),(err)=>{
//         if(err){
//             throw err;
//         }
//         console.log("JSON data has been saved");
//     } )
// } ,2000);

// setTimeout( ()=>{
//     clearInterval(settimeOut)
// } ,100000);

const os = require("os");
const fs = require("fs");
const path = require("path");
const interval = () => {
    console.log(os.freemem(), os.totalmem());
    setTimeout(interval, 2000);
    const json = {
        freemem: os.freemem(),
        totalmem: os.totalmem()
    }
    fs.writeFile(path.join(__dirname, "mem-state-app/public/data.json"), JSON.stringify(json), (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log("file successed!")
    })
}

interval();