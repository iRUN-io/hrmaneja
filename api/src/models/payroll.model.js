
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            company_id: String,
            departments: Array, 
            employees: Array, 
            totalSalary: Number,
            totalEmployees: Number,
            totalDepartments: Number,
            month: String,
            year: String,
            status: String,
            batchId: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Payroll = mongoose.model("payroll", schema);
    return Payroll;
};
