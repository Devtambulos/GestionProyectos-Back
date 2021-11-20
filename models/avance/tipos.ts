import { gql } from 'apollo-server-express';

const tiposAvance = gql`
  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: String
    proyecto: Proyecto!
    creadoPor: Usuario!
  }
  type Query {
    Avances: [Avance]
    filtrarAvance(idProyecto: String!): [Avance]
  }
  type Mutation {
    crearAvance(
    fecha: Date!
    descripcion: String!
    proyecto: String!
    creadoPor: String!): Avance

    editarAvance(
      _id: String!
      descripcion: String!
      observaciones: String!
    ) : Avance

    eliminarAvance(
      _id: String!
    ) : Avance
  }
`;

export { tiposAvance };