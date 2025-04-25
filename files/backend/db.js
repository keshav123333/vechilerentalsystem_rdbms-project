const mysql = require('mysql2/promise');
module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'YOUR_PASSWORD',
  database: 'vehicle_rental',
  waitForConnections: true,
});