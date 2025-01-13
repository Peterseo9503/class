// const regExp = /^\d{3}[\-\/ ]?\d{4}[\-\/ ]?\d{4}$/;
// const teachersREXP = /01[16790][\-\/ ]?[0-9]?[0-9]{3} /;

// //odd, even RegExp

// const oddRegExp = /^\d*[1,3,5,7,9]$/;
// const evenRegExp = /^\d*[2,4,6,8,0]$/;

// const phoneNumber = [
//   "01011112222",
//   "010-1111-2222",
//   "010/1111/2222",
//   "010 1111 2222",
// ];
// const testNumbers = [1, 2, 3, 4, 5, 6, 17, 18, 9, 1234, 5555];
// phoneNumber.forEach( v=>{
//     console.log(regExp.test(v));
// } )
// testNumbers.forEach((v) => {
//   console.log(oddRegExp.test(v));
// });
// console.log(
//   testNumbers.map((v) => {
//     return [v, oddRegExp.test(v) ? "odd" : "even"];
//   })
// );

// const testText = " ff ";
// testText.trim(); //비파괴함수 
// console.log(testText);


// * +  같은 메타문자는 탐욕적이므로 가능한 한 가장 큰 덩어리를 찾는다.
// 텍스트를 앞에서부터 찾는게 아니라, 텍스트 마지막에서 시작해 거꾸로 찾는다. 

//게으른 수량자로 만들라면, {n,}? 이런식으로 해주면 됨. 

// const lazyRegExp = /<[\w+]>.*?<\/[\w+]>/ //테그를 찾아오는 정규식
// const lazyRegExp = /<(\w+)>.*?<\/\1>/g; // 태그 이름이 일치하는 정규식

// const textHtml = `<html><head><title>32</title></head><body><a>34</a><b>556</b></body></html>`;

// const htmlTags = textHtml.match(lazyRegExp);
// console.log(htmlTags)
const lazyRegExp = /<(\w+)>.*?<\/\1>/g; // 태그 이름이 일치하는 정규식
const textHtml = `<html><head><title>32</title></head><body><a>34</a><b>556</b></body></html>`;

let match;
const htmlTags = []; // 결과를 담을 배열

while ((match = lazyRegExp.exec(textHtml)) !== null) {
  htmlTags.push(match[0]); // 매칭된 전체 태그를 배열에 추가
}

console.log(htmlTags);

//태그를 Parser할떄는 정규표현식보다는 html parser를 사용하자
//\b단어시작 단어끝\b


const boundaryRegExp = /\B-\B/g

const boundaryRegExp2 = /\b-\b/g

const regEx = /[\w]+/g;

const testText = "apperas on your color - coded pass-key";
console.log(testText.match( boundaryRegExp2 ));