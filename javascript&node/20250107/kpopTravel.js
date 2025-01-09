const kpopPopularListJson = {
    list : [
        {"singer" : "Stray Kids", "title": "Walkin On Water"},
        {"singer" : "ROSÉ, Bruno Mars", "title": "APT."},
        {"singer" : "aespa", "title": "Whiplash"},
        {"singer" : "Hwang Garam", "title": "I'm Firefly"},
        {"singer" : "ROSÉ", "title": "toxic till the end"},
    ],
}

class KpopList {
    constructor(id){
        this.id = id;
    }

    getData(){
        return kpopPopularListJson;
    }
    travelData(json){
        
        const checkType = (data)=>{
            if(typeof data === 'object'){
                if(Array.isArray(data)){
                    arrayLoop(data); 
                }else{
                    objLoop(data);
                }
            }else{
                console.log( data )
            }
        }

        const arrayLoop = (array)=>{
            array.forEach(v=>{
                checkType(v);
            })
        }

        const objLoop = (obj)=>{
            for(let key in obj){
                checkType( obj[key] )
            }
        }

        checkType(json);

    }

    run(){
        this.travelData(this.getData());
    }

}

const kpopList = new KpopList("gaypopList");
kpopList.run();