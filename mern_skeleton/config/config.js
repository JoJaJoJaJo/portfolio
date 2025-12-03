 const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "vGeKWQ1VD3rqUmPg", 
 mongoUri: process.env.MONGODB_URI ||"mongodb+srv://nli73_db_user:vGeKWQ1VD3rqUmPg@cluster0.easpwl4.mongodb.net/Portfolio"||
 process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config