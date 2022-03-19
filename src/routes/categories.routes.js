import { Router } from "express";
import { getCategories, getProductsByCategory } from "../controllers/categories.controllers";


//Rutas para las categorias
//api/v1/categories
const router = Router();
router.get("/", getCategories);
router.get("/:id/products", getProductsByCategory);

export default router;