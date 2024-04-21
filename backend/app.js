var express = require("express");
var app = express();
const cors = require("cors");
app.use(express.json());
const routes = require("./routes/user");
app.use(cors());

app.use("/login", routes);
app.use("/", routes);
app.listen(3000, function () {
  console.log("Server listening on port 3000!");
});
