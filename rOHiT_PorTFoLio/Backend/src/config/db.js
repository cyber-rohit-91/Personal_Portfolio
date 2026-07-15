
const dns = require("node:dns");

// Force Node to use public DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[db] MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('[db] connection failed:', err.message);
    console.error(err);
    throw err;
  }
};

module.exports = connectDB;




