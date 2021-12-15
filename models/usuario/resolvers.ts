import { UserModel } from "./usuario";
import { Enum_EstadoUsuario, Enum_Rol } from "../enums/enums";


const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args, context) => {
      if (context.userData.rol === "ADMINISTRADOR" && context.userData.estado === "AUTORIZADO") {
        const usuarios = await UserModel.find()
          .populate("avances")
          .populate("inscripciones")
          .populate("proyectos");
        return usuarios;
      } else if (context.userData.rol === "LIDER" && context.userData.estado === "AUTORIZADO") {
        const usuarios = await UserModel.find({ rol: Enum_Rol.ESTUDIANTE })
        return usuarios;
      }else if(context.userData.rol === "ESTUDIANTE"  && context.userData.estado === "AUTORIZADO") {
        return "No tienes permiso"
      }else{
        return "ERROR: no tienes los permisos"

      }
    },
    Usuario: async (parent, args) => {
      const usuario = await UserModel.findOne({ _id: args._id })
        .populate("avances")
        .populate("inscripciones")
        .populate("proyectos");
      return usuario;
    },
    

  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        estado: "PENDIENTE"
      });

      if (Object.keys(args).includes("estado")) {
        usuarioCreado.estado = args.estado;
      }

      return usuarioCreado;
    },
    editarUsuario: async (parent, args, context) => {
      if (context.userData.rol === "ADMINISTRADOR" && context.userData.estado === "AUTORIZADO" ){
      
        const usuarioEditado = await UserModel.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
          apellido: args.apellido,
          identificacion: args.identificacion,
          correo: args.correo,
          rol: args.rol,
          estado: args.estado,
        },
        { new: true }
      );
      
      return usuarioEditado;
      
    }
      else if (context.userData.rol === "LIDER" && context.userData.estado === "AUTORIZADO") {
        const usuarioEditado = await UserModel.findByIdAndUpdate(
          args._id,
          {
            estado: args.estado,
          },
          { new: true }
        );
        return usuarioEditado;
      }
      else{
        return "ERROR: no tienes los permisos"

      }
    },

    editarPerfil: async (parent, args) => {
      const usuarioEditado = await UserModel.findByIdAndUpdate(
        args._id,
        { ...args.campos },
        { new: true }
      );
      return usuarioEditado;
    },
    
    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const usuarioEliminado = await UserModel.findOneAndDelete({
          _id: args._id,
        });
        return usuarioEliminado;
      } else if (Object.keys(args).includes("correo")) {
        const usuarioEliminado = await UserModel.findOneAndDelete({
          correo: args.correo,
        });
        return usuarioEliminado;
      }
    },
  },
};

export { resolversUsuario };
