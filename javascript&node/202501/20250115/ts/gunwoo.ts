interface Iboolmatrix {
    id: string;
    run(): void;
} 


class BoolMatrix implements Iboolmatrix {
    constructor( public id: string){

    }
    getData() {
        const boolData: Boolean[] = [false,true];
        for(let i=0; i<boolData.length; i++) {
            for(let j=0; j<boolData.length; j++){
                for(let k=0; k<boolData.length; k++){
                    const data = (boolData[i] || (!boolData[i] && boolData[j] && boolData[k] ) || (!boolData[j] && !boolData[k]));
                    console.log(boolData[i]? "1":"0",boolData[j]? "1":"0", boolData[k]? "1":"0", data? "1":"0");
                }
            }
        }
    }
    run() {
        this.getData();
    }
}

const bool = new BoolMatrix("bool");
bool.run();