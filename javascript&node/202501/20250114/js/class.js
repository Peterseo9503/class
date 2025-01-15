"use strict";
// class Person{
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     walk(): void{
//         console.log(`${this.name} is walking`);
//     }
// }
// const person: Person = new Person("Seo");
// person.walk();
class Person {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
class Seo extends Person {
    constructor(x, y, z) {
        super(x, y, z);
        console.log(this.x);
        console.log(this.y);
        // console.log( this.z );
    }
}
const seo = new Seo("x", "y", "z");
class Person2 {
    constructor(x) {
        this.x = x;
    }
}
const person = new Person2("x");
console.log(person.x);
class Test {
    constructor(x) {
        this.x = x;
    }
}
const test = new Test("test");
// test.x;
class Foo {
    constructor(MSG) {
        this.MAX_LEN = 5;
        this.MSG = "initial";
    }
    log() {
        // this.MAX_LEN= 10;
    }
}
class Foo3 {
    constructor() {
        Foo3.instanceCounter++;
    }
}
Foo3.instanceCounter = 0;
var foo1 = new Foo3();
var foo2 = new Foo3();
var foo3 = new Foo3();
console.log(Foo3.instanceCounter);
class Animal {
    move() {
        console.log('roaming the earth...');
    }
}
class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    makeSound() {
        console.log("Vow~~");
    }
}
const dog = new Dog("General");
dog.makeSound();
dog.name;
dog.move();
