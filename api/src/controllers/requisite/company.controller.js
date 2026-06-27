const db = require("../models");
const Company = db.company;
const path = require("path");
var crypto = require("crypto");
const nodemailer = require("nodemailer");
const config = require("../../config/mailer.config.js");
const hbs = require("nodemailer-express-handlebars");
const { smtp } = require("../../config/mailer.config.js");
// Create and Save a new Company
exports.create = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  let companyEmailData = [];
  let companyPhoneData = [];

  const { email, phone } = req.body;

  const companyEmailExists = await Promise.all([
    await Company.findOne({ email: email }),
  ]);

  const companyPhoneExists = await Promise.all([
    await Company.findOne({ phone: phone }),
  ]);

  for (const resp of companyEmailExists) {
    resp && companyEmailData.push(resp);
  }

  for (const resp of companyPhoneExists) {
    resp && companyPhoneData.push(resp);
  }

  if (companyPhoneData.length > 0 || companyEmailData.length > 0) {
    res
      .status(200)
      .send({ status: 404, message: "Email or phone already exists" });
    return;
  }

  // // generate token for email verification
  const token = crypto.randomBytes(20).toString("hex");

  const expiryDate = new Date();
  expiryDate.setHours(expiryDate.getHours() + 3);

  // Create a Company
  const company = new Company({
    name: req.body.name,
    registered_company_number: req.body.registered_company_number,
    incorporation_date: req.body.incorporation_date,
    vat_number: req.body.vat_number,
    email: req.body.email,
    address_line1: req.body.address_line1,
    address_line2: req.body.address_line2,
    city: req.body.city,
    country: req.body.country,
    phone: req.body.phone,
    company_logo: req.body.logo,
    settings: {
      features: {
        employee: req.body.settings?.features?.employee,
        department: req.body.settings?.features?.department,
        user: req.body.settings?.features?.user,
        activity: req.body.settings?.features?.activity,
        reports: req.body.settings?.features?.reports,
        notification: req.body.settings?.features?.notification,
        expenseManagement: req.body.settings?.features?.expenseManagement,
        inventoryManagement: req.body.settings?.features?.inventoryManagement,
      },
      currency: req.body.settings?.currency,
      timezone: req.body.settings?.timezone,
      dateFormat: req.body.settings?.dateFormat,
      timeFormat: req.body.settings?.timeFormat,
      language: req.body.settings?.language,
      theme: req.body.settings?.theme,
      emailVerification: true,
      emailVerificationCode: token,
      emailVerified: false,
      emailVerificationExpiry: expiryDate,
    },
  });

  // Save Company in the database
  company
    .save(company)
    .then((data) => {
      this.sendVerificationEmail(
        data.email,
        data.settings.emailVerificationCode,
        data.name
      );
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Company.",
      });
    });
};

// send verification email
exports.sendVerificationEmail = (email, token, name) => {
  // if(!req.headers.authorization) {
  //   return res.status(401).send({ message: "Unauthorized request" });
  // }
  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure, // true for 465, false for other ports
    auth: {
      user: config.smtp.auth.user,
      pass: config.smtp.auth.pass,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve("./views/"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views/"),
  };

  transporter.use("compile", hbs(handlebarOptions));

  const mailOptions = {
    from: smtp.default.from,
    to: email,
    subject: "Email Verification",
    template: "verificationMail",
    context: {
      name: name,
      message: `You’re almost ready to start enjoying HrManeja. Please verify your email address by clicking the button below. Kindly note that this link will expire in the next 3 hours, but don't worry, if it expires you will receive a new one immediately.`,
      // link: `https://app.hrmaneja.com/verify-email/${token}`,
    },
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return "error, try again";
    } else {
      console.log("Email sent: " + info.response);
      return "email sent";
    }
  });
};

