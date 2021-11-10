import conectarBD from './db/db';
import { UserModel } from './models/usuario';
import { Enum_EstadoUsuario, Enum_Rol } from './models/enums';

const main = async () => {
  await conectarBD();

  // CREAR UN USUARIO
  await UserModel.create({
    nombre: 'Marcela',
    apellido: 'Reyes',
    correo: 'Marcereyesq@hotmail.com',
    identificacion: '1057579801',
    contrasena: 'nreyes123',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  })
    .then((u) => {
      console.log('Usuario creado', u);
    })
    .catch((e) => {
      console.error('Error creando el usuario', e);
    });

  // OBTENER LOS USUARIOS
  // await UserModel.find()
  //   .then((u) => {
  //     console.log('usuarios', u);
  //   })
  //   .catch((e) => {
  //     console.error('error obteniendo los usuarios', e);
  //   });
};

main();

