import { Schema, model } from 'mongoose';
import { Enum_Rol } from './enums';
import { Enum_EstadoUsuario } from './enums';

interface User {
  nombre: string;
  apellido: string;
  correo: string;
  identificacion: string;
  contrasena: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
}

const userSchema = new Schema<User>({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: Enum_Rol,
  },
   estado: {
    type: String,
    required: true,
    enum: Enum_Rol,
  },
});

const UserModel = model('User', userSchema);

export { UserModel };
