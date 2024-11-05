const express = require("express");
const connectDB = require("./config/db");
const mainRouter = require("./routes/index");
const cors = require("cors");
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", mainRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;