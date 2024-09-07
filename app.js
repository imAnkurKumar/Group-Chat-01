const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const userRouter = require("./routes/userRoutes");
const homePageRouter = require("./routes/homePageRotes");
const chatRouter = require("./routes/chatRoutes");

const User = require("./models/userModel");
const Chat = require("./models/chatModel");

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
app.use("/homePage", homePageRouter);
app.use("/chat", chatRouter);

User.hasMany(Chat, { constraints: true, onDelete: "CASCADE" });
Chat.belongsTo(User);
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
