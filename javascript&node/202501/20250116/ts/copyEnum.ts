
enum HttpStatus{
    OK= 200,
    NotFound= 404,
    InteralServerError=500,
}

function handleResponse( status: HttpStatus ){
    switch(status){
        case HttpStatus.OK:
            console.log("OK~");
            break;
        case HttpStatus.NotFound:
            console.log("요청한 리소스 찾을 수 없다");
            break;
        case HttpStatus.InteralServerError:
            console.log("서버 오류 발생");
            break;
        
    }
}

handleResponse(200);