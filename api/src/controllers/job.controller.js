const db = require("../models");
const Job = db.job;

// Create and Save a new Job
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Job
  const requirement = req.body.requirements.split("/");
  const requirementArray = requirement.map((item) => {
    return item.trim();
  });

  const benefit = req.body.benefits.split("/");
  const benefitArray = benefit.map((item) => {
    return item.trim();
  });

  const responsibility = req.body.responsibilities.split("/");
  const responsibilityArray = responsibility.map((item) => {
    return item.trim();
  });


  const job = new Job({
    company_id: req.body.company_id,
    companyName: req.body.companyName,
    jobTitle: req.body.jobTitle,
    jobType: req.body.jobType,
    department: req.body.department,
    location: req.body.location,
    aboutCompany: req.body.aboutCompany,
    aboutRole: req.body.aboutRole,
    requirements: requirementArray,
    responsibilities: responsibilityArray,
    benefits: benefitArray,
    totalSalary: req.body.totalSalary,
    applicants: 0,
    status: 'active',
  });

  // Save Job in the database
  job
    .save(job)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Job."
      });
    });
};

// Retrieve all Jobs from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }

  Job.find({ company_id: req.params.company_id})
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

// Retrieve all Jobs from the database.
exports.findAllActiveJobs = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }

  Job.find({ company_id: req.params.company_id, status: 'active'})
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

exports.makeInactive = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Job.findByIdAndUpdate(id, { status: 'inactive' }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Job with id=${id}. Maybe Job was not found!`
        });
      } else res.status(200).send({ message: "Job was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Job with id=" + id
      });
    });
};

// Find a single Job with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Job.findOne({ _id: id })
    .then(data => {
      if (!data)
        res.status(200).send({ message: "Not found Job with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(200)
        .send({ status: 500, message: "Error retrieving Job with id=" + id });
    });
};

// Update a Job by the id in the request
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

  Job.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Job with id=${id}. Maybe Job was not found!`
        });
      } else res.status(200).send({ message: "Job was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Job with id=" + id
      });
    });
};

// Delete a Job with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Job.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Job with id=${id}. Maybe Job was not found!`
        });
      } else {
        res.send({
          message: "Job was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Job with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Job.deleteMany({})
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
  Job.countDocuments({ company_id: req.params.company_id })
    .then(data => {
      res.status(200).json({ totalJobs: data });
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving ."
      });
    });
}