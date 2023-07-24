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
  //   res.status(200).send(studentsList)
  //   console.log(students);
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
  //   res.status(200).send(studentsList);
  //   console.log(students);
  // <================== Third Query ==================>
  // <================== Count of all students who scored between 50 and 75 marks in maths and English ==================>
  //   const studentsList = await student.find({
  //     maths: { $gt: 50, $lt: 75 },
  //     english: { $gt: 50, $lt: 75 },
  //   });
  //   const students = await student
  //     .find({
  //       maths: { $gt: 50, $lt: 75 },
  //       english: { $gt: 50, $lt: 75 },
  //     })
  //     .count();
  //   res.status(200).send(studentsList);
  //   console.log(students);
  // <================== Fourth Query ==================>
  // <================== Count of students from class I to class V who score more than 50 in all subjects ==================>
  //   const studentsList = await student.find({
  //     class: { $gte: "I", $lte: "IV" },
  //     maths: { $gt: 50 },
  //     science: { $gt: 50 },
  //     english: { $gt: 50 },
  //   });
  //   const students = await student
  //     .find({
  //       class: { $gte: "I", $lte: "IV" },
  //       maths: { $gt: 50 },
  //       science: { $gt: 50 },
  //       english: { $gt: 50 },
  //     })
  //     .count();
  //   res.status(200).send(studentsList);
  //   console.log(students);
  // <================== Fifth Query ==================>
  // <================== Find all the female students from grade X section A who scored less than 25 in all subjects ==================>
  //   const studentsList = await student.find({
  //     gender: "Female",
  //     class: "X",
  //     section: "A",
  //     maths: { $lt: 25 },
  //     science: { $lt: 25 },
  //     english: { $lt: 25 },
  //   });
  //   const students = await student
  //     .find({
  //       gender: "Female",
  //       class: "X",
  //       section: "A",
  //       maths: { $lt: 25 },
  //       science: { $lt: 25 },
  //       english: { $lt: 25 },
  //     })
  //     .count();
  //   res.status(200).send(studentsList);
  //   console.log(students);
  // <================== Sixth Query ==================>
  // <================== Top 3 students in grade V based on maths score ==================>
  const studentsList = await student
    .find({ class: "V" })
    .sort({ maths: -1 })
    .limit(3);
  const students = await student
    .find({ class: "V" })
    .sort({ maths: -1 })
    .limit(3)
    .count();
  res.status(200).send(studentsList);
  console.log(students);
});

server.listen(8010, () => {
  console.log("Listening successfully");
  connect();
});
