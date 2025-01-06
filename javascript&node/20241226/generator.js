

function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const test = generator();
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());


  

// function* simpleGenerator() {
//     yield 1;    // 첫 번째 값
//     yield 2;    // 두 번째 값
//     yield 3;    // 세 번째 값
//   }
  
//   const gen = simpleGenerator();
  
//   console.log(gen.next()); // { value: 1, done: false }
//   console.log(gen.next()); // { value: 2, done: false }
//   console.log(gen.next()); // { value: 3, done: false }
//   console.log(gen.next()); // { value: undefined, done: true }

// function* numberCounter(start, end) {
//     for (let i = start; i <= end; i++) {
//       yield i; // 현재 숫자를 반환하고 멈춤
//     }
//     return "Done!"; // 모든 숫자를 반환한 후 완료 메시지
//   }
  
//   const counter = numberCounter(1, 5); // 1부터 5까지 카운트
  
//   console.log(counter.next()); // { value: 1, done: false }
//   console.log(counter.next()); // { value: 2, done: false }
//   console.log(counter.next()); // { value: 3, done: false }
//   console.log(counter.next()); // { value: 4, done: false }
//   console.log(counter.next()); // { value: 5, done: false }
//   console.log(counter.next()); // { value: "Done!", done: true }


// function* objectIterator(obj) {
//     for (const key of Object.keys(obj)) {
//       yield [key, obj[key]]; // 키와 값을 배열로 반환
//     }
//   }

// const myObject = {
//     name: "Alice",
//     age: 25,
//     city: "New York",
//   };
  
//   const iterator = objectIterator(myObject);
  
//   for (const [key, value] of iterator) {
//     console.log(`${key}: ${value}`);
//   }

