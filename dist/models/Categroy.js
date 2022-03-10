"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _config = _interopRequireDefault(require("../database/config"));

var Category = _config["default"].define('category', {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize.Sequelize.STRING
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Category;
exports["default"] = _default;