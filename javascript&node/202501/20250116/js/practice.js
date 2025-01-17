"use strict";
let tuple;
tuple = ["hello", 10];
// const elem: HTMLElement | null = document.getElementById("myId");
class Person {
}
;
const person = new Person();
// Type Inference
let foo;
foo = "test";
foo = 1234;
//타입 캐스팅
//기존의 타입에서 다른 타입으로 타입 캐스팅 하려면 as키워드를
//사용하거나 <>연산자를 사용 할 수 있다.
// const $input = document.querySelector('input["type=text"]');
// // const val = $input.value;
// //HTMLInputElement는 HTMLElement를 확장한 더 구체적인 타입
// const $input2 = document.querySelector('input["type="text"]') as HTMLInputElement;
// const val = $input2.value;
// const $input3 = <HTMLInputElement>document.querySelector('input["type="text"]');
// const val3 = $input2.value;
// class Person3 {
//     constructor(public name: string) {
//     }
// }
//Access Modifier
class Foo {
    constructor(msg) {
        this.MAX_LEN = 5;
        this.MSG = msg;
    }
}
const foo2 = new Foo("test1");
const foo3 = new Foo("test2");
console.log(foo2.MSG);
console.log(foo3.MSG);
class FooS {
    constructor() {
        FooS.instanceCounter++;
    }
}
FooS.instanceCounter = 0;
const fooS1 = new FooS();
const fooS2 = new FooS();
console.log(FooS.instanceCounter);
class Animal {
    move() {
        console.log("roaming the earth");
    }
}
class Dog extends Animal {
    makeSound() {
    }
}
