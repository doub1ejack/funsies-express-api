// use an .env file for the listening port
require("dotenv").config();

// Import the express library here
const express = require("express");

// Instantiate the app here
const app = express();

// Invoke the app's `.listen()` method below:
const PORT = process.env.PORT; // || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// import router
var router = express.Router();
var routes = require("./routes/index");
app.use("/", routes);
