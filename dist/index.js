"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _config = _interopRequireDefault(require("./config/config"));

var _server = _interopRequireDefault(require("./server/server"));

console.log(_server["default"].get('port'));

_server["default"].listen('port', function () {
  console.log("Server on port ".concat(_server["default"].get("port")));
  console.log("http://localhost:".concat(_server["default"].get("port")));
});