const db = require("../db");

const getFullInfoDoctorQuery = `SELECT doctors.id,
doctors.name, doctors.major, doctors.phoneNumber, doctors.email,
GROUP_CONCAT(DISTINCT doctor_shifts.shiftId) AS doctorShift,
GROUP_CONCAT(DISTINCT doctor_majors.surgeryTypeId) AS doctorMajor,
doctors.createdAt, doctors.updatedAt
FROM doctors
LEFT JOIN doctor_shifts ON doctors.id = doctor_shifts.doctorId
LEFT JOIN doctor_majors ON doctors.id = doctor_majors.doctorId
GROUP BY doctors.id`

module.exports.getAllDoctors = async () => {
  const [records] = await db.query(getFullInfoDoctorQuery);
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
