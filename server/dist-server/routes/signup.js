"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET home page. */


router.post('/', function (req, res, next) {
  console.log(req.body);
  req.app.get('dbInterface').addUser(req.body.username, req.body.password);
  res.send('User Created');
});
router.options('/', function (req, res, next) {
  console.log('here');
  res.send('');
});
var _default = router;
exports["default"] = _default;