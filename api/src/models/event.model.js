
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: Array,
        category: String,
        likes: Number,
        dislikes: Number,
        link: String,
        comments: Array,
        image: String,
        status: String,
        author: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Blog = mongoose.model("event", schema);
    return Blog;
  };
