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
        const category = await Category.findByPk(req.params.id, {
            include: {
                model: Product,
                as: "products"
            }
        });
        res.json(category);
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