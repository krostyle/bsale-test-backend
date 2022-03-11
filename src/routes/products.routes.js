import { Router } from "express";
import { getProducts, getProduct, getProductsByCategory } from "../controllers/products.controllers";

const router = Router();
router.get("/", getProducts);
router.get("/:id", getProducts);

export default router;