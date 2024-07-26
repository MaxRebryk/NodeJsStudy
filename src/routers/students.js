import { Router } from 'express';
import {
  getAllStudentsController,
  getStudentByIdController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

export default router;

router.get('/students', ctrlWrapper(getAllStudentsController));
router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));
