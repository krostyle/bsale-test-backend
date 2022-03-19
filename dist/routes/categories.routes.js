"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _categories = require("../controllers/categories.controllers");

//Rutas para las categorias
//api/v1/categories
var router = (0, _express.Router)();
router.get("/", _categories.getCategories);
router.get("/:id/products", _categories.getProductsByCategory);
var _default = router;
exports["default"] = _default;