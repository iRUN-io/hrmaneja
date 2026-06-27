

// send email using nodemailer
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
const nodemailer = require('nodemailer');
const config = require('../../config/mailer.config.js');
const { smtp } = require('../../config/mailer.config.js');




// send mail with defined transport object
module.exports = {
  // add response object to send email
  sendMail: (options, res) => {

    let transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure, // true for 465, false for other ports
      auth: {
        user: config.smtp.auth.user,
        pass: config.smtp.auth.pass
      }
    });

    const handlebarOptions = {
      viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
      },
      viewPath: path.resolve('./views/'),
    };

    transporter.use('compile', hbs(handlebarOptions))

    const mailOptions =
    {
      from: {
        name: smtp.default.name,
        address: smtp.default.from
      },
      to: options.body.to,
      subject: options.body.subject,
      template: 'mail',
      context: {
        name: options.body.name,
        message: options.body.message
      },
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res
        .status(500)
        .send({ message: "Error" });
      }
      else {
        res
        .status(200)
        .send({ message: "Success" });
      }
    });
  }
}
