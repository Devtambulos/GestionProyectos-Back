<<<<<<< HEAD
import { resolversUsuario } from '../models/usuario/resolvers';


export const resolvers = [resolversUsuario];
=======
import { resolverInscripcion } from '../models/inscripcion/resolvers'

export const resolvers = [resolverInscripcion]







/* 
const resolvers = {
    Query: {
      Usuarios: async (parent, args) => {
        const usuarios = [
          {
            nombre: 'Daniel',
          },
          {
            nombre: 'Juan',
          },
          {
            nombre: 'Pedro',
          },
        ];
  
        return usuarios;
      },
    },
  };
  
  export { resolvers }; */
>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f