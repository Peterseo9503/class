"use strict";
const boolData = [false, true];
for (let i = 0; i < boolData.length; i++) {
    for (let j = 0; j < boolData.length; j++) {
        for (let k = 0; k < boolData.length; k++) {
            console.log(boolData[i] ? "1" : "0", boolData[j] ? "1" : "0", boolData[k] ? "1" : "0");
        }
    }
}
