import mongoose from "mongoose";

// connect database

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/icdayroi", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect thành công!");
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

export default { connect };
