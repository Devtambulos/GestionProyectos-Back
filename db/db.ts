import { connect } from 'mongoose';

const connectDB = async () => {
  return await connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la DB', e);
    });
};

export default connectDB;