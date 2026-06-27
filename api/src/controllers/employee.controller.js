const db = require("../models");
const Employee = db.employee;

// Create and Save a new Employee
exports.create = async(req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  let employeeEmailData = [];
  let employeePhoneData = [];

  const { email, phone } = req.body;

  const employeeEmailExists = await Promise.all([
    await Employee.findOne({email: email, company_id: req.body.company_id})
  ]);

  const employeePhoneExists = await Promise.all([
    await Employee.findOne({phone: phone, company_id: req.body.company_id})
  ]);

  for (const resp of employeeEmailExists) {
    resp && employeeEmailData.push(resp);
  }

  for (const resp of employeePhoneExists) {
    resp && employeePhoneData.push(resp);
  }

  if (employeePhoneData.length > 0 || employeeEmailData.length > 0){ 
    res.status(200).send({status: 404, message: "Email or phone already exists" });
    return;
  }
  
  // Create a Employee
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    company_id: req.body.company_id,
    role: req.body.role,
    gender: req.body.gender,
    salary: req.body.salary,
    line_manager: req.body.line_manager,
    department: req.body.department,
    office: req.body.office,
    country_of_employment: req.body.country_of_employment,
    currency: req.body.currency,
    salary_frequency: req.body.salary_frequency,
    start_date: req.body.start_date,
    salary_start_date: req.body.salary_start_date,
    profile_picture: req.body.profile_picture,
    dob: req.body.dob,
    employment_type: req.body.employment_type,
    country: req.body.country,
    bank_name: req.body.bank_name,
    bank_account_number: req.body.bank_account_number,
    bank_account_name: req.body.bank_account_name,
    bank_code: req.body.bank_code,
    company_admin: req.body.company_admin,
    status: req.body.status,
  });

  // Save Employee in the database
  employee
    .save(employee)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    Employee.find({ company_id: req.params.company_id })
    .then(data => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving employees."
        });
    });
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Employee.findOne({ _id: id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Employee with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Employee with id=" + id });
    });
};

// Update a Employee by the id in the request
exports.update = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
  const { id: updateId, ...updateData } = req.body;

  Employee.findByIdAndUpdate(id, { $set: updateData }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        console.log('data missing');
        res.status(404).send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found!`
        });
        console.log('data sent');
      } else {
        res.status(200).send({ message: "Employee was updated successfully." });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });

};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Employee.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
        });
      } else {
        res.status(200).send({
          message: "Employee was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Employee.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount}  were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ."
      });
    });
};

// count all Employees from the database.
exports.count = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Employee.countDocuments({ company_id: req.params.company_id })
  .then(data => {
    res.status(200).json({ totalEmployees: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}