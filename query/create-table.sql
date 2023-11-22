use surgery_db;

-- Xóa bảng
DROP TABLE IF EXISTS surgeries;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS doctor_majors;
DROP TABLE IF EXISTS doctor_shifts;
DROP TABLE IF EXISTS surgery_types;
DROP TABLE IF EXISTS doctors;
DROP TABLE IF EXISTS work_shifts;
DROP TABLE IF EXISTS patients;


-- Tạo bảng operating_rooms
CREATE TABLE rooms (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  location VARCHAR(200),
  state VARCHAR(20),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng surgery_types
CREATE TABLE surgery_types (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  expectedTime INTEGER,
  priority INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng docters
CREATE TABLE doctors (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  major VARCHAR(50),
  phoneNumber VARCHAR(20),
  email VARCHAR(50),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng docter_majors
CREATE TABLE doctor_majors (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  surgeryTypeId INTEGER,
  doctorId INTEGER,
  FOREIGN KEY (surgeryTypeId) REFERENCES surgery_types(id),
  FOREIGN KEY (doctorId) REFERENCES doctors(id),
  qualification INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng work_shifts
CREATE TABLE work_shifts (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  dayInWeek VARCHAR(50),
  startDate VARCHAR(20),
  endDate VARCHAR(20),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng doctor_work_shift
CREATE TABLE doctor_shifts (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  shiftId INTEGER,
  doctorId INTEGER,
  FOREIGN KEY (shiftId) REFERENCES work_shifts(id),
  FOREIGN KEY (doctorId) REFERENCES doctors(id),
  state VARCHAR(10),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng patients
CREATE TABLE patients (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  phoneNumber VARCHAR(20),
  email VARCHAR(50),
  description VARCHAR(200),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng surgeries
CREATE TABLE surgeries (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  roomId INTEGER,
  doctorId INTEGER,
  patientId INTEGER,
  surgeryTypeId INTEGER,
  FOREIGN KEY (roomId) REFERENCES rooms(id),
  FOREIGN KEY (doctorId) REFERENCES doctors(id),
  FOREIGN KEY (patientId) REFERENCES patients(id),
  FOREIGN KEY (surgeryTypeId) REFERENCES surgery_types(id),
  startDate TIMESTAMP,
  expectedEndDate TIMESTAMP,
  actualEndDate TIMESTAMP,
  state VARCHAR(20),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  priority INTEGER
);
