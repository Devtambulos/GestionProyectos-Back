import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from "../enums/enums";
import { ProjectModel } from '../proyecto/proyecto';
import { UserModel } from '../usuario/usuario';



interface Inscription{
    estado: Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto: Schema.Types.ObjectId; 
    estudiante: Schema.Types.ObjectId;
}


const inscriptionSchema = new Schema/* <Inscription> */({
    estado: {
        type: String,
        enum: Enum_EstadoInscripcion /* ['ACEPTADO', 'RECHAZADO','PENDIENTE'] */,
        default: 'PENDIENTE',
        required: false,
    },
    fechaIngreso:{
        type: Date,
        required: false,
    },
    fechaEgreso: {
        type: Date,
        default: "aaaa-mm-dd",
        required: false,
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