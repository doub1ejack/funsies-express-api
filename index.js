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

// stub out first route & response
const moods = [{ mood: "excited about express!" }, { mood: "route-tastic!" }];
app.get("/moods", (req, res, next) => {
  res.send(moods);
});
