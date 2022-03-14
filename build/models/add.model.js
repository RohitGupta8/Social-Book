"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = _interopRequireDefault(require("./user.model"));

var contactSchema = _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  contacts: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  }]
}, {
  timestamps: true
});

var Contact = _mongoose["default"].model('Contact', contactSchema);

var _default = Contact;
exports["default"] = _default;