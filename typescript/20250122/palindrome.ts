class Palindrome {
    public inputString: string; // 문자열 타입으로 명시

    constructor(public id: string) {
        this.inputString = ""; // 초기값 설정
    }

    getInputString(): void {
        this.inputString = "abcdfe";
    }

    confirmPalindrome(): void {
        // 1. 원시적인 방법 배열 뒤집기
        let primitiveString: string = "";
        const stringLength: number = this.inputString.length; // 문자열 길이 가져오기

        for (let i = 0; i < stringLength; i++) {
            primitiveString = primitiveString + this.inputString[stringLength - i - 1]  // 뒤집기
        }
        console.log(this.inputString);
        console.log(primitiveString);

        // 2. 스텍써서 배열 뒤집기 
        class Stack<T> {
            public data: Array<T> = [];
            constructor(public id: string) { }
            unshift(item: T) {
                this.data.unshift(item);
            }
            shift() {
                return this.data.shift();
            }
        }
        let stringStack = "";
        const stack = new Stack<string>("stringStack");

        for(let i =0; i<stringLength;i++){
            stack.unshift( this.inputString[i] );
        }
        for(let i=0; i<stringLength;i++){
            stringStack += stack.shift();
        }



        if (this.inputString === stringStack) {
            console.log("palindrome!");
        } else {
            console.log("not a palindrome.");
        }
    }

    run(): void {
        this.getInputString();
        this.confirmPalindrome();
    }
}

const palindrome = new Palindrome("palindrome");
palindrome.run();