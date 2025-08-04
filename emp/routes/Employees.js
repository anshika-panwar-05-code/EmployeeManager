
const express = require('express');
const { CreateEmployee, deleteEmployee, getEmployee ,getEmployeeById,updateEmployee,searchByName} = require("../controllers/employeeController");

const router = express.Router();


router.post('/employees',CreateEmployee)
router.get('/employees/search', searchByName);
router.delete('/employees/:id',deleteEmployee);
router.get('/employees',getEmployee);
router.get('/employees/:id',getEmployeeById);
router.put('/employees/:id',updateEmployee);




module.exports = router;
