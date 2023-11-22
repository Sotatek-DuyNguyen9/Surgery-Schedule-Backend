const express = require("express");
const db = require("../db");
const service = require("../services/surgeryType.service");

router = express.Router();

router.get("/", async (req, res) => {
  const surgeryTypes = await service.getAllSurgeryTypes();
  res.send(surgeryTypes);
});

router.get("/:id", async (req, res) => {
  const surgeryType = await service.getSurgeryTypeById(req.params.id);
  if (surgeryType == undefined)
    res.status(404).json("No surgery type found with id: " + req.params.id);
  else res.send(surgeryType);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteSurgeryTypeById(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No surgery type found with id: " + req.params.id);
  else res.send(`Delete surgery type successfully!`);
});

router.post("/", async (req, res) => {
  const affectedRows = await service.createSurgeryType(req.body);
  if (affectedRows == 1)
    res.status(201).send(`Create surgery type successfully!`);
  else res.status(500).send("Something went wrong!");
});

router.put("/:id", async (req, res) => {
  if (!req.params.id) res.status(400).json("id surgery type is required");
  const affectedRows = await service.editSurgeryType(req.body, req.params.id);
  if (affectedRows == 0)
    res
      .status(404)
      .json("No surgery type found with given id : " + req.params.id);
  else res.send("Update surgery type successfully!");
});

module.exports = router;
