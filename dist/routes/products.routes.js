"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controllers");

//Rutas para los productos
//api/v1/products
var router = (0, _express.Router)();
router.get("/", _products.getProducts);
router.get("/:id", _products.getProducts);
var _default = router;
exports["default"] = _default;