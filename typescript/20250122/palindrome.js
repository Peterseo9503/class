"use strict";
class Palindrome {
    constructor(id) {
        this.id = id;
        this.inputString = ""; // 초기값 설정
    }
    getInputString() {
        this.inputString = "abcdfe";
    }
    confirmPalindrome() {
        // 1. 원시적인 방법 배열 뒤집기
        let primitiveString = "";
        const stringLength = this.inputString.length; // 문자열 길이 가져오기
        for (let i = 0; i < stringLength; i++) {
            primitiveString = primitiveString + this.inputString[stringLength - i - 1]; // 뒤집기
        }
        console.log(this.inputString);
        console.log(primitiveString);
        // 2. 스텍써서 배열 뒤집기 
        class Stack {
            constructor(id) {
                this.id = id;
                this.data = [];
            }
            unshift(item) {
                this.data.unshift(item);
            }
            shift() {
                return this.data.shift();
            }
        }
        let stringStack = "";
        const stack = new Stack("stringStack");
        for (let i = 0; i < stringLength; i++) {
            stack.unshift(this.inputString[i]);
        }
        for (let i = 0; i < stringLength; i++) {
            stringStack += stack.shift();
        }
        if (this.inputString === stringStack) {
            console.log("palindrome!");
        }
        else {
            console.log("not a palindrome.");
        }
    }
    run() {
        this.getInputString();
        this.confirmPalindrome();
    }
}
const palindrome = new Palindrome("palindrome");
palindrome.run();
