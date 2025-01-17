"use strict";
class Score {
    constructor(id) {
        this.id = id;
        this.DATAS = [12, 3, 4, 5, 6];
    }
    requestData() {
        const url = "http://kkms4001.iptime.org:20120/score/1";
        fetch(url) //GET 방식 요청청
            .then((response) => response.json())
            .then((data) => {
            // console.log(data.data);
            this.display(this.calcData(data.data));
        })
            .catch((error) => console.log(error));
    }
    calcData(responseData) {
        //평균값 , 최대, 최소
        const average = responseData.reduce((sum, v) => sum + v, 0) / responseData.length;
        const maximum = Math.max(...responseData);
        const minimum = Math.min(...responseData);
        //분산 (변량-avg)제곱
        const variance = responseData.reduce((sum, v) => sum += Math.pow(v - average, 2), 0) / responseData.length;
        const standardDeviation = Math.sqrt(variance);
        //중앙값 구하기
        const sortedData = responseData.sort((a, b) => a - b);
        const dataLength = responseData.length;
        const median = (dataLength % 2 === 0) ?
            (sortedData[dataLength / 2 - 1] + sortedData[dataLength / 2]) / 2 :
            (sortedData[Math.floor(dataLength / 2)]);
        return {
            calcData: {
                average: average,
                median: median,
                maximum: maximum,
                minimum: minimum,
                standardDeviation: standardDeviation
            },
        };
    }
    display(calcData) {
        for (const key in calcData.calcData) {
            const inputElem = document.querySelector(`input[id*="${key}"]`);
            inputElem.value = String(calcData.calcData[key]); // 타입 단언
        }
    }
    run() {
        this.requestData();
    }
}
const scroe = new Score("score");
scroe.run();
