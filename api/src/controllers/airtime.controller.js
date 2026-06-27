const db = require("../models");
const Airtime = db.airtime;

// Create and Save a new Billing
exports.create = async (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } 

  // Create Airtime
  const billing = new Airtime({
        company_id: req.body.company_id,
        recipient: req.body.phoneNumber,
        amount: req.body.amount,
        paidBy: req.body.paidBy,
  });

  // Save Billing in the database
  billing
    .save(billing)
    .then(data => {
      res.status(200).send({
        status: 200,
        message: "Airtime record saved successfully.",
        data: data,
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Billing."
      });
    });
};

// Retrieve all Billing from the database.
exports.findAll = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    Airtime.find({ company_id: req.params.company_id  })
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


exports.count = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Airtime.countDocuments({ company_id: req.params.company_id })
  .then(data => {
    res.status(200).json({ totalBills: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}