const { FLW_SECRET_KEY } = require("../../config/rave");
const db = require("../models");
const { bulkTransfer } = require("./flutterwave.controller");
const Payroll = db.payroll;
const axios = require('axios');
const { cleanStringify } = require("../helpers/cleanString");

// Create and Save a new Payroll
exports.create = async (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const month = new Date().toLocaleString('default', { month: 'long' });

  const year = new Date().getFullYear();

  const payrollExists = await Payroll.findOne({ company_id: req.body.company_id, month: month, year: year });

  if (payrollExists){ 
    res.status(200).send({status: 404, message: "Payroll has already been created." });
    return;
  }

  const employees = req.body.employees;

  const employeeData = await Promise.all(employees.map(async (employee) => {
    const employeeData = await db.employee.findOne({ _id: employee.id });
    return employeeData;
  }));

  const company = await db.company.findOne({ _id: req.body.company_id });
  const payrollData = employeeData.map((employee) => {
    return {
      bank_code: employee.bank_code,
      account_number: employee.bank_account_number,
      amount: employee.salary,
      narration: `${employee.name} Salary for ${month} ${year}|| IRUN`,
      currency: 'NGN',
      reference: ``,
      // debit_subaccount: req.body.payout_account_ref,
      meta: {
        "name": employee.name,
        "employee_id": employee.id,
        "department": employee.department,
        "email": employee.email,
        "mobile_number": employee.phone,
        "recipient_address": employee.address,
        "company_name": company.name,
        "company_email": company.email,
        "company_phone": company.phone,
        "month": month,
        "sender": company.name,
        "year": year,
      },
      initiated_by: company.name,

    }
  });


  const sendData = await bulkTransfer(
    {
      "title": `Salary for ${month} ${year}`,
      "bulk_data": payrollData,
    });

    console.log('sendData', sendData);

  if (sendData.status === 'success') {
    // Create a Payroll
    const payroll = new Payroll({
      company_id: req.body.company_id,
      departments: req.body.departments,
      employees: req.body.employees,
      totalSalary: req.body.totalSalary,
      totalEmployees: req.body.totalEmployees,
      totalDepartments: req.body.totalDepartments,
      month: req.body.month,
      year: req.body.year,
      status: 'active',
      batchId: sendData.data.id,
    });

    // Save Payroll in the database
    payroll
      .save(payroll)
      .then(data => {
        res.status(200).send({
          status: 200,
          message: "Payroll was created successfully.",
          data: data,
        });
      })
      .catch(err => {
        console.log('err', err);
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Payroll."
        });
      });
  } else {
    res.status(500).send({
      message:
        "Some error occurred while creating the Payroll."
    });
  }
};

exports.retryTransfer = async (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }

  const response = await axios.post(`https://api.flutterwave.com/v3/transfers/${req.body.paymentId}/retries`, {}, {
    headers: {
      'Authorization': `Bearer ${FLW_SECRET_KEY}`,
      'Content-Type': 'application/json',
    }
  });

  if (response.data.status === 'success') {
    return res.status(200).send({ status: 200, message: 'Transfer was successful', data: response.data });
  } else {
    return res.status(500).send({ status: 500, message: 'Transfer was not successful', data: response.data });
  }



};



// Retrieve all Payroll from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Payroll.find({ company_id: req.params.company_id })
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

// Find a single Payroll with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Payroll.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Payroll with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Payroll with id=" + id });
    });
};

exports.checkPayment = async (req, res) => {
  const batchId = req.params.batchId;
  await axios.get(`https://api.flutterwave.com/v3/transfers?batch_id=${batchId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${FLW_SECRET_KEY}`
    }
  }).then(data => {
    const newData = cleanStringify(data.data.data);
    res.status(200).send({
      status: 200,
      message: "Record retrieved",
      data:  JSON.parse(newData),
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving transfer record"
    });
  });

}

// Update a Payroll by the id in the request
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

  Payroll.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Payroll with id=${id}. Maybe Payroll was not found!`
        });
      } else res.send({ message: "Payroll was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Payroll with id=" + id
      });
    });
};

// Delete a Payroll with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Payroll.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Payroll with id=${id}. Maybe Payroll was not found!`
        });
      } else {
        res.send({
          message: "Payroll was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Payroll with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Payroll.deleteMany({})
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

exports.count = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Payroll.countDocuments({ company_id: req.params.company_id })
    .then(data => {
      res.status(200).json({ totalPayrolls: data });
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
}