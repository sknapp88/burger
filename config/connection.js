var mysql = require('mysql');


var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "youngthing90",
	database: "burgers_db"
});

module.exports = connection;