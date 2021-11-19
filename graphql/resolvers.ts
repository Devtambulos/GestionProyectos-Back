import { resolversUsuario } from '../models/usuario/resolvers';
import { resolverInscripcion } from '../models/inscripcion/resolvers';
import { resolversAvance } from '../models/avance/resolvers';
import { resolversObjetivo } from '../models/objetivo/resolvers';

export const resolvers = [resolversUsuario, /* resolversObjetivo*/ , /* resolversAvance */ , /* resolverInscripcion */];
