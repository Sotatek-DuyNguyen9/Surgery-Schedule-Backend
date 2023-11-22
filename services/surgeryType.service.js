const db = require("../db");

module.exports.getAllSurgeryTypes = async () => {
  const [records] = await db.query("SELECT * FROM surgery_types");
  return records;
};

module.exports.getSurgeryTypeById = async (id) => {
  const [[record]] = await db.query(
    "SELECT * FROM surgery_types WHERE id = ?",
    [id]
  );
  return record;
};

module.exports.deleteSurgeryTypeById = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE FROM surgery_types WHERE id = ?",
    [id]
  );
  return affectedRows;
};

module.exports.createSurgeryType = async (surgeryType) => {
  const [{ affectedRows }] = await db.query(
    "INSERT INTO surgery_types (name, expectedTime, priority) VALUES (?, ?, ?)",
    [surgeryType.name, surgeryType.expectedTime, surgeryType.priority || 1]
  );
  return affectedRows;
};

module.exports.editSurgeryType = async (surgeryType, id = 0) => {
  const [[currentSurgeryType]] = await db.query(
    "SELECT * FROM surgery_types WHERE id = ?",
    [id]
  );

  const [{ affectedRows }] = await db.query(
    "UPDATE surgery_types SET name=?, expectedTime=?, priority=? WHERE id=?",
    [
      surgeryType.name || currentSurgeryType.name,
      surgeryType.expectedTime || currentSurgeryType.expectedTime,
      surgeryType.priority || currentSurgeryType.priority,
      id,
    ]
  );
  return affectedRows;
};
