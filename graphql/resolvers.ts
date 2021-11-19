import { resolversUsuario } from '../models/usuario/resolvers';
import { resolverInscripcion } from '../models/inscripcion/resolvers';
import { resolversAvance } from '../models/avance/resolvers';

export const resolvers = [resolversUsuario,
    /*resolversAvance*/ ,
    /* resolverInscripcion */];
