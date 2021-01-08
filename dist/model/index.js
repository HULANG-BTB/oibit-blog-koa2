"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _database = _interopRequireDefault(require("../config/database"));

var _sequelize = require("sequelize");

var _initModels = _interopRequireDefault(require("./init-models"));

// import context from '../utils/context'
// const exclude = ['index.js', 'init-models.js']
// const initModels = () => {
//   const sequelize = new Sequelize(database)
//   const modules = {}
//   const files = context(__dirname, false, /\.js$/)
//   files
//     .keys()
//     .filter(key => exclude.indexOf(key) === -1)
//     .forEach(key => {
//       const ctx = files.context(key)
//       modules[ctx.name] = ctx.default.init(sequelize, DataTypes)
//     })
//   return modules
// }
function _default() {
  var sequelize = new _sequelize.Sequelize(_database["default"]);
  return (0, _initModels["default"])(sequelize);
}