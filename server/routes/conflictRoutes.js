const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/conflictController');
const { protect, admin } = require('../middlewares/authMiddleware');

router.route('/').get(getConflicts).post(protect, createConflict);

router
  .route('/:conflictId')
  .get(getConflictById)
  .put(protect, updateConflict)
  .patch(protect, updateConflict)
  .delete(protect, deleteConflict);

// Fetch conflicts by name
router.get('/name/:name', getConflictsByName);

// Fetch conflicts by type
router.get('/type/:type', getConflictsByType);

// Fetch conflicts by region
router.get('/region/:region', getConflictsByRegion);

// Fetch conflicts by status
router.get('/status/:status', getConflictsByStatus);

// Fetch conflicts by country
router.get('/country/:country', getConflictsByCountry);

module.exports = router;
