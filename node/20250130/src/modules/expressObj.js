class ExpressObj{
    consturctor(){
        this.express = require("express");
    }
    createExp(){
        return this.express();
    }
}
const expressObj = new ExpressObj();

module.exports = expressObj.createExp();