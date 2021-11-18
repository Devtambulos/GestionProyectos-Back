import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos';
import { tiposUsuario } from '../models/usuario/tipos';


const tiposGlobales = gql`
  scalar Date
`;

//export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposAvance];

export const tipos = [tiposGlobales, tiposEnums, tiposUsuario];