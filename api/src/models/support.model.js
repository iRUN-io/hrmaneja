
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            employee_id: String,
            category: String,
            company_id: String,
            note: String,
            status: String,
            ticketId: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Support = mongoose.model("support", schema);
    return Support;
};
