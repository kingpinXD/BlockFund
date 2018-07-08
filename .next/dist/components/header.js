"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\tbhattacharya\\Desktop\\Softwares\\PerfInfra\\Kickstart\\components\\header.js";


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: "" }, _this.handleItemClick = function (e, _ref2) {
      var name = _ref2.name;
      return _this.setState({ activeItem: name });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;

      return _react2.default.createElement(_semanticUiReact.Menu, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: "BlockFund",
        active: activeItem === "BlockFund",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: "Campaigns",
        active: activeItem === "Campaigns",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: "Add",
        active: activeItem === "Add",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "add circle", __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJJY29uIiwiTGluayIsIkhlYWRlciIsInN0YXRlIiwiYWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozs0TUFDSixBLFFBQVEsRUFBRSxZLEFBQUYsQUFBYyxZQUV0QixBLGtCQUFrQixVQUFBLEFBQUMsVUFBRDtVQUFBLEFBQU0sYUFBTixBQUFNO2FBQVcsTUFBQSxBQUFLLFNBQVMsRUFBRSxZQUFqQyxBQUFpQixBQUFjLEFBQWM7QTs7Ozs7NkJBQ3REO1VBQUEsQUFDQyxhQUFlLEtBRGhCLEFBQ3FCLE1BRHJCLEFBQ0MsQUFFUjs7NkJBQ0UsQUFBQyx1Q0FBSyxVQUFOO29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHNCQUFELEFBQU07Y0FBTixBQUNPLEFBQ0w7Z0JBQVEsZUFGVixBQUV5QixBQUN2QjtpQkFBUyxLQUhYLEFBR2dCOztvQkFIaEI7c0JBRkosQUFDRSxBQUNFLEFBT0Y7QUFQRTtBQUNFLDJCQU1ILGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7dUNBQ0UsQUFBQyxzQkFBRCxBQUFNO2NBQU4sQUFDTyxBQUNMO2dCQUFRLGVBRlYsQUFFeUIsQUFDdkI7aUJBQVMsS0FIWCxBQUdnQjs7b0JBSGhCO3NCQUZKLEFBQ0UsQUFDRSxBQU1GO0FBTkU7QUFDRSwyQkFLSixBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNO2NBQU4sQUFDTyxBQUNMO2dCQUFRLGVBRlYsQUFFeUIsQUFDdkI7aUJBQVMsS0FIWCxBQUdnQjs7b0JBSGhCO3NCQUFBLEFBS0U7QUFMRjtBQUNFLHlCQUlBLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQXhCVixBQUNFLEFBU0UsQUFRRSxBQUNFLEFBS0UsQUFNWDtBQU5XOzs7Ozs7QUEvQk8sQSxBQXdDckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3RiaGF0dGFjaGFyeWEvRGVza3RvcC9Tb2Z0d2FyZXMvUGVyZkluZnJhL0tpY2tzdGFydCJ9