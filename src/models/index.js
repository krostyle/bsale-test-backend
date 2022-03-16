import Product from "./Product";
import Category from "./Categroy";

//Relaciones entre las tablas
Category.hasMany(Product, { foreignKey: "category", as: "products" });
Product.belongsTo(Category, { foreignKey: "category", as: "categories" });
export {
    Product,
    Category
}