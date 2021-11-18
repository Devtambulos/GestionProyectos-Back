import { connect } from 'mongoose';

const conectarBD = async () => {
  return await connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la DB', e);
    });
};
<<<<<<< HEAD

=======
>>>>>>> eebb7f4509da9361ad6d4ef8907baa2c3407376f
export default conectarBD;