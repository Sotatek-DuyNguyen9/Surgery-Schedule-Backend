const express = require("express");
const db = require("../db");
const service = require("../services/doctor.service");

router = express.Router();

router.get("/", async (req, res) => {
  const doctors = await service.getAllDoctors();
  res.send(doctors);
});

router.get("/:id", async (req, res) => {
  const doctor = await service.getDoctorById(req.params.id);
  if (doctor == undefined)
    res.status(404).json("No doctor found with id: " + req.params.id);
  else res.send(doctor);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteDoctorById(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No doctor found with id: " + req.params.id);
  else res.send(`Delete doctor successfully!`);
});

router.post("/", async (req, res) => {
  await service.createDoctor(req.body);
  res.status(201).send("Created successfully!");
});

router.put("/:id", async (req, res) => {
  if (!req.params.id) res.status(400).json("id doctor is required");
  const affectedRows = await service.editDoctor(req.body, req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No doctor found with given id : " + req.params.id);
  else res.send("Updated successfully!");
});

module.exports = router;
