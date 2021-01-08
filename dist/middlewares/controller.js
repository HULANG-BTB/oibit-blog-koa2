"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _controller = _interopRequireDefault(require("../controller"));

var createDbConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var controllers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            controllers = (0, _controller["default"])();
            Object.keys(controllers).forEach(function (key) {
              controllers[key] = controllers[key].init(ctx);
            });
            _context.next = 4;
            return next();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createDbConnection(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createMiddleWare = function createMiddleWare() {
  return createDbConnection;
};

var _default = createMiddleWare;
exports["default"] = _default;