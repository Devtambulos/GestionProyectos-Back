import { ObjetivoModel } from './objetivos';

const resolversObjetivo = {
    Query:{
        Objetivos: async (parent, args) => {
            const objetivos = await ObjetivoModel.find().populate('proyecto');
            return objetivos;
        },
        filtrarObjetivo: async (parent, args) => {
            const objetivoFiltrado = await ObjetivoModel.find({ proyecto: args.idProyecto })
            .populate('proyecto');
            return objetivoFiltrado;
        },
    },
    Mutation: {
        crearObjetivo: async (parents, args) => {
            const objetivoCreado = ObjetivoModel.create({
                proyecto: args.proyecto,
                descripcion: args.descripcion,
                tipo: args.tipo,
            });
            return objetivoCreado;
        }
    }
};

export { resolversObjetivo }