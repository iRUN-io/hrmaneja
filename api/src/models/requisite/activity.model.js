
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        employee_id: String,
        activity: String,
        activity_name: String,
        user: String,
        company_id: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Activity = mongoose.model("requisiteActivity", schema);
    return Activity;
  };
