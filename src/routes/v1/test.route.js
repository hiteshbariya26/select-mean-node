const express = require('express');
const testController = require('../../controllers/test.controller');
const validate = require('../../middlewares/validate');
const testValidation = require('../../validations/test.validation');

const router = express.Router();

router.route('/create-test').post(
  (req, res, next) => {
    next();
  },
  validate(testValidation.createTest),
  testController.createTest
);

router.route('/get-tests').get(testController.getTests);

router.route('/:testId').get(testController.getTest);

router.route('/:testId').delete(testController.deleteTest);

module.exports = router;
