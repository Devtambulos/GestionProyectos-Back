import { gql } from 'apollo-server-express';
import { tiposUsuario } from '../models/usuario/tipos';
import { tiposEnums } from '../models/enums/tipos';
import { tiposInscripcion } from '../models/inscripcion/tipos';
import { tiposAvance } from '../models/avance/tipos';

const tiposGlobales = gql`
scalar Date
`;

export const tipos = [tiposGlobales,
     /* tiposInscripcion */,
     /*tiposAvance*/ ,
     tiposUsuario,tiposEnums];