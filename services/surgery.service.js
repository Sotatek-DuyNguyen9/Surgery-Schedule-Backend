const db = require("../db");

module.exports.getAllSurgeries = async () => {
  const [records] = await db.query("SELECT * FROM surgeries");
  return records;
};

module.exports.getSurgeryById = async (id) => {
  const [[record]] = await db.query("SELECT * FROM surgeries WHERE id = ?", [
    id,
  ]);
  return record;
};

module.exports.deleteSurgeryById = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE FROM surgeries WHERE id = ?",
    [id]
  );
  return affectedRows;
};

module.exports.createSurgery = async (surgery) => {
  const [{ affectedRows }] = await db.query(
    "INSERT INTO surgeries (roomId, doctorId, patientId, surgeryTypeId, state, priority, expectedEndDate, actualEndDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      surgery.roomId,
      surgery.doctorId,
      surgery.patientId,
      surgery.surgeryTypeId,
      surgery.state,
      surgery.priority,
      surgery.expectedEndDate,
      surgery.actualEndDate,
    ]
  );
  return affectedRows;
};

module.exports.editSurgery = async (surgery, id = 0) => {
  const [[currentSurgery]] = await db.query(
    "SELECT * FROM surgeries WHERE id = ?",
    [id]
  );

  const [{ affectedRows }] = await db.query(
    "UPDATE surgeries SET roomId=?, doctorId=?, patientId=?, surgeryTypeId=?, state=?, priority=?, expectedEndDate=?, actualEndDate=? WHERE id=?",
    [
      surgery.roomId || currentSurgery.roomId,
      surgery.doctorId || currentSurgery.doctorId,
      surgery.patientId || currentSurgery.patientId,
      surgery.surgeryTypeId || currentSurgery.surgeryTypeId,
      surgery.state || currentSurgery.state,
      surgery.priority || currentSurgery.priority,
      surgery.expectedEndDate || currentSurgery.expectedEndDate,
      surgery.actualEndDate || currentSurgery.actualEndDate,
      id,
    ]
  );
  return affectedRows;
};
