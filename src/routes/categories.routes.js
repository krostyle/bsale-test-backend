import { Router } from "express";
import { getCategories } from "../controllers/categories.controllers";

const router = Router();
router.get("/", getCategories);

export default router;