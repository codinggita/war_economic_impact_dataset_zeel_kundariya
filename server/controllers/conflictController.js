const Conflict = require('../models/conflictModel');

const getConflicts = async (req, res) => {
  try {
    const conflicts = await Conflict.find({});
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getConflictById = async (req, res) => {
  try {
    const conflict = await Conflict.findById(req.params.conflictId);
    if (conflict) {
      res.json(conflict);
    } else {
      res.status(404).json({ message: 'Conflict not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createConflict = async (req, res) => {
  try {
    const conflict = await Conflict.create(req.body);
    res.status(201).json(conflict);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateConflict = async (req, res) => {
  try {
    const conflict = await Conflict.findByIdAndUpdate(req.params.conflictId, req.body, {
      new: true,
      runValidators: true,
    });
    if (conflict) {
      res.json(conflict);
    } else {
      res.status(404).json({ message: 'Conflict not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteConflict = async (req, res) => {
  try {
    const conflict = await Conflict.findByIdAndDelete(req.params.conflictId);
    if (conflict) {
      res.json({ message: 'Conflict removed' });
    } else {
      res.status(404).json({ message: 'Conflict not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by name
const getConflictsByName = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Conflict_Name: { $regex: req.params.name, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by type
const getConflictsByType = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Conflict_Type: { $regex: req.params.type, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by region
const getConflictsByRegion = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Region: { $regex: req.params.region, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by status
const getConflictsByStatus = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Status: { $regex: req.params.status, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by country
const getConflictsByCountry = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Primary_Country: { $regex: req.params.country, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by start year
const getConflictsByStartYear = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Start_Year: { $regex: req.params.year, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by end year
const getConflictsByEndYear = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      End_Year: { $regex: req.params.year, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by inflation rate
const getConflictsByInflation = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Inflation_Rate_Percentage: parseFloat(req.params.rate),
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by GDP loss
const getConflictsByGDPLoss = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      GDP_Change_Percentage: parseFloat(req.params.percentage),
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by poverty rate
const getConflictsByPoverty = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      During_War_Poverty_Rate_Percentage: parseFloat(req.params.rate),
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by extreme poverty
const getConflictsByExtremePoverty = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Extreme_Poverty_Rate_Percentage: parseFloat(req.params.rate),
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by food insecurity
const getConflictsByFoodInsecurity = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Food_Insecurity_Rate_Percentage: parseFloat(req.params.rate),
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by unemployment
const getConflictsByUnemployment = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      During_War_Unemployment_Percentage: parseFloat(req.params.rate),
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by youth unemployment
const getConflictsByYouthUnemployment = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Youth_Unemployment_Change_Percentage: parseFloat(req.params.rate),
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by sector
const getConflictsBySector = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Most_Affected_Sector: { $regex: req.params.sector, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by black market level
const getConflictsByBlackMarketLevel = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Black_Market_Activity_Level: { $regex: req.params.level, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by black market goods
const getConflictsByBlackMarketGoods = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Most_Traded_Black_Market_Goods: { $regex: req.params.goods, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by profiteering status
const getConflictsByProfiteering = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      War_Profiteering_Instances: { $regex: req.params.status, $options: 'i' },
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by currency gap
const getConflictsByCurrencyGap = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Currency_Gap_Percentage: parseFloat(req.params.gap),
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch conflicts by reconstruction cost
const getConflictsByReconstructionCost = async (req, res) => {
  try {
    const conflicts = await Conflict.find({
      Estimated_Reconstruction_Cost_USD: parseFloat(req.params.amount),
    });
    res.json(conflicts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getConflicts,
  getConflictById,
  createConflict,
  updateConflict,
  deleteConflict,
  getConflictsByName,
  getConflictsByType,
  getConflictsByRegion,
  getConflictsByStatus,
  getConflictsByCountry,
  getConflictsByStartYear,
  getConflictsByEndYear,
  getConflictsByInflation,
  getConflictsByGDPLoss,
  getConflictsByPoverty,
  getConflictsByExtremePoverty,
  getConflictsByFoodInsecurity,
  getConflictsByUnemployment,
  getConflictsByYouthUnemployment,
  getConflictsBySector,
  getConflictsByBlackMarketLevel,
  getConflictsByBlackMarketGoods,
  getConflictsByProfiteering,
  getConflictsByCurrencyGap,
  getConflictsByReconstructionCost,
};
