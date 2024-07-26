import { getAllStudents, getStudentById } from '../services/students.js';
import createHttpError from 'http-errors';

export const getAllStudentsController = async (req, res, next) => {
  const students = await getAllStudents();
  res.status(200).json({
    data: students,
  });
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  if (student === null) {
    return next(createHttpError(404, 'Student not found'));
  }

  res.status(200).json({
    data: student,
  });
};
