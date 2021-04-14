const mysql = require('mysql');
const inquirer = require('inquirer');
const {config} = require('./creds.js');
const connection = mysql.createConnection(config);
const logo = require("asciiart-logo");

require('console.table'); 

const firstQuestion = [
    {
    type: "list",
    name: "start",
    message: "What would you like to do?",
    choices: 
        [
        "Work with Departments",
        "Work with Roles",
        "Work with Employees",
        "I am finished",
        ]
    }
];
//working  
const departmentsQuestion = [
    {
    type: "list",
    name: "deptQues",
    message: "What would you like to do with Departments?",
    choices: 
        [
        "View all Departments",
        "Add a Department",
        "Remove a Department",
        "I am finished",    
        ]
    }
];    
//working
const roleQuestion = [
    {
    type: "list",
    name: "roleQues",
    message: "What would you like to do with Roles?",
    choices: 
        [
        "View all Roles",
        "Add a Role",
        "Remove a Role",
        "I am finished",    
        ]
    }
];    
//working
const employeeQuestion = [
    {
    type: "list",
    name: "empQues",
    message: "What would you like to do with Employees?",
    choices: 
        [
        "View all Employees",
        "Add an Employee",
        "Remove an Employee",
        "I am finished",    
        ]
    }
];

//working
function startEmployeeTracker() {

    inquirer.prompt(firstQuestion)
    .then(function (answer) {
        if (answer.start === "Work with Departments"){
            askDepartmentsQuestion();
        } else if (answer.start === "Work with Roles"){
            askRoleQuestion();
        } else if (answer.start === "Work with Employees"){
            askEmployeeQuestion(); 
        } else {
            process.exit();
            connection.end();
            }
        })
};

//working
function askDepartmentsQuestion() {
    inquirer.prompt(departmentsQuestion)
    .then(function (answer) {
        if (answer.deptQues === "View all Departments"){
            viewAllDepartments();
        } else if (answer.deptQues === "Add a Department"){
            addDepartment();
        } else if (answer.deptQues === "Remove a Department"){
            deleteDepartment();
        }
    })
};
//working
function askRoleQuestion() {
    inquirer.prompt(roleQuestion)
    .then(function (answer) {
        if (answer.roleQues === "View all Roles"){
            viewAllRoles();
        } else if (answer.roleQues === "Add a Role"){
            addRole();
        } else if (answer.roleQues === "Remove a Role"){
            deleteRole();
        }
    })
};

//working
function askEmployeeQuestion() {
    inquirer.prompt(employeeQuestion)
    .then(function (answer) {
        if (answer.empQues === "View all Employees"){
            viewAllEmployee();
        } else if (answer.empQues === "Add an Employee"){
            addEmployee();
        } else if (answer.empQues === "Remove an Employee"){
            deleteEmployee();
        }
    })
}

//working
function viewAllDepartments() {
    connection.query('SELECT * FROM department', function (err, results) {
    console.table(results);
    startEmployeeTracker();
    });
}

//working
function viewAllEmployee() {
    connection.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
    startEmployeeTracker();
    });
}

//working
function addDepartment() {
    // connection.query('SELECT * FROM department', function (err, results) {
        inquirer.prompt([
            {
            name: "newDeptName",
            type: "input",
            message: "Name of new Department?"    
            },
        ])
        .then ((answer) => {
            const query = connection.query(
                'INSERT INTO department SET ?',
                {
                    dept_name: answer.newDeptName,
                },
            (err, res) => {
                if (err) throw err;
                console.log("New Department Added!");
                startEmployeeTracker();
            }
            );
        });
    };
//working
function deleteDepartment() {

    connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;

    inquirer.prompt([
        {
            name: "deptRemove",
            type: "rawlist",
            choices() {
                const choiceArray = [];
                results.forEach(({ dept_name }) => {
                    choiceArray.push(dept_name);
                });
                return choiceArray;
            },
            message: "Remove Department?",
        }
    ])
    .then ((answer) => {
        const query = connection.query(
            'DELETE FROM department WHERE ?',
            {
                dept_name: answer.deptRemove,
            },
        (err, res) => {
            if (err) throw err;
            console.log("Department Deleted!");
            startEmployeeTracker();
        }
        );
    });
})};


