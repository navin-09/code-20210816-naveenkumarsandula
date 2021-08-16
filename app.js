const express = require("express");
app = express();
require("dotenv").config();
const bp = require("body-parser");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//this application use the routes
app.use("/", require("./routes/routes"));

const PORT = process.env.PORT || 3000;
//this application listens on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
