"use strict";
class Foo {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const foo = new Foo("x", "y", "z");
console.log(foo.x);
class Bar extends Foo {
    constructor(x, y, z) {
        super(x, y, z);
        console.log(this.x);
        console.log(this.y);
    }
}
//생성자 파라미터에 접근 제한자 선언
//접근 제한자는 생성자 파라미터에도 선언 할 수 있다. 이때 접근 제한자가 사용된
//생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언되고 생성자 내부에서 별도의 초기화가 없어도
//암묵적으로 초기화가 수행된다.
class Foo2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //초기화 해주지 않아도 자동으로 초기화 해줌
    }
}
const foo2 = new Foo2("hello", "test");
console.log(foo2.x);
//만일 생성자 파라미터에 접근 제한자를 선언하지 않으면 생성자 파라미터는 생성자 내부에서만
//유효한 지역 변수가 되어 생성자 외부에서 참조가 불가능하게 된다.
/* ReadOnly Keyword */
//readonly까 선언된 클래스 프로퍼티는 선언 시 또는 생성자 내부에서만 값을 할당 할 수 있다.
//상수의 선언에 사용한다. 
class Foo3 {
    constructor() {
        this.MAX_LEN = 5;
        this.MSG = "hello"; // 생성자 내부에서만 선언가능하다.
    }
    log() {
        console.log(`max_len : ${this.MAX_LEN}`);
        console.log(`msg : ${this.MSG}`);
    }
}
class Foo4 {
    constructor() {
    }
    static staticMethod() {
        /*
        정적 메소드는 this를 사용할 수 없다.
        정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다.
        */
        return 'staticMethod';
    }
}
console.log(Foo4.staticMethod());
//   class Foo5{
//     static instanceCounter = 0;
//     constructor(){
//         Foo.instanceCounter++;
//     }
//   }
class Animal {
    move() {
        console.log('roaming the earth');
    }
}
class Dog extends Animal {
    makeSound() {
        console.log('bowwow~~');
    }
}
const myDog = new Dog();
myDog.makeSound();
myDog.move();
