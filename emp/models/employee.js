const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, 
    position: {
        type: String,
        enum: ['Manager', 'Employee', 'HR', 'Intern'],
        required: true                                     
    },
    salary: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