// verify email
exports.verifyEmail = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const { token } = req.params;

  const company = await Company.findOne({
    "settings.emailVerificationCode": token,
  });

  // check expiry date
  if (company?.settings.emailVerificationExpiry < new Date()) {
    // res.status(200).send({status: 404, message: "Email verification link has expired" });

    // generate new token
    const newToken = crypto.randomBytes(20).toString("hex");
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 3);

    // update token and expiry date
    await Company.updateOne(
      { _id: company._id },
      {
        $set: {
          "settings.emailVerificationCode": newToken,
          "settings.emailVerificationExpiry": expiryDate,
        },
      }
    );

    // send new email verification link
    this.sendVerificationEmail(company.email, newToken, company.name);
    return;
  }

  if (company) {
    company.settings.emailVerified = true;
    company.settings.emailVerification = false;
    company.settings.emailVerificationCode = null;

    company
      .save()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            message: err.message || "Some error occurred, please try again",
          });
      });
  } else {
    res.status(200).send({ status: 404, message: "Error please try again !" });
  }
};

// resend verification email
exports.resendVerificationEmail = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const { email } = req.body;

  const company = await Company.findOne({ email: email });

  console.log(company);

  if (company) {
    // generate new token
    const newToken = crypto.randomBytes(20).toString("hex");
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 3);

    // update token and expiry date
    await Company.updateOne(
      { _id: company._id },
      {
        $set: {
          "settings.emailVerificationCode": newToken,
          "settings.emailVerificationExpiry": expiryDate,
        },
      }
    );

    // send new email verification link
    this.sendVerificationEmail(company.email, newToken, company.name);
    res
      .status(200)
      .send({ status: 200, message: "Email verification link has been sent" });
  } else {
    res.status(200).send({ status: 404, message: "Error please try again !" });
  }
};

// Retrieve all Company from the database.
exports.findAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Company.find()
    .then((data) => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees.",
      });
    });
};

// Find a single Company with an id
exports.findOne = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Company.findOne({ _id: id })
    .then((data) => {
      if (!data)
        res
          .status(200)
          .send({ status: 404, message: "Not found Company with id " + id });
      else res.status(200).send(data);
    })

    .catch((err) => {
      console.log(id);
      res
        .status(500)
        .send({ message: "Error retrieving Company with id=" + id });
    });
};

// Update a Company by the id in the request
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

  Company.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Company with id=${id}. Maybe Company was not found!`,
        });
      } else res.send({ message: "Company was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Company with id=" + id,
      });
    });
};

// Update features
exports.updateCompanyFeatures = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  const featureName = req.body.featureName;
  const featureValue = req.body.featureValue;
  Company.findOne({ _id: id })
    .then((data) => {
      if (!data) {
        res.status(200).send({ message: " Not found Company with id " + id });
      } else {
        data.settings.features[featureName] = featureValue;
        data.save();
        res.status(200).send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateCompanyFLWAccount = (accountDetails) => {
  const account = {
    companyId: accountDetails.companyId,
    bank_name: accountDetails.bank_name,
    account_ref: accountDetails.account_ref,
    account_number: accountDetails.account_number,
    account_name: accountDetails.account_name,
    bank_code: accountDetails.bank_code,
  };

  Company.findByIdAndUpdate(
    account.companyId,
    { bankAccount: account },
    { useFindAndModify: true }
  )
    .then((data) => {
      if (!data) {
        console.log("firstData", data);
        return {
          message: " Not found Company with id " + id,
          status: 404,
        };
      } else {
        return {
          message: "Account updated !",
          data: data,
          status: 200,
        };
      }
    })
    .catch((err) => {
      console.log("error", err);
      return { message: err.message, status: 500 };
    });
};

// Delete a Company with the specified id in the request
exports.delete = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Company.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Company with id=${id}. Maybe Company was not found!`,
        });
      } else {
        res.send({
          message: "Company was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Company with id=" + id,
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Company.deleteMany({})
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

// count all companies
exports.count = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Company.countDocuments()
    .then((data) => {
      res.status(200).json({ totalCompanies: data });
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving companies.",
      });
    });
};
