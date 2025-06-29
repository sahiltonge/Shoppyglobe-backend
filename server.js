const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ Add this line

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/shoppyglobe', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('DB Error:', err));

// Routes
app.use('/', authRoutes);           // ✅ Add this line (register/login will work)
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.get('/', (req, res) => {
  res.send('ShoppyGlobe Backend Running');
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
