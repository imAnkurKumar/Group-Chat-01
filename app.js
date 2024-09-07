const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const userRouter = require("./routes/userRoutes");
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", userRouter);
app.use("/user", userRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
