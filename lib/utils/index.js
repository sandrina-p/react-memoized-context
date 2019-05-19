"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayName = getDisplayName;
exports.filterObject = filterObject;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getDisplayName(prefix, Component) {
  var name = Component.displayName || Component.name || 'Component';
  return "".concat(prefix, "(").concat(name, ")");
}

function filterObject(object, filter) {
  if (!object || !filter) {
    return {};
  }

  return filter.reduce(function (result, key) {
    return _objectSpread({}, result, _defineProperty({}, key, object[key]));
  }, {});
}