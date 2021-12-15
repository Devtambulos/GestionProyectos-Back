import { gql } from 'apollo-server-express';

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    foto: String
    identificacion: String!
    correo: String!
    rol: Enum_Rol
    estado: Enum_EstadoUsuario
    avances: [Avance]
    inscripciones: [Inscripcion]
    proyectos: [Proyecto]
  }
  
  input CamposEditarPerfil {
    nombre: String
    apellido: String
    identificacion: String
    foto: String
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String
      apellido: String
      identificacion: String
      correo: String
      rol: Enum_Rol
      estado: Enum_EstadoUsuario
    ): Usuario

    editarPerfil(_id: String!, campos: CamposEditarPerfil!): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario
  }
`;

export { tiposUsuario };
