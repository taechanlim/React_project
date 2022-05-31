"use strict";
(() => {
var exports = {};
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 5128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const axios = __webpack_require__(2167);








const Write = () => {
  const {
    0: values,
    1: setValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    subject: '',
    content: ''
  });
  const {
    0: contents,
    1: setContents
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: uploadedImg,
    1: setUploadedImg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    fileName: "",
    fillPath: ""
  });

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: value
    }));
  };

  const onChange = e => {
    setContents(e.target.files[0]);
  };

  const token = document.cookie;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (values.subject == '' || values.content == '' || !contents) {
        alert('작성을 완료해주세요! (글 혹은 사진이 비어있으면 안됨)');
        return;
      } else {
        if (contents) {
          const formData = new FormData();
          formData.append("img", contents);
          formData.append("subject", values.subject);
          formData.append("content", values.content);
          formData.append("token", token);
          const result = await axios.post("http://localhost:4001/api/feed/write", formData);

          if (result.data.errno === 0) {
            alert('작성 완료');
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
          } else {
            alert('작성 실패');
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        width: '27%',
        height: '50%',
        margin: '0 auto',
        border: '1px solid lightgray',
        marginTop: '55px',
        borderRadius: '10px 10px 10px 10px',
        backgroundColor: '#ffffff'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
        style: {
          fontWeight: 'bold',
          marginLeft: '41%',
          fontSize: '30px'
        },
        children: "\uD53C\uB4DC \uC4F0\uAE30"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Space, {
          direction: "vertical",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
            name: "subject",
            onChange: handleChange,
            placeholder: "input subject",
            style: {
              width: '200%',
              marginLeft: '50%',
              backgroundColor: '#fafafa'
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
            name: "content",
            onChange: handleChange,
            placeholder: "input content",
            style: {
              width: '200%',
              height: '200px',
              marginLeft: '50%',
              backgroundColor: '#fafafa'
            }
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
          type: "file",
          onChange: onChange,
          style: {
            marginLeft: '30%',
            display: 'block',
            marginTop: '20px',
            marginBottom: '50px'
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
          type: "submit",
          value: "\uC791\uC131",
          style: {
            background: '#FFFFFF',
            border: '1.5px solid lightgray',
            width: '200px',
            height: '32px',
            marginLeft: '30%',
            marginBottom: '20px'
          }
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Write);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5128));
module.exports = __webpack_exports__;

})();