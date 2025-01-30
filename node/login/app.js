const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");

const joinRouter = require('./routes/join');
const loginRouter = require('./routes/login');
dotenv.config();
/*  /join  */
app.use('/',joinRouter);
/*  /login  */
app.use('/',loginRouter);

app.listen(process.env.PORT,()=>{
    console.log(`open ${process.env.PORT}`);
});