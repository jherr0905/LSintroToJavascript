/* Write the code necessary to retrieve the value of the courses 
property of our student object.*/

let student = {
    name: 'Carmen',
    age: 14,
    grade: 10,
    courses: ['biology', 'algebra', 'composition', 'ceramics'],
    gpa: 3.75,
  };

//JavaScript style guides typically recommend using dot notation when possible.
  console.log(student.courses);
  console.log(student['courses']);
