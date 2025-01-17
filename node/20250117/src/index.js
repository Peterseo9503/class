const express = require("express");
const app = express();

app.locals.pretty = true;
app.set('view engine','pug');
app.set('views', './views');
app.use(express.static('public'));
app.get('/template', (req,res)=>{
    res.render('temp',{time:Date(), title:"Jade"});
});

app.get('/option',(req,res)=>{
    console.log("들어와?")
    res.send( req.query.select );
})

app.get("/",(req ,res)=>{
    res.send("Hello home page");
});
app.listen(3000,()=>{
    console.log("3000 port open!!")
});
// app.get("/",(req,res)=>{
//     res.send("test");
// })

// app.listen( 3000, ()=>{
//     console.log("3000 port open!!")
// } )

