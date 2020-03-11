const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    name: String,
    address: String,
    position: String,
    salary: Number,
    updated_at: {
         type: Date,
          default: Date.now
         },
});

module.exports = mongoose.model('Employees', EmployeeSchema);