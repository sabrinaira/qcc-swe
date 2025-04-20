-- DROP TABLE IF EXISTS employee1;

CREATE TABLE EMPLOYEE1 (
  empId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

SELECT * FROM employee1

ALTER TABLE employee1
RENAME COLUMN name TO employee_name;

-- rename table
ALTER TABLE employee1
RENAME TO employee;

ALTER TABLE employee
ADD COLUMN email VARCHAR(255);

SELECT * FROM employee;

ALTER TABLE employee
ALTER COLUMN dept TYPE varchar(255);
-- ALTER TABLE employee
-- ALTER COLUMN employee_name TYPE varchar(255),
-- ALTER COLUMN dept TYPE varchar(255)
DROP TABLE employee

-- add constraint
-- finished creating owner's and pets tables with constraints


