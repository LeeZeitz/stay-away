"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatabaseInterface = function DatabaseInterface() {
  _classCallCheck(this, DatabaseInterface);

  this.db = new _awsSdk["default"]();
};

var _default = DatabaseInterface;
exports["default"] = _default;