import { ProjectModel } from './proyecto';

const resolversProyecto = {
    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate('lider');
            return proyectos;
        },
    },
    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                // objetivos: args.objetivos,
                estado: args.estado,
                fase: args.fase,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                presupuesto: args.presupuesto,
                lider: args.lider,
            });
            return proyectoCreado;
        },
    }
};

export { resolversProyecto };