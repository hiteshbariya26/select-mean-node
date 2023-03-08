const httpStatus = require('http-status');
const { Test } = require('../models');
const ApiError = require('../utils/ApiError');

const createTest = async (testBody) => {
  return Test.create(testBody);
};

const queryTests = async (filter, options) => {
  const tests = await Test.paginate(filter, options);
  return tests;
};

const getTestById = async (id) => {
  return Test.findById(id);
};

const deleteTestById = async (testId) => {
  const test = await getTestById(testId);
  if (!test) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Test not found');
  }
  await test.remove();
  return test;
};

module.exports = {
  createTest,
  queryTests,
  getTestById,
  deleteTestById,
};
