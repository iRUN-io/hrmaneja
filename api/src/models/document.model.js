
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        url: String,
        company_id: String,
        employee_id: String,
        status: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Document = mongoose.model("document", schema);
    return Document;
  };
