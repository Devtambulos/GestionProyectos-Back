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