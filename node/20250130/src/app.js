const config = require("./config/config");
const loginApp = require("./modules/expressObj");
const visitPath = require("./modules/expressRouter");
const bodyParser = require("body-parser");

const routeHome = require("./pathInfo/routeHome");
const routeJoin = require("./src/pathInfo/routeJoin");
const createUser = require("./src/pathInfo/routeCreateUser");
const routeLogin = require("./src/pathInfo/routeLogin");


loginApp.use( bodyParser.json() );
loginApp.use( bodyParser.urlencoded( { extended: true } ));

