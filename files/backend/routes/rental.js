const router = require('express').Router();
const pool   = require('../db');

router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Rental');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { CustomerID,VehicleID,RentalDate,ReturnDate,TotalAmount } = req.body;
  const [r] = await pool.query(
    'INSERT INTO Rental (CustomerID,VehicleID,RentalDate,ReturnDate,TotalAmount) VALUES (?,?,?,?,?)',
    [CustomerID,VehicleID,RentalDate,ReturnDate,TotalAmount]
  );
  res.json({ RentalID: r.insertId });
});

module.exports = router;