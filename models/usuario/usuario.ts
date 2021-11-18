import { Schema, model } from 'mongoose';
<<<<<<< HEAD:models/usuario/usuario.ts
import { Enum_Rol, Enum_EstadoUsuario } from '../enums/enums';
=======
import { Enum_Rol } from './enums/enums';
import { Enum_EstadoUsuario } from './enums/enums';
>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f:models/usuario.ts

interface User {
  nombre: string;
  apellido: string;
  correo: string;
  identificacion: string;
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
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: 'El formato del correo electrónico está malo.',
    },
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  rol: {
    type: String,
    required: true,
    enum: Enum_Rol,
  },
   estado: {
    type: String,
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.PENDIENTE,
  },
});

const UserModel = model('User', userSchema);

export { UserModel };