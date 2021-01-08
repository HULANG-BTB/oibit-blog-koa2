"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.database = void 0;
var database = {
  host: 'localhost',
  port: '3306',
  username: 'user',
  password: 'password',
  database: '',
  dialect: 'mysql',
  timezone: '+08:00',
  pool: {
    max: 10
  }
};
exports.database = database;
var _default = database;
exports["default"] = _default;