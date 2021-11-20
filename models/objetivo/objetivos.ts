import { Schema, model } from 'mongoose';
import { Enum_TipoObjetivo } from '../enums/enums';
import {ProjectModel} from '../proyecto/proyecto'

interface Objetivo {
    proyecto: Schema.Types.ObjectId;
    descripcion: string;
    tipo: Enum_TipoObjetivo;
}

const objetivoSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: ProjectModel,
    },
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
    }
});

export const ObjetivoModel = model('Objetivo', objetivoSchema);
