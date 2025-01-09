const testString = "abcdefu"
// console.log(JSON.parse(testString));

//값으로 키값을 알아내기 

// const ob = {"a":1 , "b":2, "c":3 , "d":4 , "e" : 3} ;

// console.log( Object.keys(ob).filter( v=>ob[v] == 3 ) )

//                 // Array.from({ length: likes }, () => '★').join('')
// console.log(new Array(5).map(()=> { return 'a'}));
// console.log( ...new Array(5).map(()=> '★').join(''))

// const likes = 5;
// const stars = new Array(likes).fill('★').join('');
// console.log(stars); // ★★★★★


// console.log(new Array(5).fill("*").join(''));
// console.log( "*".repeat(5) );
const test = [1,2,3,4,5];

console.log(Array.from( {length :  5} , ()=> test[length]).join("") );

console.log("*".repeat(5)); //number숫자만큼 찍힘