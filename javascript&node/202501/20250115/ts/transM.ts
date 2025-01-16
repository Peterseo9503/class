class TransposeMatrix{
    constructor(
        public id: string,
    ){}
    doTransposeMatrix(inputArray: number[][]): number[][]{ //2차원 배열의 정적지정 하는 방법 
        const resultArray: number[][] = [];
        const firstLoopCount = inputArray[0].length; // inputArray의 열의 개수
        const secondLoopCount = inputArray.length; // inputArray의 행의 개수
        for(let i=0; i<firstLoopCount; i++){
            resultArray.push([]);
            for(let j=0; j<secondLoopCount; j++){
                resultArray[i].push(inputArray[j][i]);
            }
        }
        console.log(resultArray);
        return resultArray;
    }
    display(inputArea:string ,resultArray: number[][]): void{
        let innerText: string = ""
        resultArray.forEach(array=>{
            array.forEach(v=>{
                innerText += `${v},`;
            }); 
            innerText+="<br>"
        });
        let element = document.getElementById(inputArea) as HTMLElement;
        element.innerHTML = innerText;
    }
    run(inputArea: string, inputArray: number[][]): void{
        this.display(inputArea,this.doTransposeMatrix(inputArray));
    }
}
const transposeM = new TransposeMatrix("t");
const inputArray = [
    [5,6,7],
    [8,9,10],
    [11,12,13],
    [14,15,16]
]
transposeM.run("maincontainer", inputArray );