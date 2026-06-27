
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            email: String,

        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Subscribe = mongoose.model("subscribtions", schema);
    return Subscribe;
};