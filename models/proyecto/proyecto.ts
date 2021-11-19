import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto, Enum_FaseProyecto } from './enums/enums';
import { ObjetivoModel } from './objetivo/objetivos';
import { UserModel } from './usuario/usuario';

interface Project {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  lider: Schema.Types.ObjectId;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
}

const projectSchema = new Schema<Project>({
  nombre: {
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
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
  estado: {
    type: String,
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.INACTIVO,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.NULO,
  },
},
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

projectSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('objetivos', {
  ref: 'Objetivo',
  localField: '_id',
  foreignField: 'proyecto',
});

const ProjectModel = model('proyecto', projectSchema, "proyectos");

export { ProjectModel };