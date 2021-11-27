import mongoose from "mongoose";

const connection = {};

const connectMongo = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const dbConnection = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      heartbeatFrequencyMS: 20000,
      connectTimeoutMS: 30000,
    });
    connection.isConnected = dbConnection.connections[0].readyState;
    console.log("connected to db!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectMongo;
