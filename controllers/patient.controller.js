const express = require("express");
const db = require("../db");
const service = require("../services/patient.service");

router = express.Router();

router.get("/", async (req, res) => {
  const patients = await service.getAllPatients();
  res.send(patients);
});

router.get("/:id", async (req, res) => {
  const patient = await service.getPatientById(req.params.id);
  if (patient == undefined)
    res.status(404).json("No patient found with id: " + req.params.id);
  else res.send(patient);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deletePatientById(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No patient found with id: " + req.params.id);
  else res.send(`Delete patient successfully!`);
});

router.post("/", async (req, res) => {
  await service.createPatient(req.body);
  res.status(201).send("Created successfully!");
});

router.put("/:id", async (req, res) => {
  if (!req.params.id) res.status(400).json("id patient is required");
  const affectedRows = await service.editPatient(req.body, req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No patient found with given id : " + req.params.id);
  else res.send("Updated successfully!");
});

module.exports = router;
