"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _model = _interopRequireDefault(require("../model"));

var model = (0, _model["default"])();

var Service = /*#__PURE__*/function () {
  function Service() {
    (0, _classCallCheck2["default"])(this, Service);
  }

  (0, _createClass2["default"])(Service, null, [{
    key: "init",
    value: function init() {
      this.model = model;
    }
  }]);
  return Service;
}();

exports["default"] = Service;