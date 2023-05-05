const mongoose = require("mongoose");
express = require("express");
userManagmentRouter = express.Router();
const app = express();
const bcrypt = require("bcrypt");

const User = require("../models/User");

userManagmentRouter.post("/signup", (req, res) => {
  // let usreinfo = req.body.data;
  // console.log("userinfo", usreinfo.userEmail);
  await = User.findOne({ userEmail: req.body.data.userEmail })
    .then((user) => {
      if (!user) {
        // let pass = bcrypt.hash(req.body.password, 10);

        // console.log("errorerorororor", password);
        // bcrypt.hash(req.body.data.password);
        bcrypt.hash(req.body.data.password, 10).then((hashPassword) => {
          console.log("errorerorororor");
          const newuser = new User({
            userName: req.body.data.userName,
            userEmail: req.body.data.userEmail,
            password: hashPassword,
          });
          newuser
            .save()
            .then((result) => {
              res.status(201).send({
                message: "User Created Successfully",
                data: {
                  userName: result.userName,
                  userEmail: result.userEmail,
                },
              });
            })
            .catch((error) => {
              res.status(500).send({
                message: "Error creating user",
                error,
              });
            });
        });
      } else {
        res.status(200).send({
          message: "User aleady exists",
          error,
        });
      }
    })
    .catch((error) => {
      res.status(404).send({
        message: "Email not found",
        error,
      });
    });
  console.log("backend", req.body);
});
userManagmentRouter.post("/login", (req, res) => {
  console.log("logininfo==>", req.body);
  const { userEmail, password } = req.body.data;

  await = User.findOne({ userEmail: userEmail })
    .then((user) => {
      if (!user) {
        res.send({
          message: "user still unregistered",
        });
      } else {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            // TODO: Redirect to user's profile page
            console.log("user.username", user.userName);
            console.log("password", user.userEmail);
            let responses = {
              islogin: result,
              userName: user.userName,
              userEmail: user.userEmail,
            };
            res.send(responses);
          } else {
            res.send({
              message: "user password is uncorrected",
            });
          }
        });
      }
    })
    .catch((error) => {
      res.status(404).send({
        message: "Email not found",
        // error,
      });
    });
  console.log("backend", req.body);
});
module.exports = userManagmentRouter;
