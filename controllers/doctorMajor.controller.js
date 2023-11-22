const express = require("express");
const db = require("../db");
const service = require("../services/doctorMajor.service");

router = express.Router();

router.get("/", async (req, res) => {
  const doctorMajors = await service.getAllDoctorMajors();
  res.send(doctorMajors);
});

router.get("/:id", async (req, res) => {
  const doctorMajor = await service.getDoctorMajorById(req.params.id);
  if (doctorMajor == undefined)
    res.status(404).json("No doctor major found with id: " + req.params.id);
  else res.send(doctorMajor);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteDoctorMajorById(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No doctor major found with id: " + req.params.id);
  else res.send(`Delete doctor major successfully!`);
});

router.post("/", async (req, res) => {
  const affectedRows = await service.createDoctorMajor(req.body);
  if (affectedRows == 1)
    res.status(201).send(`Create doctor major successfully!`);
  else res.status(500).send("Something went wrong!");
});

router.put("/:id", async (req, res) => {
  if (!req.params.id) res.status(400).json("id doctor major is required");
  const affectedRows = await service.editDoctorMajor(req.body, req.params.id);
  if (affectedRows == 0)
    res
      .status(404)
      .json("No doctor major found with given id : " + req.params.id);
  else res.send("Updated successfully!");
});

module.exports = router;
