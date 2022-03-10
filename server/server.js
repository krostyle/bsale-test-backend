//con babel config
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';



import configurations from '../config/config';


//Routes Imports
import productsRoutes from '../routes/products.routes';
import categoriesRoutes from '../routes/categories.routes';

//Paths
const paths = {
    products: '/api/v1/products',
    categories: '/api/v1/categories',
};


//Initializations
const app = express();

//Settings
app.set('port', configurations.SERVER_PORT || 3000);

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes

app.use(paths.products, productsRoutes);
app.use(paths.categories, categoriesRoutes);



export default app;