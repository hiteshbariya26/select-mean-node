const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const questionSchema = mongoose.Schema({
  questionTitle: {
    type: String,
    required: true,
    trim: true,
  },
  // interviewers expectation from answer
  answerCriteria: {
    type: String,
    required: false,
    trim: true,
  },
});

const testSchema = mongoose.Schema(
  {
    testTitle: {
      type: String,
      required: true,
      trim: true,
    },
    testLevel: {
      type: String,
      required: true,
      trim: true,
    },
    questions: {
      type: [questionSchema],
    },
    assignedCandidates: {
      type: [String], // array of id
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
testSchema.plugin(toJSON);
testSchema.plugin(paginate);

/**
 * @typedef Test
 */
const Test = mongoose.model('Test', testSchema);

module.exports = Test;
