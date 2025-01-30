
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const loginRouter = require('./login');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.route('/join').get((req, res) => {
    console.log(path.join(__dirname, '../public/html/join.html'));
    res.sendFile(path.join(__dirname, '../public/html/join.html'));
}).post((req, res) => {
    const json = {
        id: req.body.id,
        pw: req.body.pw
    }
    const regExp =/^(?=.*\d)[\w\W]{4,10}$/;

    if(!regExp.test(json.pw)){
        res.send(res.json({ "message": "유효한 패스워드를 입력해주세요(4~10자리 숫자1개이상 포함)" }));
        return null;
    }

    fs.writeFile(path.join(__dirname, "../json/user.json"), JSON.stringify(json), (err, data) => {
        if (err) { console.log(err) };
    });

    res.send(res.json({ "message": "complited" }));

})

module.exports = router;