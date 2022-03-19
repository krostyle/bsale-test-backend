import { Op } from "sequelize";
import { Product } from "../models";
import { Category } from "../models";



const getProducts = async(req, res) => {
    try {
        //Filtro por nombre
        const options = {};
        const order = [];
        if (req.query.name) {
            options.where = {
                name: {
                    [Op.like]: `%${req.query.name}%`
                }
            }
        }
        //Orden por parametro
        if (req.query.order) {
            const [key, value] = req.query.order.split(":");
            order.push([key, value]);
        }

        //Paginacion
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        options.limit = limit;
        options.offset = offset;
        options.order = order;

        const products = await Product.findAndCountAll(options);
        return res.json({
            products
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener productos"
        });
    }
};




const getProduct = async(req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener producto"
        });
    }
}





export {
    getProducts,
    getProduct
}