const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { testService } = require('../services');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const createTest = catchAsync(async (req, res) => {
  const questions = await testService.createTest(req.body);
  res.status(httpStatus.CREATED).send(questions);
});

const getTests = catchAsync(async (req, res) => {
  const filter = pick(req.query, []);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await testService.queryTests(filter, options);
  res.send(result);
});

const getTest = catchAsync(async (req, res) => {
  const test = await testService.getTestById(req.params.testId);
  if (!test) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Test not found');
  }
  res.send(test);
});

const deleteTest = catchAsync(async (req, res) => {
  await testService.deleteTestById(req.params.testId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTest,
  getTests,
  getTest,
  deleteTest,
};
