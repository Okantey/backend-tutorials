import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log("Mongo Db Database connected successfully!")
  } catch (error) {
    console.log(error)
  }
}



export default connectDatabase