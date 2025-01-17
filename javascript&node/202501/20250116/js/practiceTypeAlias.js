"use strict";
const person3 = {};
const person2 = {};
const myName = "Lee";
class GQueue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
        ;
    }
    pop() {
        return this.data.shift();
    }
}
const NumberQu = new GQueue();
