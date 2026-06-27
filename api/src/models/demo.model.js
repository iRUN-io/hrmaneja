
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            date: String,
            month: String,
            year: String,
            hour: String,
            minute: String,
            second: String,
            meridiem: String,
            note: String,
            email: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Demo = mongoose.model("demo", schema);
    return Demo;
};
