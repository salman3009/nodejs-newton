const Post = require('../models/post');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new Post({
          email: req.body.email,
          password: hash
        });
        user
          .save()
          .then(result => {
            res.status(201).json({
              message: "User created!",
              result: result
            });
          })
          .catch(error => {
            res.status(500).json({
              message: "Mail id already exists!",
              error:error
            });
          });
      });
}


exports.userLogin = (req, res, next) => {
    let fetchedUser;
    Post.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message: "Mail id not found. Please check again"
          });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
      })
      .then(result => {
        if (!result) {
          return res.status(401).json({
            message: "Authentication failed"
          });
        }
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: fetchedUser._id,
          admin: true
        });
      })
      .catch(error => {
        return res.status(401).json({
          message: "Some exception occured. Please try after sometime"
        });
      });
}

exports.listUser = (req, res, next) => {
    Post.find().then(documents => {
        res.status(200).json({
          message: 'Posts fetched successful',
          posts: documents
        });
      });
}