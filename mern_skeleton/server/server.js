import mongoose from 'mongoose';
import config from './config/config.js';
import app from './server/express.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import contactRoutes from './server/routes/contactRoutes.js';
import projectRoutes from './server/routes/projectRoutes.js';
import educationRoutes from './server/routes/educationRoutes.js';
import userRoutes from './server/routes/userRoutes.js';

// For ES6 __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// OVERRIDE config for Render
const PORT = process.env.PORT || config.port || 3000;
const MONGO_URI = process.env.MONGODB_URI || config.mongoUri;

console.log('🔧 Environment Configuration:');
console.log('PORT:', PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MongoDB URI provided:', !!MONGO_URI);

// MongoDB connection for Render
mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
}).catch(err => {
  console.error('❌ MongoDB initial connection error:', err.message);
});

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB Connected to:', mongoose.connection.name);
  startServer();
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB Connection Failed:', err.message);
  console.log('⚠️ Starting server without database connection...');
  startServer(); // Start server even if DB fails
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB Disconnected');
});

// Use routes
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', educationRoutes);
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio Backend API - Deployed on Render',
    status: 'online',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    nodeEnv: process.env.NODE_ENV || 'development'
  });
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    uptime: process.uptime()
  });
});

// Serve static files in production (if frontend is built)
if (process.env.NODE_ENV === 'production') {
  // Assuming frontend is built to '../client/dist' relative to server.js location
  const clientPath = path.join(__dirname, '../../client/dist');
  
  app.use(express.static(clientPath));
  
  // Serve React app for any unknown routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });
  
  console.log('📁 Serving static files from:', clientPath);
}

// Handle process termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});

// Global error handler
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
});