"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _reactImageCrop = _interopRequireDefault(require("react-image-crop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var init = _ref.init,
      name = _ref.name,
      onChange = _ref.onChange,
      crop = _ref.crop,
      cropName = _ref.cropName,
      accept = _ref.accept,
      helperText = _ref.helperText;

  var _React$useState = _react["default"].useState(init),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      src = _React$useState2[0],
      setSrc = _React$useState2[1];

  var ref = _react["default"].useRef();

  function handleOnChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        files = _e$target.files;
    var reader = new FileReader();

    reader.onload = function () {
      setSrc(reader.result);
      onChange({
        target: {
          name: name,
          value: files[0]
        }
      });
    };

    reader.readAsDataURL(files[0]);
  }

  ;

  var setCrop = function setCrop(newCrop) {
    var _ref$current = ref.current,
        clientWidth = _ref$current.clientWidth,
        clientHeight = _ref$current.clientHeight;
    onChange({
      target: {
        name: cropName,
        value: _objectSpread(_objectSpread(_objectSpread({}, crop), newCrop), {}, {
          clientWidth: clientWidth,
          clientHeight: clientHeight
        })
      }
    }); //cropName is used to Change crop props
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "__textAlign--center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref
  }, /*#__PURE__*/_react["default"].createElement(_reactImageCrop["default"], _extends({
    src: src,
    crop: crop
  }, {
    onChange: setCrop
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "root"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    className: "fill-root"
  }, {
    name: name,
    accept: accept
  }, {
    onChange: handleOnChange,
    type: "file"
  })), /*#__PURE__*/_react["default"].createElement("span", null, "Select image")), /*#__PURE__*/_react["default"].createElement("span", null, helperText));
}