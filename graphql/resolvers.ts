import { resolversUsuario } from '../models/usuario/resolvers';
import { resolversProyecto } from '../models/proyecto/resolvers';
import { resolversAvance } from '../models/avance/resolvers';
import { resolverInscripciones } from '../models/inscripcion/resolvers';
import { resolversObjetivo } from '../models/objetivo/resolvers';


export const resolvers = [
    resolversUsuario, 
    resolversProyecto, 
    resolversAvance, 
    resolverInscripciones, 
    resolversObjetivo,
];