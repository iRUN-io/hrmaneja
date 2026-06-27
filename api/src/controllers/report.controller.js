const db = require("../models");
const Report = db.report;

// Create and Save a new Task
exports.create = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Report
  const report = new Report({
    from: req.body.fromDate,
    to: req.body.toDate,
    employee_id: req.body.employee_id,
    employee_name: req.body.employee_name,
    company_id: req.body.company_id,
    report_summary: req.body.report_summary,
    employee_role: req.body.employee_role,
    tasks: req.body.tasks,
    weekly_challenges: req.body.weekly_challenges,
    weekly_outcomes: req.body.weekly_outcomes,
    report_overview: req.body.report_overview,
    team_member: req.body.team_member,
    designation: req.body.designation,
    status: "Pending",
  });

  // Save Report in the database
  report
    .save(report)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Report.",
      });
    });
};

// Retrieve all Report from the database.
exports.findAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Report.find({ company_id: req.params.company_id })
    .then((data) => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};

// employeeReport
exports.employeeReport = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Report.find({ employee_id: req.params.id })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving employee Report.",
      });
    });
};

// Find a single Report with an id
exports.findOne = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Report.findOne(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Report with id " + id });
      else res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Report with id=" + id });
    });
};
// Update a Report by the id in the request
exports.update = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Report.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Report with id=${id}. Maybe Report was not found!`,
        });
      } else res.send({ message: "Report was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Report with id=" + id,
      });
    });
};

// Delete a Report with the specified id in the request
exports.delete = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Report.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Report with id=${id}. Maybe Report was not found!`,
        });
      } else {
        res.send({
          message: "Report was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Report with id=" + id,
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Report.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount}  were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all .",
      });
    });
};

exports.count = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Report.countDocuments({ company_id: req.params.company_id })
    .then((data) => {
      res.status(200).json({ totalReports: data });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving.",
      });
    });
};
