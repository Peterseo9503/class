const myZard = [
	"zard",
    {
    	name: {
        	fN: "zard",
            lN: "cdr",
        },
        address: {
        	location: {
            	location1: "tokyo", 
                location2: "ansan"
            }
        },
        song: [ "song1", "song2", "song3", "song4" ]
    }
]

const [,{name:{fN:myName}},[,{hoho:myhaha}]]= myZard;
document.write(myName +"<br>" + myhaha+"<br>");

// fN 안의 자드랑 맨 아래 후후의 D 를 동시에 뽑아바

const copyTest = [...myZard]

const [, {address:{location:{location1:[,,,,o]}}}] = myZard;

console.log(o);

//1. 인덱스1번 객체 복사 
const copyMyZard = JSON.parse( JSON.stringify( myZard[1] ) );

console.log(copyMyZard);
//2. 프로퍼티 키 이름이 name인 객체의 cdr의 키 값을 추출
console.log( Object.keys( copyMyZard.name ).find( key => copyMyZard.name[key] === 'cdr' ) );

//3. 프로퍼티 song의 배열값 앞에 /image/문자열을 붙이기 
console.log( copyMyZard.song.map( v => `/image/${v}` ) );

//4. 프로퍼티 song의 배열값 앞에 song1제외하고 출력
console.log( copyMyZard.song.filter( v => v!="song1" ) );
let test1 = 0;
// (1 == 2)&& test1 = 1; // 대입은 안되고 실행만되네 ... 
// 그럼 대입 할떄는 삼항연산자를 사용해야겠네. 
// && and연산자는 뭔가 실행할때 사용해야함. 
test1 = (1==2)? 1:undefined 

console.log(test1);

//배열도 Stringify가 먹을까?

const testArray = [1,2,3,4,5];
console.log( typeof JSON.stringify(testArray) );
console.log( typeof JSON.parse(JSON.stringify(testArray)) );

console.log( typeof JSON.parse(JSON.stringify(testArray)) );


