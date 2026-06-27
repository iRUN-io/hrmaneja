
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        quantity: String,
        company_id: String,
        category: String,
        status: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Inventory = mongoose.model("inventory", schema);
    return Inventory;
  };
