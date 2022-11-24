const express = require("express");
const userController = require('../controller/student');

const router = express.Router();

router.get('',userController.getStudents);
router.post('',userController.postStudents);

module.exports = router;