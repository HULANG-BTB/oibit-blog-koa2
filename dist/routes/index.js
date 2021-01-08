"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../utils/context"));

var initRouters = function initRouters(app) {
  var files = (0, _context["default"])(__dirname, false, /\.js$/);
  files.keys().filter(function (key) {
    return key !== 'index.js';
  }).forEach(function (key) {
    var fileContext = files.context(key);
    var router = fileContext["default"];
    app.use(router.routes(), router.allowedMethods());
  });
};

var _default = initRouters;
exports["default"] = _default;