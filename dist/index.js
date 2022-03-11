"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _server = _interopRequireDefault(require("./server/server"));

_server["default"].listen('port', function () {
  console.log("Server on port ".concat(_server["default"].get("port")));
  console.log("http://localhost:".concat(_server["default"].get("port")));
});