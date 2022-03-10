import Product from "./Product";
import Category from "./Categroy";


Category.hasMany(Product, { foreignKey: "category", as: "products" });
Product.belongsTo(Category, { foreignKey: "category", as: "categories" });
export {
    Product,
    Category
}