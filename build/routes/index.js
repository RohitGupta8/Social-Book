"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.route"));

var _profile = _interopRequireDefault(require("./profile.route"));

var _search = _interopRequireDefault(require("./search.route"));

var router = _express["default"].Router();

// import contactRoute from './contact.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.get('/', function (req, res) {
    res.json('Welcome');
  });
  router.use('/users', _user["default"]);
  router.use('/profiles', _profile["default"]);
  router.use('/searches', _search["default"]); // router.use('/contacts',contactRoute);

  return router;
};

var _default = routes;
exports["default"] = _default;