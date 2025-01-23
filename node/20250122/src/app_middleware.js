const express = require("express");
const morgan = require("morgan"); // HTTP 요청 로깅을 위한 미들웨어
const cookieParser = require("cookie-parser"); // 요청의 쿠키를 쉽게 추출하기 위한 미들웨어
const session = require("express-session"); // 세션 관리 미들웨어
const dotenv = require('dotenv'); // 환경변수 관리 (env 파일에서 값 읽기)
const path = require('path'); // 경로 조작을 위한 Node.js 내장 모듈

dotenv.config(); // .env 파일의 환경변수를 process.env에 로드
const app = express();

app.set('port', process.env.PORT || 3000); // 서버 포트 설정 (환경변수 또는 기본값 3000)

// app.use('/', express.static(path.join(__dirname, 'public')));
app.use( '/', express.static( path.join( __dirname, 'public' ) ) ) 
// 정적 파일 제공 미들웨어 (예: HTML, CSS, JS 파일을 'public' 폴더에서 서빙)

app.use(express.json()); 
// JSON 형식의 요청 본문을 파싱해 req.body로 제공

app.use(express.urlencoded({ extended: false })); 
// URL-encoded 형식의 요청 본문을 파싱 (querystring 모듈 사용)

app.use(cookieParser(process.env.COOKIE_SECRET)); 
// 요청의 쿠키를 파싱해 req.cookies 객체로 제공, 서명된 쿠키는 req.signedCookies에 저장

app.use(session({
    resave: false, 
    // 세션에 변화가 없더라도 강제로 저장하지 않음 (성능 최적화)

    saveUninitialized: false, 
    // 초기화되지 않은 세션을 저장하지 않음 (빈 세션 저장 방지)

    secret: process.env.COOKIE_SECRET, 
    // 세션 쿠키를 암호화하는 키

    cookie: {
        httpOnly: true, 
        // 클라이언트에서 쿠키를 수정하지 못하도록 HTTP 전용으로 설정

        secure: false, 
        // HTTPS 환경에서만 쿠키를 전송하도록 설정 (개발 환경에서는 false로 설정)

    },
    name: 'sesson-cookie', 
    // 세션 쿠키의 이름 설정 (기본값: connect.sid)
}));
app.use( morgan('dev') )

app.get('/',(req,res)=>{
    res.sendFile( path.join(  __dirname, "index.html") )
})

app.use((req, res, next) => {
    console.log("모든 요청이 다 실행됩니다.");
    // 모든 요청에 대해 실행되는 미들웨어
    next(); // 다음 미들웨어로 제어 전달  j                                         j
});

app.listen();