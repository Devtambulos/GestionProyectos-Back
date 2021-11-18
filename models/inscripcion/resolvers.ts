import {InscriptionModel} from "./inscripcion"

const resolverInscripcion = {
    Query: {
        Inscripcion: async (parent, args) => {
            const inscripcion = await InscriptionModel.find().populate('proyecto').populate('estudiante')
            return inscripcion;
        },
    },
    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscriptionModel.create({
                estado: args.estado,
                fechaIngreso: args.fechaIngreso,
                fechaEgreso: args.fechaEgreso,
                proyecto: args.proyecto,
                estudiante: args.estudiante
            });
            return inscripcionCreada
        },
    },
};

export { resolverInscripcion }