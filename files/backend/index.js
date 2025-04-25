const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customer');
const vehicleRoutes  = require('./routes/vehicle');
const rentalRoutes   = require('./routes/rental');
const paymentRoutes  = require('./routes/payment');

const app = express();
app.use(cors(), express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/vehicles',  vehicleRoutes);
app.use('/api/rentals',   rentalRoutes);
app.use('/api/payments',  paymentRoutes);

app.listen(4000, () =>
  console.log('Backend running on http://localhost:4000')
);