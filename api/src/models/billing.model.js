
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            company_id: String,
            plan: String, 
            amount: Number, 
            paidBy: String,
            expiryDate: String,
            status: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Billing = mongoose.model("billing", schema);
    return Billing;
};
