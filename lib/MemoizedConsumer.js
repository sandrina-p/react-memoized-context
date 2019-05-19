"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MemoContext = _interopRequireDefault(require("./MemoContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MemoizedConsumer(_ref) {
  var Context = _ref.context,
      memoKeys = _ref.memoKeys,
      children = _ref.children;
  return _react["default"].createElement(Context.Consumer, null, function (context) {
    return _react["default"].createElement(_MemoContext["default"], {
      memoKeys: memoKeys,
      context: context
    }, children);
  });
}

var _default = MemoizedConsumer;
exports["default"] = _default;