var mongoose = require("mongoose");
const employee = require('../models/employee');
var employeeController = {};

// Show list of employees.
employeeController.list = function(req, res) {
    Employee.find({}).exec(function (err, employees) {
    if (err) {
    console.log("Error:", err);
    }
    else {res.render("../views/employee/index", {employees: employees});
}
});
};


employeeController.create = function(req, res) {
    res.render("../views/employee/create");
    };
    employeeController.save = function(req, res) {
        var employee = new Employee(req.body);
        employee.save(function(err) {
        if(err) {
        console.log(err);
        res.render("../views/employee/create");
        } else {
        console.log("Successfully created an employee.");
        res.redirect("/employee/show/"+employee._id);
        }
        });
        };


module.exports = employeeController;