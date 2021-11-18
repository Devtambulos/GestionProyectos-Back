import { gql } from 'apollo-server-express';

const tiposProyecto = gql`
# type Objetivo {
#     _id: ID!
#     descripcion: String!
#     tipo: Enum_TipoObjetivo!
#   }
#   input crearObjetivo {
#     descripcion: String!
#     tipo: Enum_TipoObjetivo!
#   }
  type Proyecto {
    _id: ID!
    nombre: String!
    # objetivos: [Objetivo]
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!    
  }

  type Query {
    Proyectos: [Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
    #   objetivos: [crearObjetivo]
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: String!

    ): Proyecto
  }

`;

export { tiposProyecto };