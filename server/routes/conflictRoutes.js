const express = require('express');
const router = express.Router();
const {
  getConflicts,
  getConflictById,
  createConflict,
  updateConflict,
  deleteConflict,
} = require('../controllers/conflictController');
const { protect, admin } = require('../middlewares/authMiddleware');

router.route('/').get(getConflicts).post(protect, createConflict);
router
  .route('/:conflictId')
  .get(getConflictById)
  .put(protect, updateConflict)
  .patch(protect, updateConflict)
  .delete(protect, deleteConflict);

module.exports = router;
