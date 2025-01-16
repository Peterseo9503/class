"use strict";
class TransposeMatrix {
    constructor(id) {
        this.id = id;
    }
    doTransposeMatrix(inputArray) {
        const resultArray = [];
        const firstLoopCount = inputArray[0].length; // inputArray의 열의 개수
        const secondLoopCount = inputArray.length; // inputArray의 행의 개수
        for (let i = 0; i < firstLoopCount; i++) {
            resultArray.push([]);
            for (let j = 0; j < secondLoopCount; j++) {
                resultArray[i].push(inputArray[j][i]);
            }
        }
        console.log(resultArray);
        return resultArray;
    }
    display(inputArea, resultArray) {
        let innerText = "";
        resultArray.forEach(array => {
            array.forEach(v => {
                innerText += `${v},`;
            });
            innerText += "<br>";
        });
        let element = document.getElementById(inputArea);
        element.innerHTML = innerText;
    }
    run(inputArea, inputArray) {
        this.display(inputArea, this.doTransposeMatrix(inputArray));
    }
}
const transposeM = new TransposeMatrix("t");
const inputArray = [
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16]
];
transposeM.run("maincontainer", inputArray);
