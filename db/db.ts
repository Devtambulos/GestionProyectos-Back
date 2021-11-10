import { connect } from 'mongoose';

const connectDB = async () => {
  return await connect(   
    'mongodb+srv://userFelipe:admin@gestionproyectos.9onm9.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default connectDB;