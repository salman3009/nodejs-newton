import { Router } from 'express';
import StudentController from '../controllers/studentControllers';
const routes = Router();
routes.get('/', StudentController.getAllStudents);
routes.get('/:id', StudentController.getSingleStudent);
export default routes;