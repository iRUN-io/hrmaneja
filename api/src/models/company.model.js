
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            registered_company_number: String,
            incorporation_date: String,
            vat_number: String,
            email: String,
            address_line1: String,
            address_line2: String,
            city: String,
            country: String,
            phone: String,
            company_logo: String,
            bankAccount: {
                bank_name: String,
                account_ref: String,
                account_number: String,
                account_name: String,
            },
            settings: {
                features: {
                    leave: Boolean,
                    payroll: Boolean,
                    employee: Boolean,
                    department: Boolean,
                    user: Boolean,
                    activity: Boolean,
                    events: Boolean,
                    reports: Boolean,
                    notification: Boolean,
                    expenseManagement: Boolean,
                    inventoryManagement: Boolean,
                    jobManagement: Boolean,
                    holidayManagement: Boolean,
                    projectManagement: Boolean,
                },
                currency: String,
                timezone: String,
                dateFormat: String,
                timeFormat: String,
                language: String,
                theme: String,
                emailVerification: Boolean,
                emailVerificationCode: String,
                emailVerified: Boolean,
                emailVerificationExpiry: String,
            },

        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Company = mongoose.model("companies", schema);
    return Company;
};