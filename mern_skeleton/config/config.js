const config = {
  env: process.env.NODE_ENV || 'development', 
  port: process.env.PORT || 3000,
  
  // JWT Configuration
  jwtSecret: process.env.JWT_SECRET || "vGeKWQ1VD3rqUmPg", 
  jwtExpiration: process.env.JWT_EXPIRATION || '24h',
  
  // MongoDB Configuration - Priority Order for Render
  mongoUri: 
    // 1. Render Environment Variable (highest priority)
    process.env.MONGODB_URI || 
    
    // 2. Direct connection string
    "mongodb+srv://nli73_db_user:vGeKWQ1VD3rqUmPg@cluster0.easpwl4.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0" ||
    
    // 3. Alternative connection formats
    process.env.MONGO_URI ||
    
    // 4. Local development fallback
    `mongodb://${process.env.MONGO_HOST || 'localhost'}:${process.env.MONGO_PORT || '27017'}/portfolio`,
  
  // App Configuration
  appName: process.env.APP_NAME || 'Portfolio Backend',
  appUrl: process.env.APP_URL || 'http://localhost:3000',
  
  // CORS Configuration
  corsOrigin: process.env.CORS_ORIGIN || 
    (process.env.NODE_ENV === 'production' 
      ? ['https://your-frontend.onrender.com', 'https://your-portfolio.onrender.com']
      : ['http://localhost:5173', 'http://localhost:3000']
    ),
  
  // Rate Limiting
  rateLimitWindowMs: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000, // 15 minutes
  rateLimitMax: process.env.RATE_LIMIT_MAX || 100,
  
  // Logging
  logLevel: process.env.LOG_LEVEL || 'info',
  
  // Security
  enableHTTPS: process.env.ENABLE_HTTPS === 'true' || false,
  
  // Email Configuration (if using contact form)
  emailHost: process.env.EMAIL_HOST || 'smtp.gmail.com',
  emailPort: process.env.EMAIL_PORT || 587,
  emailUser: process.env.EMAIL_USER || '',
  emailPassword: process.env.EMAIL_PASSWORD || '',
  
  // API Configuration
  apiVersion: process.env.API_VERSION || 'v1',
  apiPrefix: process.env.API_PREFIX || '/api'
};

// Export with validation
export default config;

// Helper function to log configuration (for debugging)
export const logConfig = () => {
  console.log('🔧 Application Configuration:');
  console.log('============================');
  console.log(`Environment: ${config.env}`);
  console.log(`Port: ${config.port}`);
  console.log(`App Name: ${config.appName}`);
  console.log(`App URL: ${config.appUrl}`);
  console.log(`MongoDB Connected: ${config.mongoUri ? 'Yes' : 'No'}`);
  console.log(`MongoDB Host: ${config.mongoUri ? new URL(config.mongoUri).hostname : 'Not set'}`);
  console.log(`JWT Secret: ${config.jwtSecret ? 'Set' : 'Not set'}`);
  console.log(`CORS Origins: ${JSON.stringify(config.corsOrigin)}`);
  console.log('============================');
};