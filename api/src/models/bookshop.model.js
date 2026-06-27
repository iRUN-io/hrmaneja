
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            author: String,
            price: Number,
            summary: String,
            categories: Array,
            image: String,
            status: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const bookshop = mongoose.model("bookshop", schema);
    return bookshop;
};
