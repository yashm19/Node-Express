var express = require("express");
var Employees =  require("../Controllers/Employee");
var router = express.Router();

router.get("/Employees",Employees.getAll);
console.log("express");

module.exports =  router