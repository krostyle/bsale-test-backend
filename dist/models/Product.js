"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _config = _interopRequireDefault(require("../database/config"));

var Product = _config["default"].define('product', {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize.Sequelize.STRING
  },
  url_image: {
    type: _sequelize.Sequelize.STRING
  },
  price: {
    type: _sequelize.Sequelize.FLOAT
  },
  discount: {
    type: _sequelize.Sequelize.INTEGER
  },
  category: {
    type: _sequelize.Sequelize.INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Product;
exports["default"] = _default;