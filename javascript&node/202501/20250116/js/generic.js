"use strict";
var _a, _b, _c, _d, _e;
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const numberQueue = new Queue();
numberQueue.push(0);
numberQueue.push(+"1");
console.log((_a = numberQueue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed());
console.log((_b = numberQueue.pop()) === null || _b === void 0 ? void 0 : _b.toFixed());
// console.log( numberQueue.pop()?.toFixed() );
const stringQueue = new Queue();
stringQueue.push("Hello");
stringQueue.push("World");
console.log((_c = stringQueue.pop()) === null || _c === void 0 ? void 0 : _c.toUpperCase());
console.log((_d = stringQueue.pop()) === null || _d === void 0 ? void 0 : _d.toUpperCase());
console.log((_e = stringQueue.pop()) === null || _e === void 0 ? void 0 : _e.toUpperCase());
const myQueue = new Queue();
myQueue.push({ name: 'Lee', age: 10 });
myQueue.push({ name: 'See', age: 20 });
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
function reverse(items) {
    return items.reverse();
}
const arg = [{ name: 'Lee' }, {}];
