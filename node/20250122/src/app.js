const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();

app.use( express.json() );
app.use( express.urlencoded({extended: true}) );

dotenv.config();

app.set( "PORT", process.env.PORT || 3001 );
console.log(process.env.PORT);
console.log("test");

app.use( express.static( path.join(__dirname,"../public" ) ) );

app.get( "/", (req,res)=>{
    res.sendFile( path.join( __dirname,"index.html" ) )
} );

app.listen( app.get("PORT"),()=>{
    console.log(app.get("PORT") + "OPEN!! ");
} )

