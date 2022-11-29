const express = require("express");
const userController = require('../controller/student');
const checkAdmin = require('../middleware/auth');

const router = express.Router();

router.get('/list',checkAdmin,userController.getStudents);
router.get('/filter',userController.getStudentsFilter);
router.post('',userController.postStudents);

module.exports = router;