//1. Object인지 판별하는거
//2. 배열인지 판별하는거

const myA = {
    zard: 10,
    cdr: 'zard the love',
    love: [1000,1001,1002,1003,1004],
    forever:{
        aaa: "LINE",
        bbb: "COMPUTER",
        ccc: "ART",
        ddd: "ACADEMY"
    }
}


const isObject = (value)=>{
    if(typeof value === 'object'){
        if( Array.isArray(value) ){ return 'array' }else{ return 'object' }
    }else{
        return 'primitive'
    }
}

const travling = (object) => {
    const result = isObject(object);
    // console.log(result);

    if( result === 'primitive' ){
        console.log(object)
    }else if(result === "array"){
        object.forEach( v=>{
            travling(v);
        } )
    }else if(result === "object"){
        for(let key in object){
            travling(object[key]);
        }
    }
}

// for(let key in myA){
//     console.log(typeof myA[key] );
// }

travling(myA);