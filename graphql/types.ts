import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos';
import {tiposInscripcion} from "../models/inscripcion/tipos"


/* const typeDefs = gql`
  type Usuario {
    nombre: String!
  }
  type Query {
    Usuarios: [Usuario]
  }
`; */

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [tiposGlobales, tiposInscripcion, tiposEnums];