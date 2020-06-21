const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("connected to the database");
  } catch (error) {
    console.log(error);
  }
};
mongooseConnect();

app.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.PORT}`)
);
