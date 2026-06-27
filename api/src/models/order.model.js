
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            buyerName: String,
            buyerPhone: String,
            buyerEmail: String,
            buyerAddress: String,
            amount: Number,
            books: Array,
            status: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const orders = mongoose.model("orders", schema);
    return orders;
};
