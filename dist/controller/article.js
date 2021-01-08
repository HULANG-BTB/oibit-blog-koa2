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

var _controller = _interopRequireDefault(require("../class/controller"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var name = 'Article';
exports.name = name;

var Article = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(Article, _Controller);

  var _super = _createSuper(Article);

  function Article() {
    (0, _classCallCheck2["default"])(this, Article);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Article, null, [{
    key: "init",
    value: function init(ctx) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Article), "init", this).call(this, ctx);
      return Article;
    }
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = this.ctx.request;
                _context.next = 3;
                return this.service.User.query(data);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function query() {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this$ctx$query, page, size, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$ctx$query = this.ctx.query, page = _this$ctx$query.page, size = _this$ctx$query.size;
                data = {
                  page: parseInt(page) || 1,
                  size: parseInt(size) || 10
                };
                _context2.next = 4;
                return this.service.Article.list(data);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function list() {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "detail",
    value: function () {
      var _detail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var id, data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = this.ctx.query.id;
                data = {
                  id: id
                };
                _context3.next = 4;
                return this.service.Article.detail(data);

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function detail() {
        return _detail.apply(this, arguments);
      }

      return detail;
    }()
  }, {
    key: "insert",
    value: function () {
      var _insert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _this$ctx$body, title, _abstract, category, tags, thumbnail, data;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this$ctx$body = this.ctx.body, title = _this$ctx$body.title, _abstract = _this$ctx$body["abstract"], category = _this$ctx$body.category, tags = _this$ctx$body.tags, thumbnail = _this$ctx$body.thumbnail;
                data = {
                  title: title,
                  "abstract": _abstract,
                  category: category,
                  tags: tags,
                  thumbnail: thumbnail
                };
                _context4.next = 4;
                return this.service.Article.insert(data);

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function insert() {
        return _insert.apply(this, arguments);
      }

      return insert;
    }()
  }, {
    key: "archive",
    value: function () {
      var _archive = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.service.Article.archive();

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function archive() {
        return _archive.apply(this, arguments);
      }

      return archive;
    }()
  }]);
  return Article;
}(_controller["default"]);

exports["default"] = Article;