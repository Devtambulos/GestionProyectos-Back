import { gql } from "apollo-server-core";

export const tiposAutenticacion = gql`
  type Token {
    token: String
    error: String
  }


  type Mutation {
    registro(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: String!
      password: String!
      estado: Enum_EstadoUsuario
    ): Token!

    login(correo: String!, password: String!): Token

    refreshToken: Token

    
  }
`;
