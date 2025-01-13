import { Person } from './person';
class Student extends Person {
    study() {
        return `${this.name} is studying.`;
    }
    running() {
        return `${this.name} is running.`;
    }
}
const student = new Student('Lee');
console.log(student.sayHello());
console.log(student.study());
