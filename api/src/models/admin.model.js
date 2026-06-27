
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            id: String,
            name: String,
            email: String,
            phone: String,
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

    const Admin = mongoose.model("admin", schema);
    return Admin;
};

