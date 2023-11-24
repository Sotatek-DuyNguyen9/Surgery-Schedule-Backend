use surgery_db;

-- rooms
INSERT INTO rooms (name, state)
VALUES ('D201', 'active');
INSERT INTO rooms (name, state)
VALUES ('D202', 'active');
INSERT INTO rooms (name, state)
VALUES ('D203', 'active');

-- patients
INSERT INTO patients (name) VALUES ('Nguyễn Viết Thắng');
INSERT INTO patients (name) VALUES ('Trần Quang Dũng');
INSERT INTO patients (name) VALUES ('Tạ Hải Dũng');
INSERT INTO patients (name) VALUES ('Lê Đức Thọ');
INSERT INTO patients (name) VALUES ('Nguyễn Minh Hải');
INSERT INTO patients (name) VALUES ('Trần Minh Hiếu');
INSERT INTO patients (name) VALUES ('Nguyễn Trung Hiếu');
INSERT INTO patients (name) VALUES ('Phạm Quang Vinh');

-- doctor data
INSERT INTO doctors (name) VALUES ('Nguyễn Thanh Liêm');
INSERT INTO doctors (name) VALUES ('Đoàn Trung Hiệp');
INSERT INTO doctors (name) VALUES ('Võ Thành Nhân');
INSERT INTO doctors (name) VALUES ('Nguyễn Thái Trí');
INSERT INTO doctors (name) VALUES ('Phạm Nhật An');
INSERT INTO doctors (name) VALUES ('Lê Trọng Bình');

-- surgery type
INSERT INTO surgery_types (name, expectedTime, priority) VALUES ('Phẫu thuật tim', 1, 1);
INSERT INTO surgery_types (name, expectedTime, priority) VALUES ('Phẫu thuật ruột thừa', 1, 1);
INSERT INTO surgery_types (name, expectedTime, priority) VALUES ('Phẫu thuật mắt', 1, 1);
INSERT INTO surgery_types (name, expectedTime, priority) VALUES ('Phẫu thuật phổi', 1, 1);

-- work shift
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (0, '7', '12');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (0, '14', '18');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (1, '7', '12');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (1, '14', '18');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (2, '7', '12');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (2, '14', '18');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (3, '7', '12');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (3, '14', '18');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (4, '7', '12');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (4, '14', '18');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (5, '7', '12');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (5, '14', '18');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (6, '7', '12');
INSERT INTO work_shifts (dayInWeek, startDate, endDate) VALUES (6, '14', '18');

-- doctor shift
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (1, 1, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (1, 2, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (1, 3, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (1, 4, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (1, 5, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (1, 6, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (1, 7, 'active');

INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (2, 1, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (2, 2, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (2, 3, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (2, 4, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (2, 5, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (2, 6, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (2, 7, 'active');

INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (3, 1, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (3, 2, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (3, 3, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (3, 4, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (3, 5, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (3, 6, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (3, 7, 'active');

INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (4, 1, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (4, 2, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (4, 3, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (4, 4, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (4, 5, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (4, 6, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (4, 7, 'active');

INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (5, 1, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (5, 2, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (5, 3, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (5, 4, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (5, 5, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (5, 6, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (5, 7, 'active');

INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (6, 1, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (6, 2, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (6, 3, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (6, 4, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (6, 5, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (6, 6, 'active');
INSERT INTO doctor_shifts (doctorId, shiftId, state) VALUES (6, 7, 'active');

-- doctor major 
INSERT INTO doctor_majors (doctorId, surgeryTypeId) VALUES (1,1);
INSERT INTO doctor_majors (doctorId, surgeryTypeId) VALUES (1,4);
INSERT INTO doctor_majors (doctorId, surgeryTypeId) VALUES (2,1);
INSERT INTO doctor_majors (doctorId, surgeryTypeId) VALUES (3,2);
INSERT INTO doctor_majors (doctorId, surgeryTypeId) VALUES (3,4);
INSERT INTO doctor_majors (doctorId, surgeryTypeId) VALUES (4,2);
INSERT INTO doctor_majors (doctorId, surgeryTypeId) VALUES (5,3);
INSERT INTO doctor_majors (doctorId, surgeryTypeId) VALUES (6,3);

-- surgery
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (1,1);
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (2,2);
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (3,3);
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (1,4);
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (3,5);
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (3,6);
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (2,7);
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (2,8);
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (4,9);
INSERT INTO surgeries (surgeryTypeId, priority) VALUE (4,10);