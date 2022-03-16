import { Sequelize } from 'sequelize';
import configurations from '../config/config';

//Configuracion de la conexion
const sequelize = new Sequelize(
    configurations.DB_NAME,
    configurations.DB_USER,
    configurations.DB_PASSWORD, {
        host: configurations.DB_HOST,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false,
        ssl: true
    }
);

//Metodo para verificar la conexion
const connect = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

connect();

export default sequelize;