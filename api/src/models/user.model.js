
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            id: String,
            employee_id: String,
            name: String,
            email: String,
            phone: String,
            company_id: String,
            designation: String,
            role: String,
            username: String,
            password: String,
            status: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("user", schema);
    return User;
};


// 'user strict';

// var hash = require("bcrypt").hash;
// var dbConn = require("../../config/db.config");

// const salt = Math.floor(Math.random() * 10);

// //Users object create
// class Users {
//     constructor(user) {
//         this.id = user.id;
//         this.employee_id = user.employee_id;
//         this.name = user.name;
//         this.email = user.email;
//         this.phone = user.phone;
//         this.company_id = user.organization;
//         this.designation = user.designation;
//         this.role = user.role;
//         this.username = user.userName;
//         this.password = hash(user.password, salt);
//         this.status = user.status ? user.status : 1;
//         this.created_at = new Date();
//         this.updated_at = new Date();
//     }
//     static create(newUser, result) {
//         dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
//             if (err) {
//                 console.log("error: ", err);
//                 result(err, null);
//             }
//             else {
//                 console.log(res.insertId);
//                 result(null, res.insertId);
//             }
//         });
//     }
//     static findById(id, result) {
//         dbConn.query("Select * from users where id = ? ", id, function (err, res) {
//             if (err) {
//                 console.log("error: ", err);
//                 result(err, null);
//             }
//             else {
//                 result(null, res);
//             }
//         });
//     }
//     static findByEmail(email, result) {
//         dbConn.query("Select * from users where email = ?", email, function (err, res) {
//             if (err) {
//                 console.log("error: ", err);
//                 result(err);
//             }
//             else {
//                 result('res',res);
//             }
//         });
//     }
//     static findAll(result) {
//         dbConn.query("Select * from users", function (err, res) {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//             }
//             else {
//                 result(null, res);
//             }
//         });
//     }
//     static update(id, user, result) {
//         dbConn.query("UPDATE users SET ? WHERE id = ?", [user, id], function (err, res) {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//             } else {
//                 result(null, res);
//             }
//         });
//     }
//     static delete(id, result) {
//         dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//             }
//             else {
//                 result(null, res);
//             }
//         });
//     }
// }


// module.exports= Users;