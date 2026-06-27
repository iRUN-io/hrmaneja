
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            id: String,
            name: String,
            address: String,
            phone: String,
            catalog: Array,
            email: String,
            password: String,
            status: String,
            reviews: Array,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("RequisiteVendor", schema);
    return User;
};
