import { connect } from 'mongoose';

const connectDB = async () => {
  return await connect(   
    'mongodb+srv://MarcelaR:nreyes123@gestionproyectos.9onm9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    
  );
};

export default connectDB;
