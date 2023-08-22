const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
// error
db.on("error", console.error.bind(console, "erroe connecting to db"));
// up and running then message
db.once("open", function () {
  console.log("Success fully connected to the database");
});
