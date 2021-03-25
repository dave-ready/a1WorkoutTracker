const mongoose = require("mongoose");
const morgan = require("morgan");
const express = require("express");


const app = express();

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

require("./routes/api-routes.js")(app)
require("./routes/html-routes.js")(app)

require("./seeders/seed");


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

