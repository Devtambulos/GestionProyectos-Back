import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from "../enums/enums"
import { ProjectModel } from '../proyecto/proyecto';
import { UserModel } from '../usuario/usuario';

interface Inscription{
    proyecto: Schema.Types.ObjectId; //pendiente
    estudiante: Schema.Types.ObjectId; //pendiente
    estado: Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
}

const inscriptionSchema = new Schema<Inscription>({
    proyecto: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: ProjectModel,
        
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
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

const InscriptionModel = model('Inscripcion', inscriptionSchema);

export { InscriptionModel }