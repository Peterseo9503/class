const express = require("express");

const app = express();

const path = require("path");

const indexRouter = require("./routes");
const userRouter = require("./routes/user");

app.use("/",indexRouter);
app.use( '/user',userRouter );

app.use( (req,res,next)=>{
    res.status(404).send("Not Found");
} );

app.listen( '3001',()=>{
    console.log( "3001번 오픈!!" );
} )
