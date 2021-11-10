import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto } from './enums';
import { Enum_FaseProyecto } from './enums';

interface Project {
  nombre: string;
  objetivos: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  lider: undefined;  //Usuario, pediente como hacer la relacion con la coleccion usuario
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
}

const projectSchema = new Schema<Project>({
  nombre: {
    type: String,
    required: true,
  },
  objetivos: {
    type: String,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  lider: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    enum: Enum_EstadoProyecto,
  },
  fase: {
    type: String,
    required: true,
    enum: Enum_FaseProyecto,
  },

});

const ProjectModel = model('proyecto', projectSchema);

export { ProjectModel };