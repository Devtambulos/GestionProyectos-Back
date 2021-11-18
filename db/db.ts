import { connect } from 'mongoose';

const conectarBD = async () => {
  return await connect(   
    'mongodb+srv://MarcelaR:nreyes123@gestionproyectos.9onm9.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;