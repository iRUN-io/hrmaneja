const dbConfig = require("../../../config/mongodb.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model.js")(mongoose);
db.vendor = require("./vendors.model.js")(mongoose);
db.asset = require("./assets.model.js")(mongoose);
db.department = require("./department.model.js")(mongoose);
db.activity = require("./activity.model.js")(mongoose);
db.requisition = require("./requisition.model.js")(mongoose);

module.exports = db;
