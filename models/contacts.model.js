const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactsSchema = new Schema(
  {
    telnumber1: {
      type: String,
      required: false
    },
    telnumber2: {
      type: String,
      required: false
    },
    deviceid1: {
      type: String,
      required: true
    },
    deviceid2: {
      type: String,
      required: true
    },
    coord: {
      latitude: String,
      longitude: String,
	    altitude: String
    },
    datesejour: { type: Date, default: Date.now }
  },
  { 
    timestamps: true
  }
);

const Contacts = mongoose.model("Contacts", contactsSchema);

module.exports = Contacts;
