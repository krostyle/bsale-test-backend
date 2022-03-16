import { Router } from "express";
import { getCategories } from "../controllers/categories.controllers";


//Rutas para las categorias
//api/v1/categories
const router = Router();
router.get("/", getCategories);

export default router;