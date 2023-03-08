const Joi = require('joi');

const createTest = {
  body: Joi.object().keys({
    testLevel: Joi.string().required().valid('fresher(0-3)', 'mid-level(4-6)', 'senior(7-10)', 'lead(11+)'),
    testTitle: Joi.string().required(),
    assignedCandidates: Joi.array().items(Joi.string()),
    questions: Joi.array().items(
      Joi.object().keys({ questionTitle: Joi.string().required(), answerCriteria: Joi.string() })
    ),
  }),
};

module.exports = {
  createTest,
};
