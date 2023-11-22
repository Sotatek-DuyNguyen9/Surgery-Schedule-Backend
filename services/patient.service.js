const db = require("../db");

module.exports.getAllPatients = async () => {
  const [records] = await db.query("SELECT * FROM patients");
  return records;
};

module.exports.getPatientById = async (id) => {
  const [[record]] = await db.query("SELECT * FROM patients WHERE id = ?", [
    id,
  ]);
  return record;
};

module.exports.deletePatientById = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE FROM patients WHERE id = ?",
    [id]
  );
  return affectedRows;
};

module.exports.createPatient = async (patient) => {
  const [{ affectedRows }] = await db.query(
    "INSERT INTO patients (name, email, description, phoneNumber) VALUES (?, ?, ?, ?)",
    [patient.name, patient.email, patient.description, patient.phoneNumber]
  );
  return affectedRows;
};

module.exports.editPatient = async (patient, id = 0) => {
  const [[currentpatient]] = await db.query(
    "SELECT * FROM patients WHERE id = ?",
    [id]
  );

  const [{ affectedRows }] = await db.query(
    "UPDATE patients SET name=?, description=?, phoneNumber=?, email=? WHERE id=?",
    [
      patient.name || currentpatient.name,
      patient.description || currentpatient.description,
      patient.phoneNumber || currentpatient.phoneNumber,
      patient.email || currentpatient.email,
      id,
    ]
  );
  return affectedRows;
};
