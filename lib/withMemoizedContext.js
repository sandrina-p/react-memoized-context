"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils");

var _MemoContext = _interopRequireDefault(require("./MemoContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Context HoC
// Connect a given Context Consumer to MemoizedContext,
// responsible to make a "wall" between the full context and keys to memo.
function withContext(Context) {
  var MemoizedContext = function MemoizedContext(props) {
    return _react["default"].createElement(Context.Consumer, null, function (context) {
      return _react["default"].createElement(_MemoContext["default"], _extends({}, props, {
        context: context
      }));
    });
  };

  return MemoizedContext;
} // Connect MemoizedContext to a Component


function withMemoized(MemoizedContext) {
  var Component = function Component(_Component, memoKeys) {
    if (!memoKeys && process.env.NODE_ENV === 'development') {
      console.warning(
      /* eslint-disable-line */
      "creact-memoized-context - withMemoizedContext - missing context memoKeys. You might have forgotten to pass them down at ".concat((0, _utils.getDisplayName)('', _Component)));
    }

    var connect = function connect(props) {
      return _react["default"].createElement(MemoizedContext, {
        memoKeys: memoKeys
      }, function (memoContext) {
        return _react["default"].createElement(_Component, _extends({}, props, {
          context: memoContext
        }));
      });
    };

    connect.displayName = (0, _utils.getDisplayName)('MemoizedContext', _Component);
    return connect;
  };

  return Component;
}

var withMemoizedContext = function withMemoizedContext(Context) {
  return withMemoized(withContext(Context));
};

var _default = withMemoizedContext;
exports["default"] = _default;