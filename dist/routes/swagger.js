"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var router = (0, _koaRouter["default"])();
var definition = {
  info: {
    title: 'API',
    version: '1.0.0',
    description: 'API'
  },
  host: 'localhost:3000',
  basePath: '/'
};
var options = {
  definition: definition,
  apis: ['./routes/*.js']
};
var swaggerSpec = (0, _swaggerJsdoc["default"])(options);
router.get('/swagger.json', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.set('Content-Type', 'application/json');
            ctx.body = swaggerSpec;

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;