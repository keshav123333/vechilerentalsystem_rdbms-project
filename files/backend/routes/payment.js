const router = require('express').Router();
const pool   = require('../db');

router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Payment');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { RentalID,PaymentDate,Amount,PaymentMethod } = req.body;
  const [r] = await pool.query(
    'INSERT INTO Payment (RentalID,PaymentDate,Amount,PaymentMethod) VALUES (?,?,?,?)',
    [RentalID,PaymentDate,Amount,PaymentMethod]
  );
  res.json({ PaymentID: r.insertId });
});

module.exports = router;