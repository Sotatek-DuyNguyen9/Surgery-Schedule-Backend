const db = require("../db");

module.exports.getAllDoctorShifts = async () => {
  const [records] = await db.query("SELECT * FROM doctor_shifts");
  return records;
};

module.exports.getDoctorShiftById = async (id) => {
  const [[record]] = await db.query(
    "SELECT * FROM doctor_shifts WHERE id = ?",
    [id]
  );
  return record;
};

module.exports.deleteDoctorShiftById = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE FROM doctor_shifts WHERE id = ?",
    [id]
  );
  return affectedRows;
};

module.exports.createDoctorShift = async (doctorShift) => {
  const [{ affectedRows }] = await db.query(
    "INSERT INTO doctor_shifts (shiftId, doctorId, state) VALUES (?, ?, ?)",
    [doctorShift.shiftId, doctorShift.doctorId, doctorShift.state]
  );
  return affectedRows;
};

module.exports.editDoctorShift = async (doctorShift, id = 0) => {
  const [[currentDoctorShift]] = await db.query(
    "SELECT * FROM doctor_shifts WHERE id = ?",
    [id]
  );

  const [{ affectedRows }] = await db.query(
    "UPDATE doctor_shifts SET shiftId=?, doctorId=?, state=? WHERE id=?",
    [
      doctorShift.shiftId || currentDoctorShift.shiftId,
      doctorShift.doctorId || currentDoctorShift.doctorId,
      doctorShift.state || currentDoctorShift.state,
      id,
    ]
  );
  return affectedRows;
};
