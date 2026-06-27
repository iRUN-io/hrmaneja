
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            company_id: String,
            status: String,
            employee: String,
            employee_id: String,
            line_manager_id: String,
            category: String,
            dueDate: String,
            note: String,
            amount: String,
            currency: String,
            department: String,

        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Requisition = mongoose.model("requisition", schema);
    return Requisition;
};