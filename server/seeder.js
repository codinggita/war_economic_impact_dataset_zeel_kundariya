const mongoose = require('mongoose');
const dotenv = require('dotenv');
const conflicts = require('./dataset.json');
const Conflict = require('./models/conflictModel');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Conflict.deleteMany();
    
    // Map the JSON keys to Schema keys if necessary
    const sampleData = conflicts.map(conflict => ({
      Conflict_Name: conflict.Conflict_Name,
      Conflict_Type: conflict.Conflict_Type,
      Region: conflict.Region,
      Start_Year: conflict.Start_Year,
      End_Year: conflict.End_Year,
      Status: conflict.Status,
      Primary_Country: conflict.Primary_Country,
      GDP_Change_Percentage: parseFloat(conflict["GDP_Change_%"]),
      Inflation_Rate_Percentage: parseFloat(conflict["Inflation_Rate_%"]),
      Cost_of_War_USD: parseFloat(conflict.Cost_of_War_USD),
      During_War_Poverty_Rate_Percentage: parseFloat(conflict["During_War_Poverty_Rate_%"]),
    }));

    await Conflict.insertMany(sampleData);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Conflict.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
