import mongoose from "mongoose";

const patient = new mongoose.Schema({
  p_name: {
    type: String,
  },
  p_mid: {
    type: String,
  },
  p_bg: {
    type: String,
  },
  p_address: {
    type: String,
  },
  p_contact: {
    type: Number,
  },
  p_gender: {
    type: String,
  },
  p_profile: {
    type: String,
  },
  ads_type: {
    type: String,
  },
  p_status: {
    type: String,
    default: "ACTIVE",
  },
  p_toc: {
    date: { type: String },
    time: { type: String },
  },
});

const patientSchema = mongoose.model("patients", patient);
export default patientSchema;