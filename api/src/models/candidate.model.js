
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            company_id: String,
            jobId: String, 
            firstName: String,
            lastName: String,
            email: String, 
            phone: String, 
            address: String, 
            city: String, 
            country: String, 
            postCode: String,
            resume: String,
            dateAvailable: String,
            desiredPay: String,
            whyUs: String,
            link: String,
            linkedInUrl: String,
            status: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Candidate = mongoose.model("candidates", schema);
    return Candidate;
};
