'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.hostAllGET = function hostAllGET (req, res, next) {
  Default.hostAllGET(req.swagger.params, res, next);
};

module.exports.hostDELETE = function hostDELETE (req, res, next) {
  Default.hostDELETE(req.swagger.params, res, next);
};

module.exports.hostGET = function hostGET (req, res, next) {
  Default.hostGET(req.swagger.params, res, next);
};

module.exports.hostPOST = function hostPOST (req, res, next) {
  Default.hostPOST(req.swagger.params, res, next);
};

module.exports.hostPUT = function hostPUT (req, res, next) {
  Default.hostPUT(req.swagger.params, res, next);
};

module.exports.procAllGET = function procAllGET (req, res, next) {
  Default.procAllGET(req.swagger.params, res, next);
};

module.exports.procDELETE = function procDELETE (req, res, next) {
  Default.procDELETE(req.swagger.params, res, next);
};

module.exports.procGET = function procGET (req, res, next) {
  Default.procGET(req.swagger.params, res, next);
};

module.exports.procPOST = function procPOST (req, res, next) {
  Default.procPOST(req.swagger.params, res, next);
};

module.exports.procPUT = function procPUT (req, res, next) {
  Default.procPUT(req.swagger.params, res, next);
};

module.exports.procUpdatePrecentagePOST = function procUpdatePrecentagePOST (req, res, next) {
  Default.procUpdatePrecentagePOST(req.swagger.params, res, next);
};
