const regExp: RegExp = /<[hH]1>.*<\/[hH]1>/

const testString: string = "<h1>test</h1> <h2>test2</h2>";

// console.log(testString.match(regExp));

const regExp2: RegExp = /<[hH][1-6].*?<\/[hH][1-6]>>/g;
// const regExp2: RegExp = /test/g;

const testString2: string = "<h1>test</h1> <h2>test2</h2>";
// [...testString2.matchAll(regExp2)].forEach(v => console.log(v));

const matches = [...testString2.matchAll(regExp2)];
matches.forEach(match => console.log(match));
// console.log("test")

const regExp3: RegExp = /<[hH]([1-6]).*?<\/[hH]\1>/g;
const testString3: string = "<h1>test</h2> <h1>test</h1>"; 

//1.      iterator = {
//     ~~~~
//     return next() {
//        ~~~
//         return {
//            value: ~~~,
//             done: boolean
//         }
        
//     }
// }