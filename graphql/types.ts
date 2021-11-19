import { gql } from 'apollo-server-express';
import { tiposUsuario } from '../models/usuario/tipos';
import { tiposEnums } from '../models/enums/tipos';
import { tiposProyecto } from '../models/proyecto/tipos';
import { tiposAvance } from '../models/avance/tipos';
import { tiposInscripcion } from '../models/inscripcion/tipos';
import { tiposObjetivo } from '../models/objetivo/tipos';

const tiposGlobales = gql`
scalar Date
`;

export const tipos = [  
    tiposGlobales,
    tiposEnums,
    tiposUsuario,
    tiposProyecto,
    tiposAvance,
    tiposInscripcion,
    tiposObjetivo,
];