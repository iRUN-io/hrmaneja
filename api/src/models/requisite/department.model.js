
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        department_head: String,
        company_id: String,
        status: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Department = mongoose.model("requisiteDepartment", schema);
    return Department;
  };
