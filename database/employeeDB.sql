DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (

    dept_id INTEGER(10) NOT NULL,

    dept_name VARCHAR(30),

    PRIMARY KEY (dept_id)

);

CREATE TABLE employee_role (

    role_id INTEGER(10) NOT NULL,

    title VARCHAR(40) NOT NULL,

    salary INTEGER(10),

    dept_id INTEGER(10),

    is_manager BOOLEAN DEFAULT FALSE,

    PRIMARY KEY (role_id)
);

CREATE TABLE employee (

    employee_id INTEGER(10),

    first_name VARCHAR(30) NOT NULL,

    last_name VARCHAR(30) NOT NULL,

    role_id VARCHAR(30),

    manager_id VARCHAR(10)

);

INSERT INTO department (dept_id, dept_name)
VALUES 
    (10, "Sales & Marketing"),
    (20, "Engineering & Development"),
    (30, "Purchasing"),
    (40, "Production"),
    (50, "Shipping & Receiving"),
    (90, "Human Resources"),
    (100, "Facilities");


INSERT INTO employee_role (role_id, title, salary, dept_id, is_manager) 
VALUES
    (11, "Sales & Marketing Manager", 150000, 10, TRUE),
    (21, "Engineering & Development Manager", 200000, 20, TRUE),
    (31, "Purchasing Manager", 150000, 30, TRUE),
    (41, "Production Manager", 75000, 40, TRUE),
    (51, "Shipping & Receiving Manager", 50000, 50, TRUE),
    (91, "Human Resources Manager", 100000, 90, TRUE),
    (101, "Facilities Manager", 80000, 100, TRUE);

INSERT INTO employee_role (role_id, title, salary, dept_id) 
VALUES   
    (12, "Sales Rep", 75000, 10),
    (13, "Marketing Associate", 70000, 10),
    (32, "Sr. Purchasor", 65000, 30),
    (33, "Jr. Purchasor", 40000, 30),
    (42, "Press Operator", 40000, 40),
    (43, "Parts Runner", 30000, 40),
    (44, "Material Handler", 35000, 40),
    (22, "Engineer", 125000, 20),
    (23, "Developer", 120000, 20),
    (52, "Shipping Associate", 32500, 50),
    (53, "Receiving Associate", 32500, 50),
    (92, "HR Generalist", 65000, 90),
    (102, "Maintenance Technician", 55000, 100),
    (103, "Custodian", 37500, 100);
    
