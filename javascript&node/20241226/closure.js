function myFuntion() {
  let staticValue = 0;

  return function staticFunction() {
    staticValue++;
    console.log(staticValue);
  };
}

let myC = (function () {
  let myV = 1004;
  return function () {
    myV++;
    console.log(myV);
  };
})();

myC();
myC();
myC();
myC();


