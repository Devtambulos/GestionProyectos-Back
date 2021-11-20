import { InscriptionModel } from "./inscripcion";

const resolverInscripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones =
        await InscriptionModel.find(); /* .populate('proyecto').populate('estudiante') */
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
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
        args._id,
        {
          estado: "ACEPTADO",
          fechaIngreso: Date.now(),
        }
      );
      return inscripcionAprobada;
    },
    terminarInscripcion: async (parent, args) => {
      const inscripcionTerminado = await InscriptionModel.findByIdAndUpdate(
        args._id,
        {
          fechaEgreso: Date,
        }
      );
    },
    eliminarInscripcion: async (parent, args) => {
      const inscripcionEliminada = await InscriptionModel.findByIdAndDelete({
        _id: args._id,
      });
      return inscripcionEliminada;
    },
    /* ... */
  },
};

export { resolverInscripciones };
