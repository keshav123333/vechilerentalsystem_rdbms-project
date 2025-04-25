const router = require('express').Router();
const pool   = require('../db');

router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Customer');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { Name, Address, PhoneNumber, Email } = req.body;
  const [r] = await pool.query(
    'INSERT INTO Customer (Name,Address,PhoneNumber,Email) VALUES (?,?,?,?)',
    [Name,Address,PhoneNumber,Email]
  );
  res.json({ CustomerID: r.insertId });
});

module.exports = router;