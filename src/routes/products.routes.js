import { Router } from "express";
import { getProducts, getProduct } from "../controllers/products.controllers";


//Rutas para los productos
//api/v1/products
const router = Router();
router.get("/", getProducts);
router.get("/:id", getProducts);

export default router;