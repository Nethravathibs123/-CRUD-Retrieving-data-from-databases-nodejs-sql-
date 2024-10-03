const mysql = require('mysql2');

// Create a pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodecomplete',
    password: 'Nethra@1'
});

module.exports = pool.promise();