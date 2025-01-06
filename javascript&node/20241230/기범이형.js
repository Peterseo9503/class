const iterator = sortedStorage[Symbol.iterator]();
let iteratorElement = iterator.next();
console.log(iteratorElement);
let modeArr = [[]];

while (!iteratorElement.done) {
  if (modeArr[0][0] != undefined) {
    if (modeArr[modeArr.length - 1][0] == iteratorElement.value) {
      modeArr[modeArr.length - 1][1] += 1;
    } else {
      modeArr.push([iteratorElement.value, 1]);
    }
    iteratorElement = iterator.next();
  } else {
    modeArr[0] = [iteratorElement.value, 0];
  }
}
console.log(modeArr);
let maxIndex = 0;
this.mode = [];
modeArr.forEach((v) => {
  if (v[1] > maxIndex) {
    maxIndex = v[1];
  }
});
console.log(maxIndex);
modeArr.forEach((v) => {
  if (v[1] == maxIndex) {
    this.mode.push(v[0]);
  }
});
console.log(this.mode);
