const express = require("express");
app = express();
require("express-async-errors");
bodyparser = require("body-parser");

const db = require("./db");
roomRoutes = require("./controllers/room.controller");
doctorRoutes = require("./controllers/doctor.controller");
patientRoutes = require("./controllers/patient.controller");
surgeryRoutes = require("./controllers/surgery.controller");
surgeryTypeRoutes = require("./controllers/surgeryType.controller");
workShiftRoutes = require("./controllers/workShift.controller");
doctorMajorRoutes = require("./controllers/doctorMajor.controller");
doctorShiftRoutes = require("./controllers/doctorShift.controller");

//middleware
app.use(bodyparser.json());

app.use("/rooms", roomRoutes);
app.use("/doctors", doctorRoutes);
app.use("/patients", patientRoutes);
app.use("/surgeries", surgeryRoutes);
app.use("/workShifts", workShiftRoutes);
app.use("/surgeryTypes", surgeryTypeRoutes);
app.use("/doctorMajors", doctorMajorRoutes);
app.use("/doctorShifts", doctorShiftRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong!");
});

db.query("SELECT 1")
  .then(() => {
    console.log("db connection successful");
    app.listen(3003, () => console.log("server started at 3003"));
  })
  .catch((err) => console.log("Database connection failed: " + err));
