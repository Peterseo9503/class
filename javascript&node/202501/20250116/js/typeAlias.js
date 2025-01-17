"use strict";
const person = {};
person.name = "SEO";
person.age = 20;
console.log(person);
const person2 = {};
person2.name = "SEO";
person2.age = 20;
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Pink"] = 3] = "Pink";
})(Colors || (Colors = {}));
;
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
class NumberQueue extends Queue {
    push(item) {
        super.push(item);
    }
    pop() {
        return super.pop();
    }
}
const queue = new NumberQueue();
queue.push(0);
queue.push(-"1");
// queue.push(0);
// queue.push('1');
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());
var HttpEvents;
(function (HttpEvents) {
})(HttpEvents || (HttpEvents = {}));
//타입 엘리어스와 인터페이스의 차이점은 인터페이스는 객체형태로만 값을 지정 할 수 있고,
//타입 엘리어스는 튜플이나 이넘 그리고 특정값을 지정해주는 리터럴 기능을 사용 할 수 있음. 
console.log(1.52.toFixed(-1));
console.log(1.55.toFixed(1));
console.log(1.45.toFixed(1));
module.exports = {};
