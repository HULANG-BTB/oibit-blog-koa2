"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _koa = _interopRequireDefault(require("koa"));

var _koaJson = _interopRequireDefault(require("koa-json"));

var _koaOnerror = _interopRequireDefault(require("koa-onerror"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _controller = _interopRequireDefault(require("./middlewares/controller"));

var _response = _interopRequireDefault(require("./middlewares/response"));

var _routes = _interopRequireDefault(require("./routes"));

var _koa2SwaggerUi = require("koa2-swagger-ui");

// app instance
var app = new _koa["default"](); // error handler

(0, _koaOnerror["default"])(app); // middlewares

app.use((0, _koaBodyparser["default"])({
  enableTypes: ['json', 'form', 'text']
}));
app.use((0, _koa2SwaggerUi.koaSwagger)({
  routePrefix: '/swagger',
  // host at /swagger instead of default /docs
  swaggerOptions: {
    url: '/swagger.json' // example path to json

  }
}));
app.use((0, _koaJson["default"])());
app.use((0, _koaLogger["default"])());
app.use((0, _controller["default"])()); // 统一接口返回

app.use((0, _response["default"])()); // logger

app.use( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var start, ms;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = new Date();
            _context.next = 3;
            return next();

          case 3:
            ms = new Date() - start;
            console.log("".concat(ctx.method, " ").concat(ctx.url, " - ").concat(ms, "ms"));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()); // routes

(0, _routes["default"])(app); // error-handling

app.on('error', function (err, ctx) {
  console.error('server error', err, ctx);
});
module.exports = app;