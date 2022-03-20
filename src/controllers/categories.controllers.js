import { Category } from "../models";
import { Product } from "../models";

//Metodo para obtener todas las categorias
const getCategories = async(req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener categorias"
        });
    }
}

const getProductsByCategory = async(req, res) => {
    try {
        const options = {};
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        options.limit = limit;
        options.offset = offset;

        const category = await Category.findByPk(req.params.id, {
            include: {
                model: Product,
                as: "products",
                ...options
            },

        });
        return res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener categorias"
        });
    }
}

export {
    getCategories,
    getProductsByCategory
}