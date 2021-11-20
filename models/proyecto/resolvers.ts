import { ProjectModel } from './proyecto';

const resolversProyecto = {
    Query: {
      Proyectos: async (parent, args) => {
        const proyectos = await ProjectModel.find().populate('lider').populate('avances').populate('inscripciones').populate('objetivos');
        return proyectos;
      },
      Proyecto: async (parent, args) => {
        const proyecto = await ProjectModel.findOne({ _id: args._id }).populate('lider').populate('avances').populate('inscripciones').populate('objetivos');
        return proyecto;
      },
    },
    Mutation: {
      crearProyecto: async (parent, args) => {
        const proyectoCreado = await ProjectModel.create({
          nombre: args.nombre,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          presupuesto: args.presupuesto,
          lider: args.lider,
        });

        if (Object.keys(args).includes('estado')) {
          proyectoCreado.estado = args.estado;
        }

        if (Object.keys(args).includes('fase')) {
          proyectoCreado.fase = args.fase;
        }
        return proyectoCreado;
      },
      editarProyecto: async (parent, args) => {
        const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id, {
          nombre: args.nombre,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          presupuesto: args.presupuesto,
          estado: args.estado,
          fase: args.fase,
          lider: args.lider,
        });

        return proyectoEditado;
      },
      eliminarProyecto: async (parent, args) => {
        const proyectoEliminado = await ProjectModel.findOneAndDelete({ _id: args._id });
        return proyectoEliminado;
      },
    },
  };
  
  export { resolversProyecto };
