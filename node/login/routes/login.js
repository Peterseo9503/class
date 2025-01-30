const express = require("express");
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.use( express.json() );
router.use( express.urlencoded( { extended: false } ) );

router.route('/login/')
.get((req, res) => {
    res.sendFile(path.join( __dirname,'../public/html/login.html' ));
})
.post( (req,res)=>{
    fs.readFile( path.join( __dirname,"../json/user.json" ),(err,data)=>{
        // console.log( typeof data);
        const json = JSON.parse(data.toString());
        if( json.id === req.body.id && json.pw === req.body.pw ){
            res.json( { "message": "succeed" } );
            return
        }else{
            res.json({ "message":"아이디와 패스워드를 다시 확인해주세요" });
            return
        }
        // console.log(JSON.parse(data.toString()));
    } )
    console.log(req.body.id,req.body.pw);

    // res.send("로그인 확인 후 로그인실패 또는 로그인성공 화면");
} );

module.exports = router;