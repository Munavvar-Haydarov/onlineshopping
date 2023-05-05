const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const productManagementRouter = express.Router();

productManagementRouter.post("/allView", (req, res) => {
  console.log(req.body);
  let tempSex = "";
  let sex = req.body.sex;
  let brnUrl = req.body.branchName;
  let logoName = req.body.logoName;
  let jsonName = "";
  console.log(sex, brnUrl, logoName);
  jsonName =
    "database/" +
    logoName +
    "/" +
    logoName +
    "-" +
    sex +
    "-" +
    brnUrl +
    ".json";
  const fs = require("fs");
  console.log(jsonName);
  fs.readFile(jsonName, "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      res.send("");
      return;
    }
    res.send(jsonString);
  });
});
module.exports = productManagementRouter;
