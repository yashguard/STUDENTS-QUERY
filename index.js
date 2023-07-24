const express = require("express");
const connect = require("./db");
const student = require("./studentSchema");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  const studentDetails = await student.find();
  res.status(200).send(studentDetails);
});

server.post("/student", async (req, res) => {
  // <================== First Query ==================>
  // <================== Count of all the female students ==================>

  //   const studentsList = await student.find({gender : req.query.gender});
  //   const students = await student.find({gender : req.query.gender}).count();
  //   console.log(students);
  //   res.status(200).send(studentsList)


  // <================== Second Query ==================>
  // <================== Count of all male students who scored more than 85 in maths, science and English ==================>

//   const studentsList = await student.find({
//     gender: req.query.gender,
//     maths: { $gt: 85 },
//     science: { $gt: 85 },
//     english: { $gt: 85 },
//   });
//   const students = await student
//     .find({
//       gender: req.query.gender,
//       maths: { $gt: 85 },
//       science: { $gt: 85 },
//       english: { $gt: 85 },
//     })
//     .count();
//   console.log(students);

  res.status(200).send(studentsList);
});

server.listen(8010, () => {
  console.log("Listening successfully");
  connect();
});
