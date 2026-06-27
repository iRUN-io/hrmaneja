module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        email: String,
        phone: String,
        address: String,
        company_id: String,
        role: String,
        gender: String,
        salary: String,
        line_manager: String,
        department: String,
        office: String,
        country_of_employment: String,
        currency: String,
        salary_frequency: String,
        start_date: String,
        salary_start_date: String,
        profile_picture: String,
        dob: String,
        country: String,
        bank_name: String,
        bank_account_number: String,
        bank_account_name: String,
        bank_code: String,
        company_admin: String,
        employment_type: String,
        status: String,
        // created_at: String,
        // updated_at: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Employee = mongoose.model("employee", schema);
    return Employee;
  };

