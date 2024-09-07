const path = require("path");

const getHomePage = async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "../views", "homePage.html"));
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getHomePage };
