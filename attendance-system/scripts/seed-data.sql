-- Seed data for attendance management system

-- Insert departments
INSERT INTO departments (name, code) VALUES
('Computer Science', 'CS'),
('Mathematics', 'MATH'),
('Physics', 'PHYS'),
('Chemistry', 'CHEM'),
('Biology', 'BIO');

-- Insert admin user
INSERT INTO users (email, password_hash, role, first_name, last_name) VALUES
('admin@school.edu', '$2b$10$example_hash', 'admin', 'System', 'Administrator');

-- Insert teachers
INSERT INTO users (email, password_hash, role, first_name, last_name) VALUES
('john.smith@school.edu', '$2b$10$example_hash', 'teacher', 'John', 'Smith'),
('sarah.wilson@school.edu', '$2b$10$example_hash', 'teacher', 'Sarah', 'Wilson'),
('michael.brown@school.edu', '$2b$10$example_hash', 'teacher', 'Michael', 'Brown'),
('emily.davis@school.edu', '$2b$10$example_hash', 'teacher', 'Emily', 'Davis');

-- Insert teacher records
INSERT INTO teachers (user_id, employee_id, department_id, designation, hire_date) VALUES
((SELECT id FROM users WHERE email = 'john.smith@school.edu'), 'T001', 1, 'Professor', '2020-01-15'),
((SELECT id FROM users WHERE email = 'sarah.wilson@school.edu'), 'T002', 1, 'Associate Professor', '2019-08-20'),
((SELECT id FROM users WHERE email = 'michael.brown@school.edu'), 'T003', 2, 'Assistant Professor', '2021-03-10'),
((SELECT id FROM users WHERE email = 'emily.davis@school.edu'), 'T004', 1, 'Lecturer', '2022-01-05');

-- Insert student users
INSERT INTO users (email, password_hash, role, first_name, last_name) VALUES
('alice.johnson@student.edu', '$2b$10$example_hash', 'student', 'Alice', 'Johnson'),
('bob.smith@student.edu', '$2b$10$example_hash', 'student', 'Bob', 'Smith'),
('charlie.brown@student.edu', '$2b$10$example_hash', 'student', 'Charlie', 'Brown'),
('diana.prince@student.edu', '$2b$10$example_hash', 'student', 'Diana', 'Prince'),
('edward.norton@student.edu', '$2b$10$example_hash', 'student', 'Edward', 'Norton'),
('fiona.green@student.edu', '$2b$10$example_hash', 'student', 'Fiona', 'Green'),
('george.wilson@student.edu', '$2b$10$example_hash', 'student', 'George', 'Wilson'),
('hannah.davis@student.edu', '$2b$10$example_hash', 'student', 'Hannah', 'Davis');

-- Insert student records
INSERT INTO students (user_id, roll_number, department_id, year_of_study, enrollment_date) VALUES
((SELECT id FROM users WHERE email = 'alice.johnson@student.edu'), 'CS001', 1, 2, '2023-09-01'),
((SELECT id FROM users WHERE email = 'bob.smith@student.edu'), 'CS002', 1, 3, '2022-09-01'),
((SELECT id FROM users WHERE email = 'charlie.brown@student.edu'), 'CS003', 1, 1, '2024-09-01'),
((SELECT id FROM users WHERE email = 'diana.prince@student.edu'), 'CS004', 1, 4, '2021-09-01'),
((SELECT id FROM users WHERE email = 'edward.norton@student.edu'), 'CS005', 1, 2, '2023-09-01'),
((SELECT id FROM users WHERE email = 'fiona.green@student.edu'), 'CS006', 1, 1, '2024-09-01'),
((SELECT id FROM users WHERE email = 'george.wilson@student.edu'), 'CS007', 1, 3, '2022-09-01'),
((SELECT id FROM users WHERE email = 'hannah.davis@student.edu'), 'CS008', 1, 2, '2023-09-01');

