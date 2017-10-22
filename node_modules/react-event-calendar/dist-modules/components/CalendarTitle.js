"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarTitle = function CalendarTitle(_ref) {
    var title = _ref.title;

    return _react2.default.createElement(
        "div",
        { className: "flexColumn" },
        title
    );
};

CalendarTitle.propTypes = {
    title: _react2.default.PropTypes.string.isRequired
};

exports.default = CalendarTitle;