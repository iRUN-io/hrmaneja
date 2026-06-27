
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            company_id: String,
            status: String,
            employee: String,
            employee_id: String,
            line_manager_id: String,
            from: String,
            to: String,
            reason: String,
            leave_type: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Leave = mongoose.model("leaves", schema);
    return Leave;
};