-- Insert courses
INSERT INTO courses (name, code, department_id, credits, semester, year, description) VALUES
('Introduction to Computer Science', 'CS101', 1, 3, 1, 1, 'Basic concepts of computer science and programming'),
('Data Structures', 'CS201', 1, 4, 1, 2, 'Fundamental data structures and algorithms'),
('Algorithms', 'CS301', 1, 4, 1, 3, 'Advanced algorithms and complexity analysis'),
('Database Systems', 'CS202', 1, 3, 2, 2, 'Database design and management systems'),
('Software Engineering', 'CS401', 1, 3, 1, 4, 'Software development methodologies and practices');

-- Insert classes
INSERT INTO classes (course_id, teacher_id, room_number, schedule_day, start_time, end_time, semester, academic_year, max_students) VALUES
(1, 1, 'Room 204', 'Monday', '09:00:00', '10:30:00', 'Fall 2024', '2024-25', 50),
(2, 2, 'Room 301', 'Tuesday', '11:00:00', '12:30:00', 'Fall 2024', '2024-25', 45),
(3, 1, 'Room 204', 'Wednesday', '14:00:00', '15:30:00', 'Fall 2024', '2024-25', 40),
(4, 4, 'Room 105', 'Thursday', '16:00:00', '17:30:00', 'Fall 2024', '2024-25', 35),
(5, 2, 'Room 302', 'Friday', '10:00:00', '11:30:00', 'Fall 2024', '2024-25', 30);

-- Insert enrollments
INSERT INTO enrollments (student_id, class_id, enrollment_date) VALUES
(1, 1, '2024-09-01'), (1, 2, '2024-09-01'), (1, 4, '2024-09-01'),
(2, 2, '2024-09-01'), (2, 3, '2024-09-01'), (2, 5, '2024-09-01'),
(3, 1, '2024-09-01'), (3, 2, '2024-09-01'),
(4, 3, '2024-09-01'), (4, 4, '2024-09-01'), (4, 5, '2024-09-01'),
(5, 1, '2024-09-01'), (5, 2, '2024-09-01'), (5, 4, '2024-09-01'),
(6, 1, '2024-09-01'), (6, 2, '2024-09-01'),
(7, 2, '2024-09-01'), (7, 3, '2024-09-01'), (7, 5, '2024-09-01'),
(8, 1, '2024-09-01'), (8, 2, '2024-09-01'), (8, 4, '2024-09-01');

-- Insert sample attendance sessions
INSERT INTO attendance_sessions (class_id, date, start_time, session_type, created_by) VALUES
(1, '2024-12-02', '09:00:00', 'regular', 1),
(1, '2024-12-09', '09:00:00', 'regular', 1),
(2, '2024-12-03', '11:00:00', 'regular', 2),
(2, '2024-12-10', '11:00:00', 'regular', 2),
(3, '2024-12-04', '14:00:00', 'regular', 1),
(4, '2024-12-05', '16:00:00', 'regular', 4);

-- Insert sample attendance records
INSERT INTO attendance_records (session_id, student_id, status, marked_by) VALUES
-- Session 1 (CS101 - Dec 2)
(1, 1, 'present', 1), (1, 3, 'present', 1), (1, 5, 'absent', 1), (1, 6, 'present', 1), (1, 8, 'present', 1),
-- Session 2 (CS101 - Dec 9)
(2, 1, 'present', 1), (2, 3, 'late', 1), (2, 5, 'present', 1), (2, 6, 'present', 1), (2, 8, 'absent', 1),
-- Session 3 (Data Structures - Dec 3)
(3, 1, 'present', 2), (3, 2, 'present', 2), (3, 3, 'present', 2), (3, 5, 'absent', 2), (3, 7, 'present', 2), (3, 8, 'present', 2),
-- Session 4 (Data Structures - Dec 10)
(4, 1, 'present', 2), (4, 2, 'present', 2), (4, 3, 'present', 2), (4, 5, 'present', 2), (4, 7, 'absent', 2), (4, 8, 'present', 2),
-- Session 5 (Algorithms - Dec 4)
(5, 2, 'present', 1), (5, 4, 'present', 1), (5, 7, 'present', 1),
-- Session 6 (Database Systems - Dec 5)
(6, 1, 'present', 4), (6, 4, 'present', 4), (6, 5, 'late', 4), (6, 8, 'present', 4);
