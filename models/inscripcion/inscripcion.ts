import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from "../enums/enums"
import { ProjectModel } from '../proyecto';
import { UserModel } from '../usuario';

interface Inscription{
    estado: Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto: Schema.Types.ObjectId; 
    estudiante: Schema.Types.ObjectId;
}

const inscriptionSchema = new Schema<Inscription>  ({
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
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: ProjectModel,
        
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel
    }
})

const InscriptionModel = model('Inscripcion', inscriptionSchema)

export { InscriptionModel }