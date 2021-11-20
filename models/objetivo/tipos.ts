import { gql } from 'apollo-server-express';

const tiposObjetivo = gql`
  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
    proyecto: Proyecto!
  }
  type Query {
    Objetivos: [Objetivo]
    filtrarObjetivo(idProyecto: ID!): [Objetivo]
  }
  type Mutation {
    crearObjetivo( _id: ID!
        descripcion: String!
        tipo: Enum_TipoObjetivo!
        proyecto: String!): Objetivo

    editarObjetivo(
      _id: ID!
      descripcion: String!
    ): Objetivo

    eliminarObjetivo(
      _id: ID!
    ): Objetivo
  }
`;

export { tiposObjetivo };
