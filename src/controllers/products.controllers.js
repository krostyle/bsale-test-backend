import { Product } from "../models";
import { Category } from "../models";


const getProducts = async(req, res) => {
    try {
        const { limit = 100, offset = 0, order, ...params } = req.query;
        //Es necesario hacer las consultras en la base de datos
        //pagination
        const productsPaginated = productsFiltered.slice(offset, offset + limit);
        const quantity = productsPaginated.length;
        return res.json({
            quantity,
            products: productsPaginated
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
    getProduct,
    getProductsByCategory
}