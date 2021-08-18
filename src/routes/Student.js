import express from 'express';
import { getStudents, saveStudent, getStudentByCode } from '../controllers/Student.js';

const StudentRoute = express.Router();

StudentRoute.get('/', getStudents);
StudentRoute.post('/', saveStudent);
StudentRoute.get('/:code', getStudentByCode);

export default StudentRoute;