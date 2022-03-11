import { Category } from "../models";


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

export {
    getCategories
}