import { ObjetivoModel } from "./objetivos";
const resolversObjetivo = {
    Query: {
      Objetivos: async (parent, args) => {
        const objetivos = await ObjetivoModel.find().populate('proyecto');
        return objetivos;
      },
      filtrarObjetivo: async (parents, args) => {
        const objetivoFiltrado = await ObjetivoModel.find({ proyecto: args.idProyecto })
          .populate('proyecto');
        return objetivoFiltrado;
      },
    },
    Mutation: {
      crearObjetivo: async (parents, args) => {
        const objetivoCreado = ObjetivoModel.create({
          tipo: args.tipo,
          descripcion: args.descripcion,
          proyecto: args.proyecto,
        });
        return objetivoCreado;
      },
    },
  };
  
  export { resolversObjetivo };
