"use strict";
let foo = 'hello';
// let bar: number = true;
function calc(x, y) {
    return x * y;
}
let list1 = [1, "two", true];
let list2 = [1, 2, 3];
let tuple;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
let c1 = Color1.Green;
//열거형으로 코드를 더 직관적으로 만들 수 있다. 
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NotFount"] = 404] = "NotFount";
    HttpStatus[HttpStatus["InteralSErverError"] = 500] = "InteralSErverError";
})(HttpStatus || (HttpStatus = {}));
function handleResponse(status) {
    switch (status) {
        case HttpStatus.OK:
            break;
        case HttpStatus.NotFount:
            break;
    }
}
const today = new Date();
const elem = document.getElementById('myId');
const $input = document.querySelector('input=["type="text"]');
const val = $input.value;
class Person {
    constructor(name) {
    }
}
const person = new Person("Lee");
class Foo {
    constructor(x, y, z) {
        this.MAX_FOO_SIZE = 5;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static staticMethod() {
        return "staticMethod";
    }
}
const foo2 = new Foo("x", "y", "z");
foo2.MAX_FOO_SIZE;
Foo.staticMethod();
class Animal {
    move() {
        console.log('roaming the earth');
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("bowwwww");
    }
}
const squareFunc = function (num) {
    return num * num;
};
// class Queue<T> {
//     protected data: Array<T> = [];
//     push(item: T) {
//         this.data.push(item);
//     }
//     pop(): T | undefined{
//         return this.data.shift();
//     }
// }
