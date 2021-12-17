import { Schema, model } from "mongoose";
import { Enum_Rol } from "../enums/enums";
import { Enum_EstadoUsuario } from "../enums/enums";

interface User {
  nombre: string;
  apellido: string;
  identificacion: string;
  foto: string;
  correo: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
  password: string;
}

const userSchema = new Schema<User>(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
      required: false,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: "El formato del correo electrónico es invalido.",
      },
    },
    password: {
      type: String,
      required: true,
    },
    identificacion: {
      type: String,
      required: true,
      unique: true,
    },
    rol: {
      type: String,
      required: false,
      enum: Enum_Rol,
    },
    estado: {
      type: String,
      required: true,
      enum: Enum_EstadoUsuario,
      default: Enum_EstadoUsuario.PENDIENTE,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual("avances", {
  ref: "Avance",
  localField: "_id",
  foreignField: "creadoPor",
});

userSchema.virtual("inscripciones", {
  ref: "Inscripcion",
  localField: "_id",
  foreignField: "estudiante",
});

userSchema.virtual("proyectos", {
  ref: "proyecto",
  localField: "_id",
  foreignField: "lider",
});

const UserModel = model("usuario", userSchema);

export { UserModel };
