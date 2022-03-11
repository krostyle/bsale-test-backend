import { Product } from "../models";
import { Category } from "../models";

const getProducts = async(req, res) => {
    try {
        const { limit = 100, offset = 0, order, ...params } = req.query;
        const products = await Product.findAll({
            include: [{
                model: Category,
                as: "categories",
                attributes: ["name"]
            }],

        });

        //filter by query params 
        const productsFiltered = products.filter(product => {
            return Object.keys(params).every(key => {
                if (key === 'name') {
                    return product.name.toLowerCase().includes(params[key].toLowerCase());
                } else if (key === 'category') {
                    return product.categories.name.toLowerCase() === params[key].toLowerCase();
                }
                return product[key] === params[key];
            });
        });

        //order by query params
        if (order) {
            const [key, value] = order.split(':');
            productsFiltered.sort((a, b) => {
                if (value === 'asc') {
                    return a[key] - b[key];
                }
                return b[key] - a[key];
            });
        }
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
}

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

//get product by category name
const getProductsByCategory = async(req, res) => {
    try {
        const { limit = 100, offset = 0, order, ...params } = req.query;
        const products = await Product.findAll({
            include: [{
                model: Category,
                as: "categories",
                attributes: ["name"]
            }],

        });

        //filter by category name
        const productsFiltered = products.filter(product => {
            return product.categories.some(category => category.name === req.params.category);
        });
        return res.json(productsFiltered);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener productos"
        });
    }
}



export {
    getProducts,
    getProduct,
    getProductsByCategory
}