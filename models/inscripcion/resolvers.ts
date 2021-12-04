import { InscriptionModel } from "./inscripcion";

const resolverInscripciones = {
  Query: {
    Inscripciones: async (parent, args, context) => {
      const inscripciones = await InscriptionModel.find()
        .populate("proyecto")
        .populate("estudiante");
      return inscripciones;
    },
    FiltrarInscripcionPorEstudiante: async (parent, args, context) => {
      const inscripcionFiltrada = await InscriptionModel.find({
        estudiante: args.idEstudiante,
      })
        .populate("proyecto")
        .populate("estudiante");
      return inscripcionFiltrada;
    },
    FiltrarInscripcionPorProyecto: async (parent, args, context) => {
      if (context.userData.rol === "LIDER" && context.userData.estado === "AUTORIZADO"){
      const inscripcionFiltrada = await InscriptionModel.find({
        proyecto: args.idProyecto,
      })
        .populate("proyecto")
        .populate("estudiante");
      return inscripcionFiltrada;
    }
      else if (context.userData.rol === "ADMINISTRADOR" && context.userData.estado === "AUTORIZADO"){
      const inscripcionFiltrada = await InscriptionModel.find({
        proyecto: args.idProyecto,
      })
        .populate("proyecto")
        .populate("estudiante");
      return inscripcionFiltrada;
    }},
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      console.log(args);
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent, args, context) => {
      if (context.userData.rol === "LIDER" && context.userData.estado === "AUTORIZADO"){
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
        args._id,
        {
          estado: "ACEPTADO",
          fechaIngreso: Date.now(),
        },
        { new: true }
      )
        .populate("proyecto")
        .populate("estudiante");
      return inscripcionAprobada;
    }},
    
    terminarInscripcion: async (parent, args) => {
      const inscripcionTerminado = await InscriptionModel.findByIdAndUpdate(
        args._id,
        {
          fechaEgreso: Date.now(),
        },
        { new: true }
      )
        .populate("proyecto")
        .populate("estudiante");
      return inscripcionTerminado;
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

//                              NO UTILIZAR

/*
Inscripciones: async (parent, args, context) => {
      if (context.userData.rol === "ESTUDIANTE" && context.userData.estado === "AUTORIZADO") {
        const inscripciones =
          await InscriptionModel.find().populate('proyecto').populate("estudiante"); 
          return inscripciones;
      }/else if((context.userData.rol === "LIDER" || context.userData.rol === "ADMINISTRADOR") && context.userData.estado === "AUTORIZADO"){
        return {
          error: "Tu rol no te permite ver esto"
        } 
      } else{
        return {
          error: "No tienes los permisos para ver esto"
        }
      }
    },
*/
