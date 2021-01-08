"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.name = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _service = _interopRequireDefault(require("../class/service"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var name = 'Article';
exports.name = name;

var Article = /*#__PURE__*/function (_Service) {
  (0, _inherits2["default"])(Article, _Service);

  var _super = _createSuper(Article);

  function Article() {
    (0, _classCallCheck2["default"])(this, Article);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Article, null, [{
    key: "init",
    value: function init() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Article), "init", this).call(this);
      return Article;
    }
  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var page, size, offset, limit, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _ref.page, size = _ref.size;
                offset = (page - 1) * size;
                limit = size;
                _context.next = 5;
                return this.model.Article.findAll({
                  offset: offset,
                  limit: limit,
                  attributes: ['id', 'title', 'abstract', 'comment', 'view', 'like', 'create_time', 'update_time', 'thumbnail'],
                  order: [['create_time', 'DESC'], ['id', 'DESC']]
                });

              case 5:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function list(_x) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "detail",
    value: function () {
      var _detail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
        var id, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id;
                _context2.next = 3;
                return this.model.Article.findByPk(id);

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function detail(_x2) {
        return _detail.apply(this, arguments);
      }

      return detail;
    }()
    /**
     * TODO 插入文章
     *
     * @static
     * @param {*} data
     * @return {*}
     * @memberof Article
     */

  }, {
    key: "insert",
    value: function () {
      var _insert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", data);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function insert(_x3) {
        return _insert.apply(this, arguments);
      }

      return insert;
    }()
  }, {
    key: "archive",
    value: function () {
      var _archive = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.model.Article.findAll({
                  attributes: ['id', 'title', 'abstract'],
                  order: [['create_time', 'DESC'], ['id', 'DESC']]
                });

              case 2:
                result = _context4.sent;
                return _context4.abrupt("return", result);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function archive() {
        return _archive.apply(this, arguments);
      }

      return archive;
    }()
  }]);
  return Article;
}(_service["default"]);

exports["default"] = Article;