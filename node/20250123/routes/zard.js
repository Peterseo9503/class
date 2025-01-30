const express = require("express");

const router = express.Router();

router.route( '/zard' )
.get((req,res)=>{
    res.send("CDR");
})
.post( (req,res)=>{
    res.send("LOVE");
} );

module.exports = router;