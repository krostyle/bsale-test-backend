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

//con babel config
//Routes Imports
//Paths
var paths = {
  products: '/api/v1/products'
}; //Initializations

var app = (0, _express["default"])(); //Settings

app.set('port', _config["default"].SERVER_PORT || 3000); //Middlewares

app.use((0, _morgan["default"])('tiny'));
app.use((0, _cors["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json()); //Routes

app.use(paths.products, _products["default"]);
var _default = app;
exports["default"] = _default;