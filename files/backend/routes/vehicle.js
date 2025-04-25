const router = require('express').Router();
const pool   = require('../db');

router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Vehicle');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { Model,Make,Year,LicensePlate,RentalRate } = req.body;
  const [r] = await pool.query(
    'INSERT INTO Vehicle (Model,Make,Year,LicensePlate,RentalRate) VALUES (?,?,?,?,?)',
    [Model,Make,Year,LicensePlate,RentalRate]
  );
  res.json({ VehicleID: r.insertId });
});

module.exports = router;