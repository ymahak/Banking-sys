 const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports= connectDB;