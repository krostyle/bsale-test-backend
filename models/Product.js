import { Sequelize } from 'sequelize';
import sequelize from '../database/config';

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    url_image: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    },
    discount: {
        type: Sequelize.INTEGER
    },
    category: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


export default Product;