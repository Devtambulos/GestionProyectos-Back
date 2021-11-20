import { gql } from 'apollo-server-express';
import { tiposUsuario } from '../models/usuario/tipos';
import { tiposEnums } from '../models/enums/tipos';
import { tiposInscripcion } from '../models/inscripcion/tipos';
import { tiposAvance } from '../models/avance/tipos';
import { tiposObjetivo } from '../models/objetivo/tipos';
import { tiposProyecto } from '../models/proyecto/tipos';

const tiposGlobales = gql`
scalar Date
`;

<<<<<<< HEAD
export const tipos = [tiposGlobales,/*tiposObjetivo*/ , /* tiposInscripcion */,/*tiposAvance*/ ,tiposUsuario,tiposEnums];
=======
export const tipos = [tiposGlobales,
tiposProyecto,
tiposObjetivo,
tiposInscripcion,
tiposAvance,
tiposUsuario,
tiposEnums];
>>>>>>> ef7c6579a014a162c706fb03f7e707e3130a84aa
