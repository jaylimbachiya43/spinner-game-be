// const mongoose = require('mongoose');
// console.log(process.env)
// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://monsarc247:X0vxmOEC0ThmhUMy@spinner.0sehqat.mongodb.net/?retryWrites=true&w=majority&appName=spinner");
//     console.log('✅ MongoDB Connected');
//   } catch (error) {
//     console.error('❌ Database Connection Error:', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Database Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
