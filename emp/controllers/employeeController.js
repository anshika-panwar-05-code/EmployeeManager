// const employee = require('../models/employee');
const Employee = require('../models/employee');



exports.CreateEmployee = async (req, res) => {
    try {
        const data = req.body;
        const employee = await Employee.create(data);
        res.status(201).json(employee);

    } catch (error) {
        res.status(400).json({ message: "user not created" })

    }
}

exports.deleteEmployee = async (req, res) => {
    try {

        const id = req.params.id;
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" })
        }
        res.status(200).json({ employee })

    } catch (error) {
        res.status(400).json({ message: "user not deleted" })

    }
}

exports.getEmployee = async (req, res) => {
    try {
        const get = req.query;
        const employee = await Employee.find(get);

        if (!employee) {
            return res.status(404).json({ message: " There is no Employee found" })
        }
        res.status(200).json(employee);

    } catch (error) {
        res.status(400).json({ message: "not able to get user" }, error.message);

    }

}

exports.getEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ message: " There is no Employee Found With This Id" })
        }
        res.status(200).json(employee);

    } catch (error) {
        res.status(400).json({ message: "user not found" })

    }
}


exports.updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const employee = await Employee.findByIdAndUpdate(id, update, { new: true, runValidators: true });
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(employee);

    } catch (error) {
        res.status(400).json({ message: "user not found" })

    }

}

exports.searchByName = async (req, res) => {
    try {
        const Keyword = req.query.name;
        const employee = await Employee.find({
            name: { $regex: Keyword, $options: "i" }
        });
        res.status(200).json(employee);

    } catch (error) {
        res.status(400).json({ message: "error in searching" });

    }
}
