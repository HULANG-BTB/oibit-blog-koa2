"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../utils/context"));

var initServices = function initServices() {
  var modules = {};
  var files = (0, _context["default"])(__dirname, false, /\.js$/);
  files.keys().filter(function (key) {
    return key !== 'index.js';
  }).forEach(function (key) {
    var ctx = files.context(key);
    modules[ctx.name] = ctx["default"].init();
  });
  return modules;
};

var _default = initServices;
exports["default"] = _default;