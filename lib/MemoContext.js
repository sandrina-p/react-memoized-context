"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MemoContext(_ref) {
  var children = _ref.children,
      memoKeys = _ref.memoKeys,
      context = _ref.context;
  var contextToSpread = (0, _utils.filterObject)(context, memoKeys);
  return children(contextToSpread);
}

function isContextTheSame(props, nextProps) {
  var children = props.children,
      memoKeys = props.memoKeys,
      context = props.context;
  var diffChildren = children !== nextProps.children; // If children changed, no need to filter memoKeys

  if (diffChildren || !memoKeys) {
    return false;
  } // Check if any context key from memoKeys changed...


  var keysHadChange = memoKeys.find(function (key) {
    return context[key] !== nextProps.context[key];
  }); // ..if yes, avoid a re-render.

  return !keysHadChange;
}

var _default = _react["default"].memo(MemoContext, isContextTheSame);

exports["default"] = _default;