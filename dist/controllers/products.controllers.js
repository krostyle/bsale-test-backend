"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = exports.getProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = require("sequelize");

var _models = require("../models");

var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var options, order, _req$query$order$spli, _req$query$order$spli2, key, value, page, limit, offset, products;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            //Filtro por nombre
            options = {};
            order = [];

            if (req.query.name) {
              options.where = {
                name: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(req.query.name, "%"))
              };
            } //Orden por parametro


            if (req.query.order) {
              _req$query$order$spli = req.query.order.split(":"), _req$query$order$spli2 = (0, _slicedToArray2["default"])(_req$query$order$spli, 2), key = _req$query$order$spli2[0], value = _req$query$order$spli2[1];
              order.push([key, value]);
            } //Paginacion


            page = parseInt(req.query.page) || 1;
            limit = parseInt(req.query.limit) || 10;
            offset = (page - 1) * limit;
            options.limit = limit;
            options.offset = offset;
            options.order = order;
            _context.next = 13;
            return _models.Product.findAndCountAll(options);

          case 13:
            products = _context.sent;
            return _context.abrupt("return", res.json({
              current: page,
              pages: Math.ceil(products.count / limit),
              total: products.count,
              products: products.rows
            }));

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al obtener productos"
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var getProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.Product.findByPk(req.params.id);

          case 3:
            product = _context2.sent;
            res.json(product);
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Error al obtener producto"
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProduct = getProduct;