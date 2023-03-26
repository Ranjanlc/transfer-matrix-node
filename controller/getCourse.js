const Course = require('../models/courses');
exports.getCourseHandler = (req, res) => {
  const { collegeId } = req.query;
  return Course.findById(parseInt(collegeId))
    .then((course) => {
      console.log(course);
      res.status(200).json({ course });
    })
    .catch((err) => {
      console.log(err);
    });
};
