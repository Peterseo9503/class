"use strict";
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["InteralServerError"] = 500] = "InteralServerError";
})(HttpStatus || (HttpStatus = {}));
function handleResponse(status) {
    switch (status) {
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
