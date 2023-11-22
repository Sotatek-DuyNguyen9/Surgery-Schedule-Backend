const express = require("express");
const db = require("../db");
const service = require("../services/surgery.service");

router = express.Router();

router.get("/", async (req, res) => {
  const surgeries = await service.getAllSurgeries();
  res.send(surgeries);
});

router.get("/:id", async (req, res) => {
  const surgery = await service.getSurgeryById(req.params.id);
  if (surgery == undefined)
    res.status(404).json("No surgery found with id: " + req.params.id);
  else res.send(surgery);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteSurgeryById(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No surgery found with id: " + req.params.id);
  else res.send(`Delete surgery successfully!`);
});

router.post("/", async (req, res) => {
  const affectedRows = await service.createSurgery(req.body);
  if (affectedRows == 1) res.status(201).send(`Create surgery successfully!`);
  else res.status(500).send("Something went wrong!");
});

router.put("/:id", async (req, res) => {
  if (!req.params.id) res.status(400).json("id surgery is required");
  const affectedRows = await service.editSurgery(req.body, req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No surgery found with given id : " + req.params.id);
  else res.send("Updated successfully!");
});

module.exports = router;
