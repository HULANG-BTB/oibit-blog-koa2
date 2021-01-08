"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../utils/context"));

var initControllers = function initControllers() {
  var modules = {};
  var files = (0, _context["default"])(__dirname, false, /\.js$/);
  files.keys().filter(function (key) {
    return key !== 'index.js';
  }).forEach(function (key) {
    var fileContext = files.context(key);
    modules[fileContext.name] = fileContext["default"];
  });
  return modules;
};

var _default = initControllers;
exports["default"] = _default;