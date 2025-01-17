const express2 = require('express');
const app = express2();

app.get('/',(req,res)=>{
    res.send("Hello World!");
});

app.listen(3000,()=>{
    console.log( "Port 3000 Open!! " );
});