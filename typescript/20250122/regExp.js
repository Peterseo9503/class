"use strict";
// const targetStr: string = 'This is a pen.';
var _a;
// const regexr: RegExp = /is/ig;
// console.log( regexr.exec( targetStr ) );
// console.log( regexr.test( targetStr ) );
// console.log( targetStr.match(regexr) );
// console.log( targetStr.replace(regexr, "IS") );
// console.log(targetStr.search(regexr));
// console.log(targetStr.split(regexr));
const targetString = `this is a Is
fsdfsa
fdsafads
is&nbsp;&\n
is`;
const regexr = /is/g;
console.log((_a = targetString.match(regexr)) === null || _a === void 0 ? void 0 : _a.length);
