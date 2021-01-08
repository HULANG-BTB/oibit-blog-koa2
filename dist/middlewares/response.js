"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var createResponse = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = {
              code: 200,
              data: null,
              error: null
            };
            _context.prev = 1;
            _context.next = 4;
            return next();

          case 4:
            response.data = ctx.body;
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            response.code = 500;
            response.error = _context.t0.message;

          case 11:
            _context.prev = 11;
            ctx.body = response;
            return _context.finish(11);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7, 11, 14]]);
  }));

  return function createResponse(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createMiddleWare = function createMiddleWare() {
  return createResponse;
};

var _default = createMiddleWare;
exports["default"] = _default;