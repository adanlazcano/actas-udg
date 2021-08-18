import Acta from '../models/Acta.js';
import Student from '../models/Student.js';

export const createActa = async(req, res) => {
    try {

        const { idStudent, key, file, title, order } = req.body;

        const newActa = {

            idStudent,
            key,
            file,
            title,
            order
        }

        const student = await Student.findById(idStudent);
        const acta = new Acta(newActa);
        const createdActa = await acta.save();

        student.actas = student.actas.concat(createdActa._id);

        await student.save();

        res.status(200).json(newActa);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteActa = async(req, res) => {

    try {

        const actaStudent = await Student.findById(req.body.idStudent);
        await actaStudent.updateOne({ $pull: { actas: req.params.id } })

        await Acta.findByIdAndDelete(req.params.id);

        res.status(200).json(actaStudent);
    } catch (error) {

        res.status(500).json({ message: error.message });
    }

}