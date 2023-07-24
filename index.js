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
  // ================== First Query ==================

  //   const gender = await student.find({gender : req.query.gender});
  //   const gender = await student.find({gender : req.query.gender}).count();
  //   console.log(gender)

  // ================== Second Query ==================

  res.send("Done");
});

server.listen(8010, () => {
  console.log("Listening successfully");
  connect();
});
