module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      sender_id: String,
      receiver_id: String,
      hr_id: String,
      notification: String,
      notification_name: String,
      user: String,
      company_id: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Notification = mongoose.model("notification", schema);
  return Notification;
};
