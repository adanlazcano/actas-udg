import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const StudentSchema = new Schema({

    code: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    career: {
        type: String
    },

    picture: {
        type: String
    },

    actas: [{ type: Schema.Types.ObjectId, ref: 'Acta' }]

}, {
    versionKey: false,
    timestamps: true
});

export default model("Student", StudentSchema);