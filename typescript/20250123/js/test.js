"use strict";
class Buffer {
    constructor(id) {
        this.id = id;
        this.storage = [];
    }
    push(item) {
        this.storage.push(item);
    }
    shift() { return this.storage.shift(); }
    setValue(selector, item) {
        for (let i = 0; i < this.storage.length; i++) {
            // if( this.storage[i].id === selector){
            // this.storage[i].value = item;
            // }
        }
    }
    getValue() { }
}
const myLinkedValue = ["zard", "cdr", "love"];
const myBuffer = new Buffer("myBuffer");
myLinkedValue.forEach((v, i, a) => {
    let tempList = new LinkedList(v);
    tempList.value = v;
    myBuffer.push(tempList);
});
class LinkedList {
    // public id: string;
    constructor(id) {
        this.id = id;
        this.value = null;
        this.next = null;
    }
}
