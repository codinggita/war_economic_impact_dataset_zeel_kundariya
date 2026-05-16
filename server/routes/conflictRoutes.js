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
  getConflictsByBlackMarketLevel,
  getConflictsByBlackMarketGoods,
  getConflictsByProfiteering,
  getConflictsByCurrencyGap,
  getConflictsByReconstructionCost,
  getConflictsByWarCost,
  getConflictsByInformalEconomyPre,
  getConflictsByInformalEconomyDuring,
  getConflictsByHouseholds,
  getLatestRegionalConflict,
  getOldestRegionalConflict,
  getCountryConflictHistory,
  getConflictCountByType,
  getConflictCountByStatus,
  getConflictsByYear,
  getSectorHighestGDPLoss,
  getSectorHighestInflation,
  getWarSummary,
  getWarEconomicImpact,
  getWarPovertyImpact,
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

// Fetch conflicts by black market level
router.get('/black-market/:level', getConflictsByBlackMarketLevel);

// Fetch conflicts by black market goods
router.get('/black-market-goods/:goods', getConflictsByBlackMarketGoods);

// Fetch conflicts by profiteering status
router.get('/profiteering/:status', getConflictsByProfiteering);

// Fetch conflicts by currency gap
router.get('/currency-gap/:gap', getConflictsByCurrencyGap);

// Fetch conflicts by reconstruction cost
router.get('/reconstruction-cost/:amount', getConflictsByReconstructionCost);

// Fetch conflicts by war cost
router.get('/cost-of-war/:amount', getConflictsByWarCost);

// Fetch pre-war informal economy
router.get('/informal-economy/pre/:value', getConflictsByInformalEconomyPre);

// Fetch wartime informal economy
router.get('/informal-economy/during/:value', getConflictsByInformalEconomyDuring);

// Fetch conflicts by affected households
router.get('/households/:count', getConflictsByHouseholds);

// Fetch latest regional conflict
router.get('/region/:region/latest', getLatestRegionalConflict);

// Fetch oldest regional conflict
router.get('/region/:region/oldest', getOldestRegionalConflict);

// Fetch country conflict history
router.get('/country/:country/history', getCountryConflictHistory);

// Count conflicts by type
router.get('/type/:type/count', getConflictCountByType);

// Count conflicts by status
router.get('/status/:status/count', getConflictCountByStatus);

// Fetch conflicts by year
router.get('/year/:year', getConflictsByYear);

// Sector specific analytics
router.get('/sector/:sector/highest-gdp-loss', getSectorHighestGDPLoss);
router.get('/sector/:sector/highest-inflation', getSectorHighestInflation);

// War specific deep-dives
router.get('/war/:name/summary', getWarSummary);
router.get('/war/:name/economic-impact', getWarEconomicImpact);
router.get('/war/:name/poverty-impact', getWarPovertyImpact);

module.exports = router;
