import { gql } from 'apollo-server-express';

const tiposProyecto = gql`

  input camposProyecto{
    nombre: String
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: Usuario
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

  input FiltroProyectos {
    _id: ID
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto   
  }

  type Query {
    Proyectos(filtro: FiltroProyectos): [Proyecto]
    Proyecto(_id: String!): Proyecto
  }
  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date
      fechaFin: Date
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String
    ): Proyecto

    editarProyecto(
      _id: String!
      nombre: String
      presupuesto: Float
      fechaInicio: Date
      fechaFin: Date
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String
    ): Proyecto

    eliminarProyecto(_id: String): Proyecto    
  }
`;

export { tiposProyecto };