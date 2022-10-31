const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: {
    type: String,
    required: true,
    default: null,
  },
  userFirstName: {
    type: String,
    required: true,
    default: null,
  },
  userLastName: {
    type: String,
    required: true,
    default: null,
  },
  userModules: {
    type: [],
    required: false,
    default: [
      {
        name: `COMP6360`,
        assignments: ['passed'],
      },
      {
        name: `COMP6620`,
        assignments: ['passed'],
      }
    ],
  },
  userCreated: {
    type: Number,
    required: false,
    default: 0,
  }
});

module.exports = model("User", userSchema, "users");
