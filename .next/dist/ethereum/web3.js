"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provider = exports.web3 = undefined;

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
var provider = void 0;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  exports.web3 = web3 = new _web2.default(window.web3.currentProvider);
  exports.provider = provider = window.web3.currentProvider;
} else {
  exports.provider = provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/EmfxnxUmTTkeiYUeq4x4");
  exports.web3 = web3 = new _web2.default(provider);
}

exports.web3 = web3;
exports.provider = provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwicHJvdmlkZXIiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUNBLElBQUksWUFBSjtBQUNBLElBQUksZ0JBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDdkU7d0JBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtnQ0FBVyxPQUFPLEFBQVAsS0FBWSxBQUF2QixBQUNEO0FBSEQsT0FHTyxBQUNMO2dDQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDVCxBQURTLEFBQVgsQUFHQTt3QkFBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFFRDs7UUFBUyxBQUFUO1FBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3RiaGF0dGFjaGFyeWEvRGVza3RvcC9Tb2Z0d2FyZXMvUGVyZkluZnJhL0tpY2tzdGFydCJ9