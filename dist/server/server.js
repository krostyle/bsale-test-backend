"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("../config/config"));

var _products = _interopRequireDefault(require("../routes/products.routes"));

var _categories = _interopRequireDefault(require("../routes/categories.routes"));

//con babel config
//Routes Imports
//Paths
var paths = {
  products: '/api/v1/products',
  categories: '/api/v1/categories'
}; //Initializations

var app = (0, _express["default"])(); //Settings

app.set('port', _config["default"].PORT || 3000); //Middlewares

app.use((0, _morgan["default"])('tiny'));
app.use((0, _cors["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json()); //Routes

app.use(paths.products, _products["default"]);
app.use(paths.categories, _categories["default"]);
var _default = app;
exports["default"] = _default;