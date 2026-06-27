
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            company_id: String,
            recipient: String, 
            amount: Number, 
            paidBy: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Airtime = mongoose.model("airtime", schema);
    return Airtime;
};
