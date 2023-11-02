import { Schema, model } from "mongoose";
import IMedic from "../interfaces/medic.interface";

const medicSchema = new Schema<IMedic>({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
        required: true
    }, 
    specialty: {
        type: String,
        required: true,
    },
    pacients: [String],
})

const Medic = model<IMedic>('medics', medicSchema)

export default Medic