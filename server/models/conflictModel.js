const mongoose = require('mongoose');

const conflictSchema = mongoose.Schema(
  {
    Conflict_Name: { type: String, required: true },
    Conflict_Type: { type: String, required: true },
    Region: { type: String, required: true },
    Start_Year: { type: String, required: true },
    End_Year: { type: String },
    Status: { type: String, required: true },
    Primary_Country: { type: String, required: true },
    GDP_Change_Percentage: { type: Number },
    Inflation_Rate_Percentage: { type: Number },
    Cost_of_War_USD: { type: Number },
    During_War_Poverty_Rate_Percentage: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Conflict = mongoose.model('Conflict', conflictSchema);

module.exports = Conflict;
