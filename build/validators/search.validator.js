"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var searchValidator = function searchValidator(req, res, next) {
  var schema = _joi["default"].object({
    interests: _joi["default"].string().required()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error,
      value = _schema$validate.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.searchValidator = searchValidator;