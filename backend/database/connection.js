const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connceted to mongodb");
  })
  .catch((error) => {
    console.log("error connecting to mongoDB");
  });
