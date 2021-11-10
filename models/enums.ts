enum Enum_Rol {
  estudiante = 'Estudiante',
  lider = 'Líder',
  administrador = 'Administrador',
}

enum Enum_EstadoUsuario {
  pendiente = 'Pendiente',
  autorizado = 'Autorizado',
  noAutorizado = 'No Autorizado',
}

enum Enum_EstadoProyecto {
  activo = 'Activo',
  inactivo = 'Inactivo',  
}

enum Enum_FaseProyecto {
  iniciado = 'Iniciado',
  desarrollo = 'En Desarrollo',
  terminado = 'Terminado',
  nula = '',  
}
export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto };