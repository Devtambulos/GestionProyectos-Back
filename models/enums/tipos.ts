import { gql } from 'apollo-server-express';

const tiposEnums = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }
<<<<<<< HEAD

=======
>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f
  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }
<<<<<<< HEAD

=======
>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f
  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }
<<<<<<< HEAD

=======
>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f
  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }
<<<<<<< HEAD

=======
>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f
  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
  }
<<<<<<< HEAD
`;

export { tiposEnums };
=======

  enum Enum_EstadoInscripcion {
    ACEPTADA
    RECHAZADA
  }

`;

export { tiposEnums };
>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f
