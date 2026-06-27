
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            company_id: String,
            companyName: String,
            jobTitle: String, 
            department: String,
            location: String,
            aboutCompany: String, 
            aboutRole: String, 
            responsibilities: Array, 
            requirements: Array, 
            benefits: Array, 
            totalSalary: Number,
            jobType: String,
            applicants: Number,
            status: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const JobPortal = mongoose.model("jobs", schema);
    return JobPortal;
};
