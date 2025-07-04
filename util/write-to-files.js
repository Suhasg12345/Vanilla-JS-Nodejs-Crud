const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");

module.exports = (data) => {
  try {
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "movies.json"),
      JSON.stringify(data),
      "utf-8"
    );
  } catch (err) {
    console.log(err);
  }
};
