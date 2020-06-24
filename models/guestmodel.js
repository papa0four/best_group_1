import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const guestSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
    required: "Enter a last name",
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  Paymentmethod: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
