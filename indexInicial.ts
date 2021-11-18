import conectarBD from "./db/db";
import { UserModel } from "./models/usuario/usuario";
import { ProjectModel } from "./models/proyecto";
import {
  Enum_EstadoUsuario,
  Enum_Rol,
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_EstadoInscripcion,
  Enum_TipoObjetivo,
} from "./models/enums/enums";
import { InscriptionModel } from "./models/inscripcion";
import { AvanceModel } from "./models/avance";
import { ObjetivoModel } from "./models/objetivos";

const main = async () => {
  await conectarBD();


    


  
};

main();

    //  CREAR OBJETIVO
  // ObjetivoModel.create({
  //   proyecto: '618c3a3598482ebb20d5b692',
  //   descripcion: "Objetivo especifico 1",
  //   tipo: Enum_TipoObjetivo.especifico
  // })
  //   .then((a) =>{
  //     console.log('Avance creado',a);
  //   })
  //   .catch((e)=>{
  //     console.log('Error',e);
  //   });

  /* 
  CREAR AVANCES
  AvanceModel.create({
    proyecto: '618c3a3598482ebb20d5b692',
    descripcion: "Avanzando",
    observaciones: 'Avanzando',
    fecha: Date.now(),
    creadoPor: '618b4816d5bcaf15276bc479'
  })
    .then((a) =>{
      console.log('Avance creado',a);
    })
    .catch((e)=>{
      console.log('Error',e);
    });
    */

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
  //   nombre:'Proyecto 2',
  //   objetivos:'Cualquier cosa',
  //   presupuesto:250000,
  //   fechaInicio:Date.now(),
  //   fechaFin:new Date("2022/11/10"),
  //   lider:'618b4816d5bcaf15276bc479',
  // })
  //   .then((u) => {
  //     console.log('Proyecto creado', u);
  //   })
  //   .catch((e) => {
  //     console.error('Error creando el proyecto', e);
  //   });

  // OBTENER LOS PROYECTOS
  /* await ProjectModel.find({ nombre: "Proyecto 2" })
    .populate("lider")
    .then((u) => {
      console.log("proyecto", u);
    })
    .catch((e) => {
      console.error("error obteniendo los proyectos", e);
    });
 */
  //EDITAR UN PROYECTO
  // await ProjectModel.findOneAndUpdate(
  //   { nombre: 'Optimizacion' },
  //   {
  //     objetivos: 'Varios Objetivos',
  //     presupuesto: 450000,
  //   }
  // )
  //   .then((u) => {
  //     console.log('proyecto actualizado', u);
  //   })
  //   .catch((e) => {
  //     console.error('error actualizando el proyecto', e);
  //   });

  //ELIMINAR UN PROYECTO
  // await ProjectModel.findOneAndDelete(
  //   { nombre: 'Optimizacion' })
  //   .then((u) => {
  //     console.log('proyecto eliminado', u);
  //   })
  //   .catch((e) => {
  //     console.error('error eliminando el proyecto', e);
  //   });


/* 
//  CREAR UNA INSCRIPCIÓN
await InscriptionModel.create({
  proyecto: "618c3684f0ac9548cc042f5c",
  estudiante: "618b4816d5bcaf15276bc479",
  estado: Enum_EstadoInscripcion.aceptada,
  fechaIngreso: Date.now(),
  fechaEgreso: new Date("2022/4/15"),
})
  .then((u) => {
    console.log("Inscripción creada", u);
  })
  .catch((e) => {
    console.error("Error creando la inscripcion", e);
  });

 */


