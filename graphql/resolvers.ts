import { resolversUsuario } from '../models/usuario/resolvers';
import { resolverInscripciones } from '../models/inscripcion/resolvers';
import { resolversAvance } from '../models/avance/resolvers';
import { resolversObjetivo } from '../models/objetivo/resolvers';
import { resolversProyecto } from '../models/proyecto/resolvers';

<<<<<<< HEAD
export const resolvers = [resolversUsuario, /* resolversObjetivo*/ , /* resolversAvance */ , /* resolverInscripcion */];
=======
export const resolvers = [resolversUsuario,
resolversProyecto,
resolversObjetivo,
resolversAvance,
resolverInscripciones];
>>>>>>> ef7c6579a014a162c706fb03f7e707e3130a84aa
