import mongoose from "mongoose";
const Schema = mongoose.Schema;
export const roomSchema = new Schema({
  roomnumber: {
    type: String,
    required: "Enter a first name",
  },
  beds: {
    type: Number,
    default: 1,
  },
  image: { data: Buffer, contentType: String },
  price: {
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: "USD",
    },
  },
  isVacant: {
    type: Boolean,
    default: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
