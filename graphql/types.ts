import { gql } from 'apollo-server-express';
import { tiposUsuario } from '../models/usuario/tipos';
import { tiposEnums } from '../models/enums/tipos';
import { tiposProyecto } from '../models/proyecto/tipos';


const tiposGlobales = gql`
scalar Date
`;

export const tipos = [tiposGlobales, tiposUsuario, tiposEnums, tiposProyecto];