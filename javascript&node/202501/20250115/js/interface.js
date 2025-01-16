"use strict";
// interface Todo{
//     id: number;
//     content: string;
//     completed: boolean;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    LineX2: 1, LineY2: 2, lineX1: 1, lineY1: 3
};
let dataArray = [];
dataArray = [...dataArray, data];
const squareFunc = function (num) {
    return num * num;
};
console.log(squareFunc(10));
// function makeSound2(sound: string): MakeSound{
//     console.log();
// }
const makeSound = (sound) => {
    return sound;
};
class Todo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const todo = new Todo(1, "typeScript", false);
console.log(todo);
class Canvas {
    constructor(id, canvas, inputArea) {
        this.id = id;
        this.canvas = canvas;
        this.inputArea = inputArea;
    }
}
//class에는 implements를 사용해서 인터페이스를 가지고와야함함
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
function greeter(person) {
    person.sayHello();
}
const me = new Person('Lee');
greeter(me);
class MallardDuck {
    quack() {
        console.log("Quack!");
    }
}
class RedDuck {
    quack() {
        console.log("Q~uack!!");
    }
}
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallardDuck());
makeNoise(new RedDuck());
function sayHello2(person) {
    console.log(`Hello ${person.name}`);
}
const me2 = { name: "Seo", age: "31", };
sayHello2(me2);
const userInfo = {
    username: "seo",
    password: "1234"
};
console.log(userInfo);
const student = {
    name: "Lee",
    age: 20,
    grade: 3
};
;
const WebDeveloper = {
    name: "seo",
    age: 20,
    skills: ['HTML', 'JS', 'css', 'Sass', 'Pug', 'react', 'Python', 'Django', 'TypeScript', 'Docker', 'wsl', 'Aws', 'linux', 'express', 'node',]
};
