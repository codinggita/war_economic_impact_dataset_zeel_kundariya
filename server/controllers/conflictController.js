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
    const conflict = await Conflict.findById(req.params.id);
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
    const conflict = new Conflict(req.body);
    const createdConflict = await conflict.save();
    res.status(201).json(createdConflict);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateConflict = async (req, res) => {
  try {
    const conflict = await Conflict.findById(req.params.id);
    if (conflict) {
      Object.assign(conflict, req.body);
      const updatedConflict = await conflict.save();
      res.json(updatedConflict);
    } else {
      res.status(404).json({ message: 'Conflict not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteConflict = async (req, res) => {
  try {
    const conflict = await Conflict.findById(req.params.id);
    if (conflict) {
      await conflict.deleteOne();
      res.json({ message: 'Conflict removed' });
    } else {
      res.status(404).json({ message: 'Conflict not found' });
    }
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
};
