var express = require('express');
var router = express.Router();
var employee = require("../controller/employeeController.js");

// Get all employees
router.get('/', employee.list);

// Create employee
router.post('/create', employee.create);

// Save employee
router.post('/save', employee.save);

module.exports= router;