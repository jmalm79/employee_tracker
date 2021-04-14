DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (

    dept_id INTEGER(10) NOT NULL AUTO_INCREMENT,

    dept_name VARCHAR(30),

    PRIMARY KEY (dept_id)

);

CREATE TABLE employee_role (

    role_id INTEGER(10) AUTO_INCREMENT NOT NULL,

    title VARCHAR(40) NOT NULL,

    salary INTEGER(10),

    dept_id INTEGER(10),

    is_manager BOOLEAN DEFAULT FALSE,

    PRIMARY KEY (role_id),

    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

CREATE TABLE employee (

    employee_id INTEGER(10) AUTO_INCREMENT NOT NULL,

    first_name VARCHAR(30) NOT NULL,

    last_name VARCHAR(30) NOT NULL,

    role_id INTEGER(10),

    PRIMARY KEY (employee_id),

    FOREIGN KEY (role_id) REFERENCES employee_role(role_id)

);
