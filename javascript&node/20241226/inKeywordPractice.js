
const testObject = { name: "sdh", wife: "ljm" };

const valueToCheck = "sdh";
const exists = Object.values(testObject).includes(valueToCheck); 

console.log(exists); // true