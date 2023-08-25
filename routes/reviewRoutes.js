const express = require('express');

const router = express.Router({ mergeParams: true });
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authenticationController');

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview,
  );

router
  .route('/:id')
  .delete(reviewController.deleteReview)
  .patch(reviewController.updateReview);

// Export module
module.exports = router;
