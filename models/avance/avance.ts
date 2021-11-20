import { Schema, model } from 'mongoose';
import { ProjectModel } from '../proyecto/proyecto';
import { UserModel } from '../usuario/usuario';

interface Avance{
    proyecto: Schema.Types.ObjectId;
    descripcion: string;
    observaciones: string;
    fecha: Date;   
    creadoPor: Schema.Types.ObjectId;
}

const avanceSchema = new Schema<Avance>({
    proyecto: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: ProjectModel,
        
    },  
    fecha: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },    
    observaciones:{
        type: String,
        required: true,
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    }

    }
)

export const AvanceModel = model('Avance', avanceSchema, 'avances');
