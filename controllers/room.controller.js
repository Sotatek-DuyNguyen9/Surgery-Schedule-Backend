const express = require("express");
const db = require("../db");
const service = require("../services/room.service");

router = express.Router();

router.get("/", async (req, res) => {
  const rooms = await service.getAllRooms();
  res.send(rooms);
});

router.get("/:id", async (req, res) => {
  const room = await service.getRoomById(req.params.id);
  if (room == undefined)
    res.status(404).json("No room found with id: " + req.params.id);
  else res.send(room);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteRoomById(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No room found with id: " + req.params.id);
  else res.send(`Delete room successfully!`);
});

router.post("/", async (req, res) => {
  const affectedRows = await service.createRoom(req.body);
  if (affectedRows == 1) res.status(201).send(`Create room successfully!`);
  else res.status(500).send("Something went wrong!");
});

router.put("/:id", async (req, res) => {
  if (!req.params.id) res.status(400).json("id room is required");
  const affectedRows = await service.editRoom(req.body, req.params.id);
  if (affectedRows == 0)
    res.status(404).json("No room found with given id : " + req.params.id);
  else res.send("Updated successfully!");
});

module.exports = router;
