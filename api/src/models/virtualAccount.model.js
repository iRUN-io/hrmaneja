
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            company_id: String,
            status: String,
            created_by: String,
            bank_details: {
                account_number: String,
                bank_code: String,
                bank_name: String,
            },
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const VirtualAccount = mongoose.model("virtual_account", schema);
    return VirtualAccount;
};