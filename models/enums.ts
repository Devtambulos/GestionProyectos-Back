enum Enum_Rol {
  estudiante = 'Estudiante',
  lider = 'Líder',
  administrador = 'Administrador',
}
export { Enum_Rol };

enum Enum_EstadoUsuario {
  pendiente = 'Pendiente',
  autorizado = 'Autorizado',
  noAutorizado = 'No Autorizado',
}
export { Enum_EstadoUsuario };

enum Enum_EstadoProyecto {
  activo = 'Activo',
  inactivo = 'Inactivo',  
}
export { Enum_EstadoProyecto };

enum Enum_FaseProyecto {
  iniciado = 'Iniciado',
  desarrollo = 'Desarrollo',
  terminado = 'Terminado',  
}
export { Enum_FaseProyecto };

enum Enum_EstadoInscripcion {
  aceptada = 'Aceptada',
  rechazada = 'Rechazada'
}

export {Enum_EstadoInscripcion} 

//IMPORTANTE: También se puede aL final poner un solo export que exporte todos los enum en lugar de un export por cada enum xd