const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    telnumber: {
      type: String,
      required: true
    },
	hashnumber: {
      type: String,
      required: false
    },
	cni: {
      type: String,
      required: false
    },
	deviceid: {
      type: String,
      required: true
    },
	debutsejour: { type: Date, default: Date.now },
	finsejour: { type: Date, default: Date.now },
	coord: {
      latitude: Number,
      longitude: Number,
	    altitude: Number
    },
	etat: {
      type: Number,
      required: true
    },
    description: {
      type: String
    },
    computed: {
      type: Number,
      required: false
    },
    contacts: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
