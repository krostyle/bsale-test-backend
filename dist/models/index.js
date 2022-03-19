"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Category", {
  enumerable: true,
  get: function get() {
    return _Categroy["default"];
  }
});
Object.defineProperty(exports, "Product", {
  enumerable: true,
  get: function get() {
    return _Product["default"];
  }
});

var _Product = _interopRequireDefault(require("./Product"));

var _Categroy = _interopRequireDefault(require("./Categroy"));

//Relaciones entre las tablas
_Categroy["default"].hasMany(_Product["default"], {
  foreignKey: "category",
  as: "products"
});

_Product["default"].belongsTo(_Categroy["default"], {
  foreignKey: "category",
  as: "categories"
});