import { Router } from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';
import { alphaNumeric} from '../middleware/validation';
import { logger} from '../middleware/logger';
import {auth} from '../middleware/auth';

const router = Router();

router.post('/',[alphaNumeric,createTodo,logger]);

router.get('/', [auth,getTodos]);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;