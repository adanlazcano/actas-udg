import Student from '../models/Student.js';

export const getStudents = async(req, res) => {

    try {

        const students = await Student.find({}).populate('actas');

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const saveStudent = async(req, res) => {
    try {

        const { code, name, career, picture } = req.body;

        const newStudent = {

            code,
            name,
            career,
            picture
        }
        const student = new Student(newStudent);
        await student.save();
        res.status(200).json(newStudent);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

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