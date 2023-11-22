const db = require("../db");

module.exports.getAllWorkShifts = async () => {
  const [records] = await db.query("SELECT * FROM work_shifts");
  return records;
};

module.exports.getWorkShiftById = async (id) => {
  const [[record]] = await db.query("SELECT * FROM work_shifts WHERE id = ?", [
    id,
  ]);
  return record;
};

module.exports.deleteWorkShiftById = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE FROM work_shifts WHERE id = ?",
    [id]
  );
  return affectedRows;
};

module.exports.createWorkShift = async (workShift) => {
  const [{ affectedRows }] = await db.query(
    "INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (?, ?, ?)",
    [workShift.dayInWeek, workShift.startDate, workShift.endDate]
  );
  return affectedRows;
};

module.exports.editWorkShift = async (workShift, id = 0) => {
  const [[currentworkShift]] = await db.query(
    "SELECT * FROM work_shifts WHERE id = ?",
    [id]
  );

  const [{ affectedRows }] = await db.query(
    "UPDATE work_shifts SET dayInWeek=?, startDate=?, endDate=? WHERE id=?",
    [
      workShift.dayInWeek || currentworkShift.dayInWeek,
      workShift.startDate || currentworkShift.startDate,
      workShift.endDate || currentworkShift.endDate,
      id,
    ]
  );
  return affectedRows;
};
