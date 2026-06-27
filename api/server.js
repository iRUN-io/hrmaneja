const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// const whitelist = domainsFromEnv.split(",").map(item => item.trim())
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://app.hrmaneja.com",
  "https://waitlist.hrmaneja.com",
  "https://admin.hrmaneja.com",
  "https://hrmaneja.com",
  "https://irunauto.com",
  "https://poster-generator-zeta.vercel.app",
  "https://www.posterbot.ai",
  "posterbot.ai",
  "https://posterbot.ai",
  "www.posterbot.ai",
  "https://requisit-waitlist.vercel.app",
  "https://www.requisit-waitlist.vercel.app",
  "requisit-waitlist.vercel.app",
  "http://requisit-waitlist.vercel.app",
  "https://okbookshopng.vercel.app",
  "https://okbookshop.ng",
  "https://www.okbookshop.ng",
  "www.okbookshop.ng",
  "https://homeuni-backend.vercel.app",
  "https://hrmaneja.vercel.app"
];
// create express app
const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// app.use(bodyParser.json({limit: '50mb'}));

// Setup server port
const port = process.env.PORT || 5050;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get("/", (req, res) => {
  res.send("irun Technology LTD");
});

const db = require("./src/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Require employee routes
const employeeRoutes = require("./src/routes/employee.routes");

// Require activity routes
const activityRoutes = require("./src/routes/activity.routes");

// Require attendance routes
const attendanceRoutes = require("./src/routes/attendance.routes");

// Require department routes
const departmentRoutes = require("./src/routes/department.routes");

// Require leave routes
const leaveRoutes = require("./src/routes/leave.routes");

// Require payroll routes
const payrollRoutes = require("./src/routes/payroll.routes");

// Require user routes
const userRoutes = require("./src/routes/user.routes");

// mailer routes
const mailerRoutes = require("./src/routes/mailer.routes");

// setting routes
const settingRoutes = require("./src/routes/setting.routes");

// company routes
const companyRoutes = require("./src/routes/company.routes");

// admin routes
const adminRoutes = require("./src/routes/admin.routes");

// subscribtion routes
const subscribeRoutes = require("./src/routes/subscribe.routes");

// requisition routes
const requisitionRoutes = require("./src/routes/requisition.routes");

// support routes
const supportRoutes = require("./src/routes/support.routes");

// flutterwave routes
const flutterwaveRoutes = require("./src/routes/flutterwave.routes");

// flutterwave routes
const demoRoutes = require("./src/routes/demo.routes");

// billing routes
const billingRoutes = require("./src/routes/billing.routes");

// task routes
const taskRoutes = require("./src/routes/task.routes");

// blog routes
const blogRoutes = require("./src/routes/blog.routes");

// job routes
const jobRoutes = require("./src/routes/job.routes");

// candidate routes
const candidateRoutes = require("./src/routes/candidate.routes");

// stableAPI
const stableDiffusionRoutes = require("./src/routes/stableDiffusion.routes");

// airtimeRoutes
const airtimeRoutes = require("./src/routes/airtime.routes");

// eventRoutes
const EventRoutes = require("./src/routes/event.routes");

// bookshop
const BookShopRoutes = require("./src/routes/bookshop.routes");

// documentRoutes
const DocumentRoutes = require("./src/routes/document.routes");

// InventoryRoutes
const InventoryRoutes = require("./src/routes/inventory.routes");

//reportRoutes
const ReportRoutes = require("./src/routes/report.routes");

//notificationRoutes
const NotificationRoutes = require("./src/routes/notification.routes");

// :: REQUISITE ROUTES CONTROLLER ::

const RequisiteUserRoutes = require("./src/routes/requisite/user.routes");

const RequisiteVendorRoutes = require("./src/routes/requisite/vendor.routes");

const RequisiteAssetRoutes = require("./src/routes/requisite/asset.routes");

const RequisiteActivityRoutes = require("./src/routes/requisite/activity.routes");

const RequisiteDepartmentRoutes = require("./src/routes/requisite/department.routes");

const RequisiteRequestRoutes = require("./src/routes/requisite/requisition.routes");



// using as middleware
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/activities", activityRoutes);
app.use("/api/v1/attendance", attendanceRoutes);
app.use("/api/v1/departments", departmentRoutes);
app.use("/api/v1/leaves", leaveRoutes);
app.use("/api/v1/payroll", payrollRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/mailer", mailerRoutes);
app.use("/api/v1/setting", settingRoutes);
app.use("/api/v1/companies", companyRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/subscribtion", subscribeRoutes);
app.use("/api/v1/requisitions", requisitionRoutes);
app.use("/api/v1/supports", supportRoutes);
app.use("/api/v1/demos", demoRoutes);
app.use("/api/v1/payments", flutterwaveRoutes);
app.use("/api/v1/billing", billingRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/candidates", candidateRoutes);
app.use("/api/v1/stable-ai", stableDiffusionRoutes);
app.use("/api/v1/airtime", airtimeRoutes);
app.use("/api/v1/events", EventRoutes);
app.use("/api/v1/bookshop", BookShopRoutes);
app.use("/api/v1/documents", DocumentRoutes);
app.use("/api/v1/inventories", InventoryRoutes);
app.use("/api/v1/report", ReportRoutes);
app.use("/api/v1/notification", NotificationRoutes);

// :: REQUISITE ROUTES ::

app.use("/api/v1/requisite/user", RequisiteUserRoutes);
app.use("/api/v1/requisite/vendors", RequisiteVendorRoutes);
app.use("/api/v1/requisite/assets", RequisiteAssetRoutes);
app.use("/api/v1/requisite/activities", RequisiteActivityRoutes);
app.use("/api/v1/requisite/departments", RequisiteDepartmentRoutes);
app.use("/api/v1/requisite/requests", RequisiteRequestRoutes);


// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
