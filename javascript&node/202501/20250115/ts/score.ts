interface CalcData {
    calcData: {
        average: number,
        median: number,
        maximum: number,
        minimum: number,
        standardDeviation: number,
    }
}
class Score {
    private readonly DATAS = [12,3,4,5,6];
    constructor(
        public id: string
    ) { }
    requestData(): void {
        const url = "http://kkms4001.iptime.org:20120/score/1" 
        fetch(url) //GET 방식 요청청
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.data);
                this.display(this.calcData(data.data));
            })
            .catch((error) => console.log(error));
    }
    calcData(responseData: number[]): CalcData {
        //평균값 , 최대, 최소
        const average: number = responseData.reduce((sum, v) => sum + v, 0) / responseData.length;
        const maximum: number = Math.max(...responseData);
        const minimum: number = Math.min(...responseData);

        //분산 (변량-avg)제곱
        const variance: number = responseData.reduce((sum, v) => sum += Math.pow(v - average, 2), 0) / responseData.length;
        const standardDeviation: number = Math.sqrt(variance);

        //중앙값 구하기
        const sortedData: number[] = responseData.sort((a, b) => a - b);
        const dataLength: number = responseData.length;
        const median: number =
            (dataLength % 2 === 0) ?
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
        }
    }
    display(calcData: CalcData): void {
        for (const key in calcData.calcData) {
            const inputElem = document.querySelector(`input[id*="${key}"]`) as HTMLInputElement;
            inputElem.value = String(calcData.calcData[key as keyof typeof calcData.calcData]); // 타입 단언
        }
    }
    run(): void {
        this.requestData();
    }

}
const scroe = new Score("score");
scroe.run();