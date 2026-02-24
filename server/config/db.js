import mongoose from 'mongoose';


const uri = process.env.MONGO_URI;
if (!uri) throw new Error('MONGODB_URI not set');

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).then(mongoose => { return mongoose; });
    console.log('Connected to MongoDB');
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
