const express = require("express");

const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("test");
});

app.get('/dynamic', (req, res) => {
    let list = '';
    for (let i = 0; i < 5; i++) {
        list = list + `<li>Beautiful Coding</li>`
    }
    let time = Date();
    const outPut = `
    <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
          ${list}
        </ul>
        ${time}
    </body>
  </html>`;
    res.send(outPut);
});

app.get('/imaegs',(req,res)=>{
    res.send( 'my Image , <img src="/donghyun.png">');
})

app.listen(3100, () => {
    console.log("port3100open!")
})