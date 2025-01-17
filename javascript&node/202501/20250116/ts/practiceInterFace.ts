interface Todo {
    id: number;
    content: string;
    completed?: boolean;
}

let todo: Todo;
todo = { id: 123, content: "test" };

let todos: Todo[] = [];

function addTodo(todo: Todo) {
    todos = [...todos, todo]
}
addTodo({ id: 1234, content: "java" });
addTodo({ id: 1234, content: "java" });
addTodo({ id: 1234, content: "java" });

console.log(todos[1]);

interface SquareFunc {
    (num: number): number;
}

const squareFunc: SquareFunc = (num: number) => {
    return num * num;
}

interface XYValues {
    xyValues: [
        [boolean, boolean],
        [boolean, boolean]
    ]
}

class Karno implements XYValues{
    constructor(
        public xyValues: [
            [boolean,boolean],[boolean,boolean]
        ]
    ){}

}
const karno = new Karno(
    [
        [false,false],[false,false]
    ]
)



// class Person5 implements IPerson{
//     constructor(public name: string){}
//     sayHello(){
//         console.log(this.name + "hello");
//     }
// }

interface IPerson{
    name: string;
    age?: number;
}

interface Student extends IPerson{
    grade: number;
}

const student: Student = {
    name: "lee",
    age:20,
    grade:3
}

export={}