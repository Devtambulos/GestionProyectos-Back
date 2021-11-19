import { gql } from 'apollo-server-express';

const tiposObjetivo = gql`
  type Objetivo {
    _id: ID!
    proyecto: Proyecto!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }
  
  type Query {
      Objetivos: [Objetivo]
  }
  type Mutation{
      crearObjetivo(
         proyecto: String!,
         descripcion: String!,
         tipo: Enum_TipoObjetivo, 
      ):Objetivo
  }
`;
export { tiposObjetivo };
