import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from "./enums"

interface Inscription{
    proyecto: undefined; //pendiente
    estudiante: undefined; //pendiente
    estado: Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
}

const inscriptionSchema = new Schema<Inscription>({
    proyecto: {
        type: String,
        required: true
    },
    estudiante: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
        enum: Enum_EstadoInscripcion,
    },
    fechaIngreso:{
        type: Date,
        required: true,
    },
    fechaEgreso: {
        type: Date,
        required: true,
    }
})

const InscriptionModel = model('inscripcion', inscriptionSchema);

export { InscriptionModel }