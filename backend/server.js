const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRouter = require('./src/routes/contact');
const errorHandler = require('./src/middleware/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.json({ message: 'Portfolio API is running 🚀' }));
app.use('/api/contact', contactRouter);

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
