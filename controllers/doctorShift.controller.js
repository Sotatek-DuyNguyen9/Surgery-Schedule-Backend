const express = require("express");
const db = require("../db");
const service = require("../services/doctorShift.service");

router = express.Router();

router.get("/", async (req, res) => {
  const doctorShifts = await service.getAllDoctorShifts();
  res.send(doctorShifts);
});

router.get("/doctor/:id", async (req, res) => {
  const doctorShift = await service.getShiftByDoctorId(req.params.id);
  if (doctorShift.length == 0) 
    res.status(404).json("No doctor found with id: " + req.params.id);
  else res.send(doctorShift);
});

router.get("/:id", async (req, res) => {
  const doctorShift = await service.getDoctorShiftById(req.params.id);
  if (doctorShift == undefined)
    res.status(404).json("No doctor shift found with id: " + req.params.id);
  else res.send(doctorShift);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteDoctorShiftById(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No doctor shift found with id: " + req.params.id);
  else res.send(`Delete doctor shift successfully!`);
});

router.post("/", async (req, res) => {
  const affectedRows = await service.createDoctorShift(req.body);
  if (affectedRows == 1)
    res.status(201).send(`Create doctor shift successfully!`);
  else res.status(500).send("Something went wrong!");
});

router.put("/:id", async (req, res) => {
  if (!req.params.id) res.status(400).json("id doctorShift is required");
  const affectedRows = await service.editDoctorShift(req.body, req.params.id);
  if (affectedRows == 0)
    res
      .status(404)
      .json("No doctor shift found with given id : " + req.params.id);
  else res.send("Updated successfully!");
});

module.exports = router;
