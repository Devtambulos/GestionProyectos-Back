import { InscriptionModel } from './inscripcion';

const resolverInscripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      return inscripciones;
    },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args.id, {
        estado: args.estado.ACEPTADA,
        fechaIngreso: args.fecha.Date.now(),
      });
      return inscripcionAprobada;
    },
  },
};

export { resolverInscripciones };