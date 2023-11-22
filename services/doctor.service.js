const db = require("../db");

module.exports.getAllDoctors = async () => {
  const [records] = await db.query("SELECT * FROM doctors");
  return records;
};

module.exports.getDoctorById = async (id) => {
  const [[record]] = await db.query("SELECT * FROM doctors WHERE id = ?", [id]);
  return record;
};

module.exports.deleteDoctorById = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE FROM doctors WHERE id = ?",
    [id]
  );
  return affectedRows;
};

module.exports.createDoctor = async (doctor) => {
  const [{ affectedRows }] = await db.query(
    "INSERT INTO doctors (name, major, phoneNumber, email) VALUES (?, ?, ?, ?)",
    [doctor.name, doctor.major, doctor.phoneNumber, doctor.email]
  );
  return affectedRows;
};

module.exports.editDoctor = async (doctor, id = 0) => {
  const [[currentDoctor]] = await db.query(
    "SELECT * FROM doctors WHERE id = ?",
    [id]
  );

  const [{ affectedRows }] = await db.query(
    "UPDATE doctors SET name=?, major=?, phoneNumber=?, email=? WHERE id=?",
    [
      doctor.name || currentDoctor.name,
      doctor.major || currentDoctor.major,
      doctor.phoneNumber || currentDoctor.phoneNumber,
      doctor.email || currentDoctor.email,
      id,
    ]
  );
  return affectedRows;
};
