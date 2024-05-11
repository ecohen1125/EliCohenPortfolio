const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const ProjectModel = require("./models/Project");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
// app.use(cors());

mongoose.connect("mongodb+srv://ecohen1125:Portfolio@portfolio-backend.zc2geux.mongodb.net/");

app.get("/getProjects", (req, res) => {
  ProjectModel.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.json(err));
});

app.post("/projects", (req, res) => {
  console.log(req.body);
  ProjectModel.create(req.body)
    .then((project) => res.json("Success"))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ role: user.role });
      } else {
        res.json("Incorrect Password");
      }
    } else {
      res.json("User does not exist");
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  EmployeeModel.create({ name, email, password, role: "user" })
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(3001, () => {
  console.log("Server is running");
});
