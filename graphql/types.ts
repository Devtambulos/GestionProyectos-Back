import { gql } from 'apollo-server-express';
import { tiposUsuario } from '../models/usuario/tipos';
import { tiposEnums } from '../models/enums/tipos';
import { tiposInscripcion } from '../models/inscripcion/tipos';

const tiposGlobales = gql`
scalar Date
`;

export const tipos = [tiposGlobales, /* tiposInscripcion */, tiposUsuario,tiposEnums];