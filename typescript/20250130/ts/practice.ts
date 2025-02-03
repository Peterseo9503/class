let foo: string = 'hello';
// let bar: number = true;

function calc(x: number, y: number): number {
    return x * y
}


let list1: any[] = [1, "two", true];
let list2: Array<number> = [1, 2, 3]

let tuple: [string, number];

enum Color1 { Red, Green, Blue };

let c1: Color1 = Color1.Green;


//열거형으로 코드를 더 직관적으로 만들 수 있다. 
enum HttpStatus {
    OK = 200,
    NotFount = 404,
    InteralSErverError = 500,
}

function handleResponse(status: HttpStatus) {
    switch (status) {
        case HttpStatus.OK:
            break;
        case HttpStatus.NotFount:
            break;

    }
}

const today: Date = new Date();
const elem: HTMLElement | null = document.getElementById('myId');

const $input = document.querySelector('input=["type="text"]') as HTMLInputElement;
const val = $input.value;

class Person {
    constructor(name: string) {

    }
}

const person: Person = new Person("Lee");

class Foo {

    public readonly MAX_FOO_SIZE: number = 5;

    public x: string;
    protected y: string;
    private z: string;

    constructor(x: string, y: string, z: string) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static staticMethod() {
        return "staticMethod"
    }
}

const foo2 = new Foo("x", "y", "z");
foo2.MAX_FOO_SIZE;

Foo.staticMethod();

abstract class Animal {
    //추상메소드 
    abstract makeSound(): void;

    move(): void {
        console.log('roaming the earth');
    }

}

class Dog extends Animal {
    makeSound(): void {
        console.log("bowwwww");
    }
}

interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}

// let todo: Todo;
// todo = { id:1234, content:"string2", completed: false };

interface SquareFunc {
    (num: number): number;
}

const squareFunc: SquareFunc = function (num: number) {
    return num * num;
}

interface UserInfo {
    username: string;
    age?: number;
}

type Str = "Lee";


// class Queue<T> {
//     protected data: Array<T> = [];
//     push(item: T) {
//         this.data.push(item);
//     }
//     pop(): T | undefined{
//         return this.data.shift();
//     }
// }

