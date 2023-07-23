// import mongoose from "mongoose"

// const connect = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO);
//       } catch (error) {
//         throw new Error("Connection failed");
//       }
// }

// export default connect

import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connect;
export const db = mongoose.connection; // Export mongoose connection instance
