const express = require("express");
const db = require("../db");
const service = require("../services/workShift.service");

router = express.Router();

router.get("/", async (req, res) => {
  const workShifts = await service.getAllWorkShifts();
  res.send(workShifts);
});

router.get("/:id", async (req, res) => {
  const workShift = await service.getWorkShiftById(req.params.id);
  if (workShift == undefined)
    res.status(404).json("No work shift found with id: " + req.params.id);
  else res.send(workShift);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteWorkShiftById(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No work shift found with id: " + req.params.id);
  else res.send(`Delete work shift successfully!`);
});

router.post("/", async (req, res) => {
  const affectedRows = await service.createWorkShift(req.body);
  if (affectedRows == 1)
    res.status(201).send(`Create work shift successfully!`);
  else res.status(500).send("Something went wrong!");
});

router.put("/:id", async (req, res) => {
  if (!req.params.id) res.status(400).json("id work shift is required");
  const affectedRows = await service.editWorkShift(req.body, req.params.id);
  if (affectedRows == 0)
    res
      .status(404)
      .json("No work shift found with given id : " + req.params.id);
  else res.send("Update work shift successfully!");
});

module.exports = router;
