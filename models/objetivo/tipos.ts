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
    filtrarObjetivo(idProyecto: String!): [Objetivo]
    objetivo(_id: String!): Objetivo
  }
  type Mutation {
    crearObjetivo( 
        descripcion: String!
        tipo: Enum_TipoObjetivo!
        proyecto: String!): Objetivo

    editarObjetivo(
      _id: String!
      descripcion: String!
    ): Objetivo

    eliminarObjetivo(
      _id: String!
    ): Objetivo
  }
`;

export { tiposObjetivo };
