import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos';
<<<<<<< HEAD
import { tiposUsuario } from '../models/usuario/tipos';


=======
import {tiposInscripcion} from "../models/inscripcion/tipos"


/* const typeDefs = gql`
  type Usuario {
    nombre: String!
  }
  type Query {
    Usuarios: [Usuario]
  }
`; */

>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f
const tiposGlobales = gql`
  scalar Date
`;

<<<<<<< HEAD
//export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposAvance];

export const tipos = [tiposGlobales, tiposEnums, tiposUsuario];
=======
export const tipos = [tiposGlobales, tiposInscripcion, tiposEnums];
>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f
