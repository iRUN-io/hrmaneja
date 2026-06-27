
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            id: String,
            company_id: String,
            name: String,
            serial: String,
            model: String,
            category: String,
            department: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Assets = mongoose.model("RequisiteAsset", schema);
    return Assets;
};
