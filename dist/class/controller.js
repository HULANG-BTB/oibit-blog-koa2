"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _service = _interopRequireDefault(require("../service"));

var service = (0, _service["default"])();

var Controller = /*#__PURE__*/function () {
  function Controller() {
    (0, _classCallCheck2["default"])(this, Controller);
  }

  (0, _createClass2["default"])(Controller, null, [{
    key: "init",
    value: function init(ctx) {
      this.service = service;
      if (ctx) this.ctx = ctx;
    }
  }]);
  return Controller;
}();

exports["default"] = Controller;