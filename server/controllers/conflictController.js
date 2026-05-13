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
};
