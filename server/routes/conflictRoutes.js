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

router.route('/').get(getConflicts).post(protect, admin, createConflict);
router
  .route('/:id')
  .get(getConflictById)
  .put(protect, admin, updateConflict)
  .delete(protect, admin, deleteConflict);

module.exports = router;
