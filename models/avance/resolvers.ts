import { AvanceModel } from "./avance";
const resolversAvance = {
    Query: {
      Avances: async (parent, args) => {
        const avances = await AvanceModel.find();
        // .populate('proyecto').populate('creadoPor');
        return avances;
      },
      filtrarAvance: async (parents, args) => {
        const avanceFiltrado = await AvanceModel.find({ proyecto: args.idProyecto })
          .populate('proyecto')
          .populate('creadoPor');
        return avanceFiltrado;
      },
    },
    Mutation: {
      crearAvance: async (parents, args) => {
        const avanceCreado = await AvanceModel.create({
          fecha: args.fecha,
          descripcion: args.descripcion,
          proyecto: args.proyecto,
          creadoPor: args.creadoPor,
        });
        return avanceCreado;
      },
      editarAvance: async (parent, args) => {
        const avanceEditado = await AvanceModel.findByIdAndUpdate(
          args._id,
          {
            descripcion: args.descripcion,
            observaciones: args.observaciones,
          }
        );
        return avanceEditado;
      },
      eliminarAvance: async (parent, args) => {
        const avanceEliminado = await AvanceModel.findOneAndDelete({_id: args._id});
        return avanceEliminado;
      }
    },
  };
  
  export { resolversAvance };
