const dbConfig = require("../../config/mongodb.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.employee = require("./employee.model.js")(mongoose);
db.department = require("./department.model.js")(mongoose);
db.leave = require("./leave.model.js")(mongoose);
db.payroll = require("./payroll.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);
db.activity = require("./activity.model.js")(mongoose);
db.setting = require("./setting.model.js")(mongoose);
db.company = require("./company.model.js")(mongoose);
db.admin = require("./admin.model.js")(mongoose);
db.subscribe = require("./subscribe.model.js")(mongoose);
db.requisition = require("./requisition.model.js")(mongoose);
db.support = require("./support.model.js")(mongoose);
db.demo = require("./demo.model.js")(mongoose);
db.billing = require("./billing.model.js")(mongoose);
db.task = require("./task.model.js")(mongoose);
db.blog = require("./blog.model.js")(mongoose);
db.attendance = require("./attendance.model.js")(mongoose);
db.job = require("./job.model.js")(mongoose);
db.candidate = require("./candidate.model.js")(mongoose);
db.airtime = require("./airtime.model.js")(mongoose);
db.event = require("./event.model.js")(mongoose);
db.bookshop = require("./bookshop.model.js")(mongoose);
db.order = require("./order.model.js")(mongoose);
db.document = require("./document.model.js")(mongoose);
db.inventory = require("./inventory.model.js")(mongoose);
db.report = require("./report.model.js")(mongoose);
db.notification = require("./notification.model.js")(mongoose);

module.exports = db;
