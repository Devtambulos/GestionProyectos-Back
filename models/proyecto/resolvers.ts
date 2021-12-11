import { Enum_EstadoProyecto } from '../enums/enums';
import { ProjectModel } from './proyecto';

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args, context) => {
      if (context.userData.rol === "ADMINISTRADOR" && context.userData.estado === "AUTORIZADO") {
        const proyectos = await ProjectModel.find({...args.filtro})
          .populate('lider')
          .populate('avances')
          .populate('inscripciones')
          .populate('objetivos');
        return proyectos;
      } else if (context.userData.rol === "LIDER" && context.userData.estado === "AUTORIZADO") {
        const proyectos = await ProjectModel.find({ lider: context.userData._id })
          .populate('lider')
          .populate('avances')
          .populate('inscripciones')
          .populate('objetivos');
        return proyectos;
      }
      else {
        const proyectos = await ProjectModel.find({estado:Enum_EstadoProyecto.ACTIVO})
          .populate('lider')
          .populate('avances')
          .populate('inscripciones')
          .populate('objetivos');
        return proyectos;
      }
    },
    Proyecto: async (parent, args) => {
      const proyecto = await ProjectModel.findOne({ _id: args._id })
        .populate('lider')
        .populate('avances')
        .populate('inscripciones')
        .populate('objetivos');
      return proyecto;
    },
  },
  Mutation: {

    crearProyecto: async (parent, args, context) => {
      if (context.userData.rol === "ADMINISTRADOR" && context.userData.estado === "AUTORIZADO") {
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
      }
      else if (context.userData.rol === "LIDER" && context.userData.estado === "AUTORIZADO") {
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
      }
      else if (context.userData.rol === "ESTUDIANTE" && context.userData.estado === "AUTORIZADO") {
        return "No tienes permiso"
      } else {
        return "ERROR: no tienes los permisos"
      }
    },
    // editarProyecto: async (parent, args, context) => {
    //   if (context.userData.rol === "LIDER" && context.userData.estado === "AUTORIZADO") {
    //     const proyectoEditado = await ProjectModel.findOneAndUpdate({ _id: args._id, estado: Enum_EstadoProyecto.ACTIVO }, {
    //       nombre: args.nombre,
    //       presupuesto: args.presupuesto,
    //     });

    //     return proyectoEditado;
    //   }
    //   else if (context.userData.rol === "ADMINISTRADOR" && context.userData.estado === "AUTORIZADO") {
    //     const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id, {
    //       nombre: args.nombre,
    //       fechaInicio: args.fechaInicio,
    //       fechaFin: args.fechaFin,
    //       presupuesto: args.presupuesto,
    //       estado: args.estado,
    //       fase: args.fase,
    //       lider: args.lider,
    //     },{new:true});
    //     return proyectoEditado;
      
      // else if (context.userData.rol === "ESTUDIANTE" && context.userData.estado === "AUTORIZADO") {
      //   return "No tienes permiso"
      // }
      // else {
      //   return "ERROR: no tienes los permisos"
      // }
    // },

    eliminarProyecto: async (parent, args) => {
      const proyectoEliminado = await ProjectModel.findOneAndDelete({ _id: args._id });
      return proyectoEliminado;
    },
  },
};


export { resolversProyecto };
