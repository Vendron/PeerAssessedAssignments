const { Schema, model } = require("mongoose");
const tempSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: {
    type: String,
    required: true,
  },
  userItem: [],
});

module.exports = model("Temp", tempSchema, "temp");
