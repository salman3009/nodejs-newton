const express = require("express");
const userController = require('../controller/student');
const checkAdmin = require('../middleware/auth');

const router = express.Router();

router.get('/list',checkAdmin,userController.getStudents);
router.get('/filter',checkAdmin,userController.getStudentsFilter);
router.post('',checkAdmin,userController.postStudents);

module.exports = router;