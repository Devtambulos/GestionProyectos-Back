import { gql } from 'apollo-server-express';

const tiposAvance = gql`

  input camposAvances {
    fecha: Date
    descripcion: String
    observaciones: String
  }


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
    avance(_id: String!): Avance
  }
  type Mutation {
    crearAvance(
      descripcion: String!
      proyecto: String!
      creadoPor: String!
      fecha: String): Avance

    editarAvance(
      _id: String!, 
      fecha: Date
      descripcion: String
      observaciones: String
      ) : Avance

    eliminarAvance(
      _id: String!
    ) : Avance
  }
`;

export { tiposAvance };