//working
function viewAllRoles() {
    connection.query("SELECT * FROM employee_role", function (err, results) {
    console.table(results);
    startEmployeeTracker();
    });
}
//working
function viewAllEmployee() {
    connection.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    startEmployeeTracker();
    });
}

//working
function addEmployee() {
 
    connection.query('SELECT * FROM employee_role', (err, results) => {
        if (err) throw err;
 
        inquirer.prompt([
            {
            name: "newFirstName",
            type: "input",
            message: "First Name?"    
            },
            {
            name: "newLastName",
            type: "input",
            message: "Last Name?"    
            },
            {
            name: "newEmpRole",
            type: "rawlist",
            choices() {
                const choiceArray = [];
                results.forEach(({ role_id }) => {
                    choiceArray.push(role_id);
                });
                return choiceArray;
            },
            message: "What is their new RoleID?",
            },
        ])
        .then ((answer) => {
            const query = connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answer.newFirstName,
                    last_name: answer.newLastName,
                    role_id : answer.newEmpRole
                },
            (err, res) => {
                if (err) throw err;
                console.log("New employee Added!");
                startEmployeeTracker();
            }
            );
        });
    });
};

//working
function deleteEmployee() {

    connection.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;

    inquirer.prompt([
        {
            name: "empRemove",
            type: "rawlist",
            choices() {
                const choiceArray = [];
                results.forEach(({ employee_id }) => {
                    choiceArray.push(employee_id);
                });
                return choiceArray;
            },
            message: "Remove Employee by ID#",
        }
    ])
    .then ((answer) => {
        const query = connection.query(
            'DELETE FROM employee WHERE ?',
            {
                employee_id : answer.empRemove,
            },
        (err, res) => {
            if (err) throw err;
            console.log("Employee Terminated!");
            startEmployeeTracker();
        }
        );
    });
})};

//working 
function addRole() {
    connection.query('SELECT * FROM department', function (err, results) {
        inquirer.prompt([
            {
            name: "chooseDeptName",
            type: "rawlist",
            choices() {
                const choiceArray = [];
                results.forEach(({ dept_id }) => {
                    choiceArray.push(dept_id);
                });
                return choiceArray;
            },
            message: "What department will this role report to?"    
            },
            {
            name: "newRoleName",
            type: "input",
            message: "Name of new Role?"    
            },
            {
            name: "newSalary",
            type: "input",
            message: "Yearly Salary?"    
            },
        ])
        .then ((answer) => {
            const query = connection.query(
                'INSERT INTO employee_role SET ?',
                {
                    dept_id : answer.chooseDeptName,
                    title: answer.newRoleName,
                    salary: answer.newSalary
                },
            (err, res) => {
                if (err) throw err;
                console.log("New Role Added!");
                startEmployeeTracker();
            }
            );
        });
    });
};

//working 
function deleteRole() {

    connection.query('SELECT * FROM employee_role', (err, results) => {
        if (err) throw err;

    inquirer.prompt([
        {
            name: "roleRemove",
            type: "rawlist",
            choices() {
                const choiceArray = [];
                results.forEach(({ title }) => {
                    choiceArray.push(title);
                });
                return choiceArray;
            },
            message: "What Role would you like to remove?",
        }
    ])
    .then ((answer) => {
        const query = connection.query(
            'DELETE FROM employee_role WHERE ?',
            {
                title: answer.roleRemove,
            },
        (err, res) => {
            if (err) throw err;
            console.log("Role Deleted!");
            startEmployeeTracker();
        }
        );
    });
})
};

//working
function displayLogo(){
    const logoText = logo(
        {
        name: "My Employee Tracker",
        lineChars: 20,
        padding: 2,
        margin: 2,
        borderColor: 'blue',
        logoColor: 'yellow',
        }
    ).render();
console.log(logoText);
}

//working 
connection.connect(function(err) { 
    if (err) throw err;
    displayLogo();
    startEmployeeTracker();
});