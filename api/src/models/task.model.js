
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            employee_id: String,
            due_date: String,
            company_id: String,
            note: String,
            employee_name: String,
            status: String,
            priority: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Task = mongoose.model("task", schema);
    return Task;
};
