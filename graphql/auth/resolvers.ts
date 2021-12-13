import { UserModel } from "../../models/usuario/usuario";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/tokenUtils";

export const resolversAutenticacion = {


  Mutation: {
    registro: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);

      const busquedaUsuario = await UserModel.findOne({
        correo: args.correo, identificaion: args.identificacion
      })
      if(busquedaUsuario){
        return{
          error:"Error: Existe un dato ya registrado por otro usuario"
        }
      }
      
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword,
      });
      
      
      if(!usuarioCreado){
        return{
          error:"error al reg"
        }
      }
      
      console.log("usuario creado", usuarioCreado);

      return {
        token: generateToken({
          _id: usuarioCreado._id,
          nombre: usuarioCreado.nombre,
          apellido: usuarioCreado.apellido,
          identificacion: usuarioCreado.identificacion,
          correo: usuarioCreado.correo,
          rol: usuarioCreado.rol,
          estado: usuarioCreado.estado
        }),
      };
    },

    login: async (parent, args) => {
      const usuarioEncontrado = await UserModel.findOne({
        correo: args.correo,
      });

      if(!usuarioEncontrado){
        return{
          error:"Correo no encontrado"
        }
      }

      if (await bcrypt.compare(args.password, usuarioEncontrado.password)) {
        return {
          token: generateToken({
            _id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            identificacion: usuarioEncontrado.identificacion,
            correo: usuarioEncontrado.correo,
            rol: usuarioEncontrado.rol,
            estado: usuarioEncontrado.estado
          }),
        };
      }else{
        return{
          error:"contraseña incorrecta"
        }
      }
      console.log(usuarioEncontrado);
    },

    refreshToken: async (parent, args, context) => {
      console.log('contexto',context)
      if(!context.userData){
        return {
          error: 'token no valido'
        }
      }else{
        return {
          token: generateToken({
            _id: context.userData._id,
            nombre: context.userData.nombre,
            apellido: context.userData.apellido,
            identificacion: context.userData.identificacion,
            correo: context.userData.correo,
            rol: context.userData.rol,
            estado: context.userData.estado
          }),
        };
      }
    },
  },
};
