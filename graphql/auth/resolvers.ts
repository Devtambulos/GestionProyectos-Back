import { UserModel } from '../../models/usuario/usuario'
import bcrypt from 'bcrypt'
import { generateToken } from '../../utils/tokenUtils'

export const resolversAutenticacion = {
    Mutation: {
        registro: async(parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);

            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: hashedPassword
            });
            console.log('Usuario creado', usuarioCreado)
            return {

            }
        },

        login: async(parent, args) =>{

        },

        validateToken: async(parent, args, context) => {

        }
    }
}