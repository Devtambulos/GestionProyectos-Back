import { AvanceModel } from "./avance";
const resolversAvance = {
  Query: {
    Avances: async (parent, args, context) => {
      // if (context.userData.rol === "LIDER" && context.userData.estado === "AUTORIZADO"){
      const avances = await AvanceModel.find()
        .populate('proyecto')
        .populate('creadoPor');
      return avances;
      // }
      // else {
      //   const avances = await AvanceModel.find()
      //     .populate('proyecto')
      //     .populate('creadoPor');
      //   return avances;
      // }
    },

    avance: async (parents, args) => {
      const avance = await AvanceModel.findById(args._id)
        .populate('proyecto')
        .populate('creadoPor');
      return avance;
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
      const fechaN = new Date();
      
      const avanceCreado = await AvanceModel.create({
        fecha: fechaN.toISOString().split('T')[0],
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });

      if (Object.keys(args).includes('fecha')) {
        avanceCreado.fecha = args.fecha;
      }
      return avanceCreado;
    },
    editarAvance: async (parent, args, context) => {
      if (context.userData.rol === "LIDER" && context.userData.estado === "AUTORIZADO"){

      const avanceEditado = await AvanceModel.findByIdAndUpdate(
        args._id,
        {
          descripcion: args.descripcion,
          observaciones: args.observaciones,
        }, { new: true }
      );
      return avanceEditado;
      }
      else {
        const avanceEditado = await AvanceModel.findByIdAndUpdate(args._id,{
          descripcion: args.descripcion,
          observaciones: args.observaciones,
          fecha: args.fecha,
        },{new:true});
      return avanceEditado;
      }
    },
    eliminarAvance: async (parent, args) => {
      const avanceEliminado = await AvanceModel.findOneAndDelete({ _id: args._id });
      return avanceEliminado;
    }
  },
};

export { resolversAvance };
