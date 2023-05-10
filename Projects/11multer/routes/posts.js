const express = require("express");
const PostController = require("../controllers/posts");
const extractFile = require("../middleware/file");
const router = express.Router();


router.post("",extractFile, PostController.createPost);

router.get("", PostController.getPosts);


module.exports = router;
