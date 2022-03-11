"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsByCategory = exports.getProducts = exports.getProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

var _excluded = ["limit", "offset", "order"],
    _excluded2 = ["limit", "offset", "order"];

var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, _req$query$limit, limit, _req$query$offset, offset, order, params, products, productsFiltered, _order$split, _order$split2, key, value, productsPaginated, quantity;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 100 : _req$query$limit, _req$query$offset = _req$query.offset, offset = _req$query$offset === void 0 ? 0 : _req$query$offset, order = _req$query.order, params = (0, _objectWithoutProperties2["default"])(_req$query, _excluded);
            _context.next = 4;
            return _models.Product.findAll({
              include: [{
                model: _models.Category,
                as: "categories",
                attributes: ["name"]
              }]
            });

          case 4:
            products = _context.sent;
            //filter by query params 
            productsFiltered = products.filter(function (product) {
              return Object.keys(params).every(function (key) {
                if (key === 'name') {
                  return product.name.toLowerCase().includes(params[key].toLowerCase());
                } else if (key === 'category') {
                  return product.categories.name.toLowerCase() === params[key].toLowerCase();
                }

                return product[key] === params[key];
              });
            }); //order by query params

            if (order) {
              _order$split = order.split(':'), _order$split2 = (0, _slicedToArray2["default"])(_order$split, 2), key = _order$split2[0], value = _order$split2[1];
              productsFiltered.sort(function (a, b) {
                if (value === 'asc') {
                  return a[key] - b[key];
                }

                return b[key] - a[key];
              });
            } //pagination


            productsPaginated = productsFiltered.slice(offset, offset + limit);
            quantity = productsPaginated.length;
            return _context.abrupt("return", res.json({
              quantity: quantity,
              products: productsPaginated
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al obtener productos"
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
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
}(); //get product by category name


exports.getProduct = getProduct;

var getProductsByCategory = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$query2, _req$query2$limit, limit, _req$query2$offset, offset, order, params, products, productsFiltered;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$query2 = req.query, _req$query2$limit = _req$query2.limit, limit = _req$query2$limit === void 0 ? 100 : _req$query2$limit, _req$query2$offset = _req$query2.offset, offset = _req$query2$offset === void 0 ? 0 : _req$query2$offset, order = _req$query2.order, params = (0, _objectWithoutProperties2["default"])(_req$query2, _excluded2);
            _context3.next = 4;
            return _models.Product.findAll({
              include: [{
                model: _models.Category,
                as: "categories",
                attributes: ["name"]
              }]
            });

          case 4:
            products = _context3.sent;
            //filter by category name
            productsFiltered = products.filter(function (product) {
              return product.categories.some(function (category) {
                return category.name === req.params.category;
              });
            });
            return _context3.abrupt("return", res.json(productsFiltered));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Error al obtener productos"
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function getProductsByCategory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductsByCategory = getProductsByCategory;