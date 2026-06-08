const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/db');
const contactRouter = require('./src/routes/contact');
const projectRouter = require('./src/routes/projects');
const blogRouter = require('./src/routes/blog');
const errorHandler = require('./src/middleware/errorHandler');

// Load models so Sequelize registers them before sync
require('./src/models/Message');
require('./src/models/Project');
require('./src/models/BlogPost');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ MySQL connected');
    return sequelize.sync();
  })
  .then(() => console.log('✅ Tables synced'))
  .catch((err) => console.error('❌ MySQL error:', err.message));

app.get('/', (req, res) => res.json({ message: 'Portfolio API is running 🚀' }));
app.use('/api/contact', contactRouter);
app.use('/api/projects', projectRouter);
app.use('/api/blog', blogRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
