
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            company_id: String,
            emailNotificationEnabled: Boolean,
            twoFactorEnabled: String,

        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Setting = mongoose.model("settings", schema);
    return Setting;
};