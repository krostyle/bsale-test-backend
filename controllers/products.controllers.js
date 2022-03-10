import { Product } from "../models";

const getProducts = async(req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener productos"
        });
    }
}


export {
    getProducts
}