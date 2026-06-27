module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        employee_id: String,
        timeSheet: Array,
        company_id: String,
        totalHours: String,
        date: String,
        month: String,
        week: String,
        year: String,
        status: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Attendance = mongoose.model("attendance", schema);
    return Attendance;
  };

