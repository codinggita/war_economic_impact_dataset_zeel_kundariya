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

// Fetch conflicts by start year
router.get('/start-year/:year', getConflictsByStartYear);

// Fetch conflicts by end year
router.get('/end-year/:year', getConflictsByEndYear);

// Fetch conflicts by inflation rate
router.get('/inflation/:rate', getConflictsByInflation);

// Fetch conflicts by GDP loss
router.get('/gdp-loss/:percentage', getConflictsByGDPLoss);

// Fetch conflicts by poverty rate
router.get('/poverty/:rate', getConflictsByPoverty);

// Fetch conflicts by extreme poverty
router.get('/extreme-poverty/:rate', getConflictsByExtremePoverty);

// Fetch conflicts by food insecurity
router.get('/food-insecurity/:rate', getConflictsByFoodInsecurity);

// Fetch conflicts by unemployment
router.get('/unemployment/:rate', getConflictsByUnemployment);

// Fetch conflicts by youth unemployment
router.get('/youth-unemployment/:rate', getConflictsByYouthUnemployment);

// Fetch conflicts by sector
router.get('/sector/:sector', getConflictsBySector);

module.exports = router;
