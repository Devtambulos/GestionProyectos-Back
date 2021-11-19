import { gql } from "apollo-server-express";

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date!
    fechaEgreso: Date!
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Query {
    Inscripcion: Inscripcion
  }

  type Mutation {
    crearInscripcion(
      estado: Enum_EstadoInscripcion!
      fechaIngreso: Date!
      fechaEgreso: Date!
      proyecto: String!
      estudiante: String!
    ): Inscripcion
  }
`;

export { tiposInscripcion };
