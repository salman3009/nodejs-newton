const express = require("express");
const userController = require('../controller/student');

const router = express.Router();

router.get('/list',userController.getStudents);
router.get('/filter',userController.getStudentsFilter);
router.post('',userController.postStudents);

module.exports = router;