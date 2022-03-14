"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchInterest = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _profile = _interopRequireDefault(require("../models/profile.model"));

//search interests
var searchInterest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(interest) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _profile["default"].find({
              $or: [{
                interests: {
                  $regex: interest.toString(),
                  $options: 'i'
                }
              }]
            });

          case 2:
            data = _context.sent;

            if (data.length) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", 'Interests not found');

          case 7:
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function searchInterest(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.searchInterest = searchInterest;