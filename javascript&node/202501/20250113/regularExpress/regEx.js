const regEx = /^\s*<\?xml.*\?>/

const exTest = '<?xml version=""?>';
 console.log(exTest.match(regEx));


//주석찾기
const regEx2 = /\s*\/\/.*$/
const testText2 = `//test12 fwew 
// 
// 
// `

console.log(testText2.match(regEx2));

// (?m) 다중행 // 