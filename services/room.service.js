const db = require("../db");

module.exports.getAllRooms = async () => {
  const [records] = await db.query("SELECT * FROM rooms");
  return records;
};

module.exports.getRoomById = async (id) => {
  const [[record]] = await db.query("SELECT * FROM rooms WHERE id = ?", [id]);
  return record;
};

module.exports.deleteRoomById = async (id) => {
  const [{ affectedRows }] = await db.query("DELETE FROM rooms WHERE id = ?", [
    id,
  ]);
  return affectedRows;
};

module.exports.createRoom = async (room) => {
  const [{ affectedRows }] = await db.query(
    "INSERT INTO rooms (name, location, state) VALUES (?, ?, ?)",
    [room.name, room.location, room.state]
  );
  return affectedRows;
};

module.exports.editRoom = async (room, id = 0) => {
  const [[currentRoom]] = await db.query("SELECT * FROM rooms WHERE id = ?", [
    id,
  ]);

  const [{ affectedRows }] = await db.query(
    "UPDATE rooms SET name=?, location=?, state=? WHERE id=?",
    [
      room.name || currentRoom.name,
      room.location || currentRoom.location,
      room.state || currentRoom.state,
      id,
    ]
  );
  return affectedRows;
};
