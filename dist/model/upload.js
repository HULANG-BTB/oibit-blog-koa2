"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize2 = _interopRequireDefault(require("sequelize"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Model = _sequelize2["default"].Model,
    Sequelize = _sequelize2["default"].Sequelize;

var Upload = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Upload, _Model);

  var _super = _createSuper(Upload);

  function Upload() {
    (0, _classCallCheck2["default"])(this, Upload);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Upload, null, [{
    key: "init",
    value: function init(sequelize, DataTypes) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Upload), "init", this).call(this, {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          comment: 'ID'
        },
        url: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '保存路径'
        },
        size: {
          type: DataTypes.INTEGER,
          allowNull: false,
          comment: '大小'
        },
        create_time: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          comment: '上传时间'
        },
        update_time: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          comment: '修改时间'
        }
      }, {
        sequelize: sequelize,
        tableName: 'upload',
        timestamps: false,
        indexes: [{
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{
            name: 'id'
          }]
        }]
      });
      return Upload;
    }
  }]);
  return Upload;
}(Model);

exports["default"] = Upload;