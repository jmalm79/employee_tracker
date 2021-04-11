const mysql = require('mysql');
const {config} = require('./creds.js');
const cTable = require('console.table') 

const connection = mysql.createConnection(config);

const afterConnection = () => {
    connection.query('SELECT * FROM department', (err, res) => {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  };
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    afterConnection();
  });
  