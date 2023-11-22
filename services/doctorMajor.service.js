const db = require("../db");

module.exports.getAllDoctorMajors = async () => {
  const [records] = await db.query("SELECT * FROM doctor_majors");
  return records;
};

module.exports.getDoctorMajorById = async (id) => {
  const [[record]] = await db.query(
    "SELECT * FROM doctor_majors WHERE id = ?",
    [id]
  );
  return record;
};

module.exports.deleteDoctorMajorById = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE FROM doctor_majors WHERE id = ?",
    [id]
  );
  return affectedRows;
};

module.exports.createDoctorMajor = async (doctorMajor) => {
  const [{ affectedRows }] = await db.query(
    "INSERT INTO doctor_majors (surgeryTypeId, doctorId, qualification) VALUES (?, ?, ?)",
    [doctorMajor.surgeryTypeId, doctorMajor.doctorId, doctorMajor.qualification]
  );
  return affectedRows;
};

module.exports.editDoctorMajor = async (doctorMajor, id = 0) => {
  const [[currentDoctorMajor]] = await db.query(
    "SELECT * FROM doctor_majors WHERE id = ?",
    [id]
  );

  const [{ affectedRows }] = await db.query(
    "UPDATE doctor_majors SET surgeryTypeId=?, doctorId=?, qualification=? WHERE id=?",
    [
      doctorMajor.surgeryTypeId || currentDoctorMajor.surgeryTypeId,
      doctorMajor.doctorId || currentDoctorMajor.doctorId,
      doctorMajor.qualification || currentDoctorMajor.qualification,
      id,
    ]
  );
  return affectedRows;
};
