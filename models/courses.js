const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  collegeType: {
    type: String,
    required: true,
  },
  collegeCourses: {
    type: Array,
    required: true,
  },
  eqvtCourses: {
    type: Array,
    required: true,
  },
  startDateContainer: {
    type: Array,
  },
  endDateContainer: {
    type: Array,
  },
  levels: {
    type: Array,
    required: true,
  },
  creditHours: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model('Course', courseSchema);
