//일반적인 함수에서 반환값이 없을 경우 사용한다.

function warnUser(): void{
    console.log( "this is my warning message" );
}

//리턴값이 절때 반환되지 않아! never
function infiniteLoop(): never{
    while(true) {}
}




