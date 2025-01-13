//함수 선언식
function multiply1(x: number, y: number): number{
    return x * y;
}

//함수 표현식
const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10,2));
console.log(multiply1(10,3));

const testObject: number[] = [1,2,3,4];
// console.log(multiply1(true,2));