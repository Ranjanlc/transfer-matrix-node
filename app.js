const fs = require('fs');
const mongoose = require('mongoose');
const Course = require('./models/courses');
const express = require('express');
const { getCourseHandler } = require('./controller/getCourse');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});
app.get('/get-course', getCourseHandler);
// app.get('/test', (req, res) => {
//   fs.readFile('names.unl', 'utf-8', (error, data) => {
//     const transformed = data.split('\r\n').map((container) => {
//       const [id, name, state] = container.split(';');
//       return { id, nameContainer: `${name} - (${state})` };
//     });
//     // console.log(transformed);
//     return res.status(200).json({ transformed });
//   });
// });

mongoose
  .connect(
    'mongodb+srv://ranjan:ecutransfermatrix@transfermatrix.vzy0erd.mongodb.net/college?retryWrites=true&w=majority'
  )
  .then((res) => {
    /*
    fs.readFile('courses.txt', 'utf8', function (err, data) {
      if (err) throw err;
      const fileContent = data.split('\r\n').map((container) => {
        // const [courseDetail, [collegeType, level]] = container.split(';;');
        // console.log(courseDetail, collegeType, level);
        const splittedContainer = container.split(';');
        let [
          _id,
          collegeCourseCode,
          collegeCourseName,
          eqvtCourse,
          startDate,
          endDate,
          collegeType,
          level,
        ] = splittedContainer;
        // We are playing with the length because of the irregularity of the data.
        if (splittedContainer.length === 8) {
          startDate = endDate = '';
          [_, _, _, _, _, collegeType, level] = splittedContainer;
        }
        if (splittedContainer.length === 10) {
          let course1, course2;
          [
            _,
            _,
            course1,
            course2,
            eqvtCourse,
            startDate,
            endDate,
            collegeType,
            level,
          ] = splittedContainer;
          collegeCourseName = `${course1}-${course2.trim()}`;
        }
        if (splittedContainer.length === 11) {
          let course1, course2, course3;
          [
            _,
            _,
            course1,
            course2,
            course3,
            eqvtCourse,
            startDate,
            endDate,
            collegeType,
            level,
          ] = splittedContainer;
          collegeCourseName = `${course1}-${course2.trim()}-${course3.trim()}`;
        }
        const collegeCourse = `${collegeCourseCode}-${collegeCourseName}`;
        return {
          _id,
          collegeType,
          collegeCourse,
          eqvtCourse,
          startDate,
          endDate,
          level,
        };
      });
      //   console.log(fileContent[244]);
      const refinedData = fileContent.reduce((acc, curData) => {
        const {
          _id,
          collegeType,
          collegeCourse,
          eqvtCourse,
          startDate,
          endDate,
          level,
        } = curData;
        const startDateRefined =
          startDate !== '' ? new Date(startDate).toISOString() : '';
        const endDateRefined =
          endDate !== '' ? new Date(endDate).toISOString() : '';
        // console.log(acc);
        if (acc[_id]) {
          acc[_id].collegeCourses.push(collegeCourse);
          acc[_id].eqvtCourses.push(eqvtCourse);
          acc[_id].startDateContainer.push(startDateRefined);
          acc[_id].endDateContainer.push(endDateRefined);
          acc[_id].levels.push(level);
          return acc;
        }
        if (!acc[_id]) {
          acc[_id] = {
            _id: parseInt(_id),
            collegeType,
            collegeCourses: [collegeCourse],
            eqvtCourses: [eqvtCourse],
            startDateContainer: [startDateRefined],
            endDateContainer: [endDateRefined],
            levels: [level],
          };
          return acc;
        }
      }, {});
      Course.insertMany(Object.values(refinedData))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // handle error and do something with docs
    });
*/
    app.listen(8080);
  });
