for( let second=1; second<=60;second++ ){
    console.log( `second : ${second} to degree = ` +  (360 +(90 - (second * 6))) % 360 );
}

const radian = (Math.PI / 180 * 90);
// console.log( Math.cos( radian ) );

// console.log( Math.cos( Math.PI / 180 * 0 ) );
// console.log( Math.cos( Math.PI / 180 * 270 ) );

console.log( Math.sin( Math.PI / 180 * 360 ) );



function fomula(degree){
    const mill = 6400/360;
    const value = 0 <= (1600 - (mill * degree)) ? 1600 : (6400 + 90*mill) 
    return value - (mill * degree);
}

for( let i =0; i<=360; i++ ){
    console.log(i +" : "+ fomula(i));
}
