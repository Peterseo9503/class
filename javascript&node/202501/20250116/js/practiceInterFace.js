"use strict";
let todo;
todo = { id: 123, content: "test" };
let todos = [];
function addTodo(todo) {
    todos = [...todos, todo];
}
addTodo({ id: 1234, content: "java" });
addTodo({ id: 1234, content: "java" });
addTodo({ id: 1234, content: "java" });
console.log(todos[1]);
const squareFunc = (num) => {
    return num * num;
};
class Karno {
    constructor(xyValues) {
        this.xyValues = xyValues;
    }
}
const karno = new Karno([
    [false, false], [false, false]
]);
const student = {
    name: "lee",
    age: 20,
    grade: 3
};
module.exports = {};
