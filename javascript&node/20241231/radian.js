//Radian to Degree

let degreeV = 45;
let radian = 0;

radian = ( Math.PI / 180 ) * degreeV;

console.log(radian);

//cos47' + sin23 + tan77' + cos12

const cos47 = Math.cos(( Math.PI / 180 ) * 47);
const sin23 = Math.sin( 23 );
const tan77 = Math.tan( (Math.PI / 180) * 77 );
const cos12 = Math.cos( 12 );

console.log( `${cos47} + ${sin23} + ${tan77} + ${cos12} = ${cos47+sin23+tan77+cos12}`);


//radian to degree

console.log( ( (180/Math.PI) * cos47 ) )