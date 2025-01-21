class WebService {
    constructor(id) {
        this.id = id;
        this.eService = require("express");
        this.bodyParser = require("body-parser");
        this.webService = this.eService();
        this.router = this.eService.Router();
    }
    init() {
        this.webService.use(this.bodyParser.urlencoded({ extended: false }));
        this.webService.use(this.eService.static("assets"));
        this.webService.set('views','./views');
        this.webService.set('view engine','pug');
        require('dotenv').config();
        // console.log( process.env.PORT);
    }

    routes() {

        this.webService.get("/", (req, res) => {
            res.send(req.query.select);
            console.log( process.env.PORT);
        })

        this.webService.post('/login', (req, res) => {
            console.log(`${req.body.id} : ${req.body.pw}`);
            res.send( `${req.body.id} : ${req.body.pw}` )
        });

        this.webService.get("/images", (req, res) => {
            res.send(`<img src="donghyun.png">`);
        });

        this.webService.get("/template",(req,res)=>{
            res.render('template',{time:Date(), title:"Jade"})
        })

        this.webService.listen(process.PORT, () => {
            console.log("3001 port open!")
        });

       
    }
    controler(){
        this.init();
        this.routes();
    }
}

const webService = new WebService("webservice");
webService.controler();

// const eService = require("express");
// const bodyParser = require("body-parser");
// const webService = eService();
// webService.use(bodyParser.urlencoded({ extended: false }));
// webService.use(eService.static("assets"));

// webService.get("/", (req, res) => {
//     res.send(req.query.select);
// })

// webService.post('login', (req, res) => {
//     console.log(`${req.body.id} : ${req.body.pw}`);
// });

// webService.get("/images", (req, res) => {
//     res.send(`<img src="1.jpg">`);
// })

// webService.listen(3001, () => {
//     console.log("3000 port open!")
// })
