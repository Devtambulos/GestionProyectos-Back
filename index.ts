import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectarBD from './db/db';
import { tipos } from './graphql/types';
import { resolvers } from './graphql/resolvers';

dotenv.config();

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarBD();
  await server.start();

  server.applyMiddleware({ app });

  console.log('Servidor listo');
});

// CREAR UN USUARIO
  // await UserModel.create({
  //   nombre: 'Marcela',
  //   apellido: 'Reyes',
  //   correo: 'Marcereyesq@hotmail.com',
  //   identificacion: '1057579801',
  //   contrasena: 'nreyes123',
  //   rol: Enum_Rol.administrador,
  //   estado: Enum_EstadoUsuario.autorizado,
  // })
  //   .then((u) => {
  //     console.log('Usuario creado', u);
  //   })
  //   .catch((e) => {
  //     console.error('Error creando el usuario', e);
  //   });


