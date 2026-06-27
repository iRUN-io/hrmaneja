module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      company_id: String,
      report_summary: String,
      employee_name: String,
      employee_id: String,
      from: String,
      to: String,
      tasks: String,
      employee_role: String,
      weekly_challenges: String,
      weekly_outcomes: String,
      report_overview: String,
      team_member: String,
      designation: String,
      status: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Report = mongoose.model("report", schema);
  return Report;
};
