"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _awsSdk = _interopRequireWildcard(require("aws-sdk"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _users = require("./database/schemas/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var allParams = {
  usersTableCreate: _users.usersTableCreate,
  usersAdd: _users.usersAdd
};
var saltRounds = 10;

var DatabaseInterface = function DatabaseInterface() {
  var _this = this;

  _classCallCheck(this, DatabaseInterface);

  _defineProperty(this, "createTable", function () {
    _this.db.createTable(allParams.usersTableCreate, function (err, data) {
      if (err) {
        if (err.name === 'ResourceInUseException') {
          console.log('Table already exists.');
        } else {
          console.log("Error creating table: ", err);
        }
      } else {
        console.log('Table Created', data);
      }
    });
  });

  _defineProperty(this, "addUser", function (username, password) {
    var hash = _bcrypt["default"].hashSync(password, saltRounds);

    var params = _objectSpread({}, allParams.usersAdd);

    var userId = Math.random().toString(36).substr(2, 9);
    params.Item.USER_ID.S = userId;
    params.Item.USER_NAME.S = username;
    params.Item.HASH.S = hash;
    console.log(params);

    _this.db.putItem(params, function (err, data) {
      if (err) {
        console.log('Error inserting user: ', err);
      } else {
        console.log('Successfully added `' + username + '` to database with user_id `' + userId + '`', data);
      }
    });
  });

  _awsSdk["default"].config.update({
    region: 'us-west-2'
  });

  this.db = new _awsSdk.DynamoDB();
};

var _default = DatabaseInterface;
exports["default"] = _default;