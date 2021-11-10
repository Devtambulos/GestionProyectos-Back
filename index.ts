import conectarBD from './db/db';
import { UserModel } from './models/usuario';
import { ProjectModel } from './models/proyecto';
import { Enum_EstadoUsuario, Enum_Rol, Enum_EstadoProyecto, Enum_FaseProyecto } from './models/enums';

const main = async () => {
  await conectarBD();

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

  // // OBTENER LOS USUARIOS
  // await UserModel.find()
  //   .then((u) => {
  //     console.log('usuarios', u);
  //   })
  //   .catch((e) => {
  //     console.error('error obteniendo los usuarios', e);
  //   });


  // CREAR UN PROYECTO
  // await ProjectModel.create({
  //   nombre:'Optimizacion',
  //   objetivos:'Cualquier cosa',
  //   presupuesto:250000,
  //   fechaInicio:'10/11/2021',
  //   fechaFin:'01/05/2023',
  //   lider:'Cualquiera',
  //   estado:Enum_EstadoProyecto.activo,
  //   fase: Enum_FaseProyecto.iniciado,

  // })
  //   .then((u) => {
  //     console.log('Proyecto creado', u);
  //   })
  //   .catch((e) => {
  //     console.error('Error creando el proyecto', e);
  //   });

  // OBTENER LOS PROYECTOS
  // await ProjectModel.find()
  //   .then((u) => {
  //     console.log('proyecto', u);
  //   })
  //   .catch((e) => {
  //     console.error('error obteniendo los proyectos', e);
  //   });

  //EDITAR UN PROYECTO
  await ProjectModel.findOneAndUpdate(
    { nombre: 'Optimizacion' },
    {
      objetivos: 'Varios Objetivos',
      presupuesto: 450000,
    }
  )
    .then((u) => {
      console.log('proyecto actualizado', u);
    })
    .catch((e) => {
      console.error('error actualizando el proyecto', e);
    });

      //ELIMINAR UN PROYECTO
  // await ProjectModel.findOneAndDelete(
  //   { nombre: 'Optimizacion' })
  //   .then((u) => {
  //     console.log('proyecto eliminado', u);
  //   })
  //   .catch((e) => {
  //     console.error('error eliminando el proyecto', e);
  //   });
};

main();

