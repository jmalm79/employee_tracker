const inquirer = require('inquirer');

const firstQuestion = [
    {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: [
            "View All Employees by Department", 
            "View All employees by Manager", 
            "View All Employees",
            "Add Employee", 
            "Remove Employee", 
            "Add Manager",
            "Remove Manager",
            "Add New Role",
            "Remove Role",
            "Add New Department",
            "Remove Department",
            "Update Employee Role",
            "Update Employee Department", 
            "Update Employee Manager", 
            "View all Roles", ]
    },
];

const newEmployeeQuestion = [
    {
        type: "input",
        message: "First Name?",
        name: "firstName"
    },
    {
        type: "input",
        message: "Last Name?",
        name: "lastName"
    },
    {
        type: "list",
        message: "Role?",
        choices: [
            "Sales Rep",
            "Marketing Associate",
            "Sr. Purchasor",
            "Jr. Purchasor",
            "Press Operator",
            "Parts Runner",
            "Material Handler",
            "Engineer",
            "Developer",
            "Shipping Associate",
            "Receiving Associate",
            "HR Generalist",
            "Maintenance Technician",
            "Custodian",
    ]
    }
];

const newManagerQuestion = [
    {
        type: "input",
        message: "First Name?",
        name: "firstName"
    },
    {
        type: "input",
        message: "Last Name?",
        name: "lastName"
    },
    {
        type: "list",
        message: "Title?",
        choices: [
            "Sales & Marketing Manager",
            "Engineering & Development Manager",
            "Purchasing Manager",
            "Production Manager",
            "Shipping & Receiving Manager",
            "Human Resources Manager",
            "Facilities Manager"
    ]
    }
];

// const newRoleQuestion =
// const newDepartmentQuestion =
// const removeEmployee = 








