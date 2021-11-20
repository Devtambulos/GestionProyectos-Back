import { ObjetivoModel } from "./objetivos";
const resolversObjetivo = {
    Query: {
      Objetivos: async (parent, args) => {
        const objetivos = await ObjetivoModel.find().populate('proyecto');
        return objetivos;
      },
      filtrarObjetivo: async (parents, args) => {
        const objetivoFiltrado = await ObjetivoModel.find({ proyecto: args.idProyecto })
          .populate('proyecto')
          .populate('creadoPor');
        return objetivoFiltrado;
  
    },
  },
    Mutation: {
      crearObjetivo: async (parents, args) => {
        const objetivoCreado = await ObjetivoModel.create({
          tipo: args.tipo,
          descripcion: args.descripcion,
          proyecto: args.proyecto,
        });
        return objetivoCreado;
      },
    
    editarObjetivo: async (parent, args) => {
      const objetivoEditado = await ObjetivoModel.findByIdAndUpdate(args._id, {
        descripcion: args.descripcion,
      });

      return objetivoEditado;
    },
    eliminarObjetivo: async (parent, args) => {
        const objetivoEliminado = await ObjetivoModel.findOneAndDelete({ _id: args._id });
        return objetivoEliminado;
    },
  }
};
  
  export { resolversObjetivo };

  