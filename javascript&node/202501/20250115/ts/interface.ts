// interface Todo{
//     id: number;
//     content: string;
//     completed: boolean;
// }

// let todos: Todo[] = [];

// function addTodo(todo: Todo){
//     todos = [...todos, todo];
// }

// const newTodo: Todo = { id: 1, content: "typeScript",completed: false };
// addTodo(newTodo);
// console.log(todos);

interface Data{
    lineX1: number,
    lineY1: number,
    LineX2: number,
    LineY2: number
}

const data: Data = {
    LineX2:1,LineY2:2,lineX1:1,lineY1:3
};

let dataArray: Data[] = [];
dataArray = [...dataArray,data];



//함수 인터페이스 정의
interface SquareFunc{
    //매개변수,     리턴값
    (num: number): number;
}

const squareFunc: SquareFunc = function(num: number){
    return num * num;
}

console.log( squareFunc(10) );

interface MakeSound{
    (sound: string): void 
}

// function makeSound2(sound: string): MakeSound{
//     console.log();
// }

const makeSound: MakeSound = (sound: string)=>{
    return sound;
}

interface ITodo{
    id: number;
    content: string;
    completed: boolean;
}

class Todo implements ITodo{
    constructor(
        public id: number,
        public content: string,
        public completed: boolean
    ){
    }
}

const todo = new Todo( 1, "typeScript", false );
console.log(todo);

interface ICanvas{
    id: string,
    canvas: HTMLCanvasElement | null,
    inputArea: string
}

class Canvas implements ICanvas{
    constructor(
        public id: string,
        public canvas: HTMLCanvasElement | null,
        public inputArea: string
    ){}
}


interface IPerson{
    name: string,
    sayHello(): void
}

//class에는 implements를 사용해서 인터페이스를 가지고와야함함
class Person implements IPerson{ 
    constructor(
        public name: string,
    ){}
    sayHello(): void{
        console.log( `Hello ${this.name}` )
    }
}

function greeter( person: IPerson ): void{
    person.sayHello();
}

const me = new Person('Lee');
greeter(me);



//. 덕 타이핑 (Duck typing)
//주의해야 할 것은 인터페이스를 구현하였다는 것만이 타입 체크를 통과하는 유일한 방법은 아니다. 
//타입 체크에서 중요한 것은 값을 실제로 가지고 있는 것이다. 이해가 어려울 수 있으므로 예를 들어 설명한다.

interface IDuck{
    quack(): void;
}

class MallardDuck implements IDuck{
    quack(){
        console.log("Quack!");
    }
}

class RedDuck{
    quack(){
        console.log("Q~uack!!");
    }
}

function makeNoise( duck: IDuck ){
    duck.quack();
}

makeNoise( new MallardDuck() );
makeNoise( new RedDuck() );

interface IPerson2{
    name: string;
}

function sayHello2(person: IPerson2): void{
    console.log( `Hello ${person.name}` );
}

const me2 = { name:"Seo", age:"31", };
sayHello2( me2 );

interface UserInfo{
    username: string;
    password: string;
    age?: number;
    address?: string;
}

const userInfo: UserInfo = {
    username: "seo",
    password: "1234"
}

console.log(userInfo);

interface Person3{
    name: string;
    age?: number;
}

interface Student extends Person3{
    grade: number;
}

const student: Student = {
    name: "Lee",
    age: 20,
    grade: 3
}

interface Developer{
    skills: string[];
}

interface WebDeveloper extends Person3, Developer {};

const WebDeveloper: WebDeveloper = {
    name:"seo",
    age: 20,
    skills: ['HTML','JS','css','Sass','Pug','react','Python','Django','TypeScript','Docker','wsl','Aws','linux','express','node',]
}


export{} // 모듈인척하기 