"use strict";
function multiply1(x, y) {
    return x * y;
}
const multiply2 = (x, y) => x * y;
let isDone = false;
let n = null;
let u = undefined;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let color = "blue";
color = 'red';
let myName = 'Lee';
let greeting = "hello ~~";
const obj = {};
let list1 = [1, "ff", true];
let list2 = [1, 3, 4, 5, 6];
let list3 = [12, 3, 4];
let tuple;
tuple = ["hello", 1234];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c1 = Color.Red;
console.log(c1); // 1
let notSure = 4;
notSure = "maybe a string instead";
function warnUser() {
    console.log("Procedure ? ");
}
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
// TypeScript가 제공하는 타입은 모두 소문자이다!!!
let primitiveStr;
primitiveStr = new String("hello");
// 원시타입은 "소문자" 객체타입은 "대문자"!!
//Date type 
const today = new Date();
const elem = document.getElementById("test");
class Person {
}
;
const person = new Person();
//정적 타이핑 : 할당할 값의 타입에 따라 사전에 타입을 명시적을 선언하는것을 정적선언!
//동적 타입 : 변수의 타입선언없이 값이 할당되는 과정에서 동적으로 타입을 추론(Inference)한다는 의미
//타입 캐스팅 as, <>(제네릭 표기법?)
const $input = document.querySelector('input["type="text"]');
const val = $input.value;
const $input2 = document.querySelector(`input["type="text"]`);
const $input3 = document.querySelector('input["type="text"]');
// 차이점 요약:
// 첫 번째와 두 번째 코드는 반환 값을 강제로 HTMLInputElement로 취급합니다. 둘 다 런타임에서 에러가 발생할 가능성이 있습니다.
// 세 번째 코드는 타입을 명시적으로 선언하며, null 가능성을 안전하게 처리하도록 강제합니다.
class Person2 {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}
const person2 = new Person2("lee");
person2.walk();
