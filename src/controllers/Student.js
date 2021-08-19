import Student from '../models/Student.js';

//Get all students
export const getStudents = async(req, res) => {

    try {
        const students = await Student.find({}).populate('actas');
        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Create student
export const saveStudent = async(req, res) => {
    try {

        const student = new Student(req.body);
        await student.save();
        res.status(200).json(newStudent);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Get one of the students by frontend search. This method returns student's certificates
export const getStudentByCode = async(req, res) => {

    try {

        const code = req.params.code;
        const regex = new RegExp(code, 'i');
        const students = await Student.find({ code: { $regex: regex } }).populate('actas');

        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({ message: message.error });
    }
}