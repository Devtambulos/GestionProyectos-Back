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
  }
  type Mutation {
    crearObjetivo( _id: ID!
        descripcion: String!
        tipo: Enum_TipoObjetivo!
        proyecto: String!): Objetivo
  }
`;

export { tiposObjetivo };
