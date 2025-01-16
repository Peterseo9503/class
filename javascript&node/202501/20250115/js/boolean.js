"use strict";
function booleanFomula(x, y, z) {
    return (x || ((!x) && y && z) || ((!y) && (!z))) ? 1 : 0;
}
const xyz = [
    [0, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 1]
];
xyz.forEach((array, i, a) => {
    const [xV, yV, zV] = [...array];
    console.log(`${a[i]} =${(booleanFomula(xV, yV, zV))}`);
});
// booleanFomula( ...xyz[0] );
console.log(booleanFomula(0, 0, 0));
