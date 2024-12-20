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

console.log( Array.isArray(myA) );