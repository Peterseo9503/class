let sum = 1;
for(let i=0; i<=4;i++){
    sum *= ( 10 - (2*i) );
}

console.log(sum)

let sum2 = 1;

for(let i=1; i<=4; i++){
    sum2 *= (i - i**2);
}

console.log(sum2);

//factorial

let factorialSum = 1;
for( let i =1; i<=13; i++ ){
    factorialSum *= i;
}

console.log( factorialSum );