"use strict";
(() => {
var exports = {};
exports.id = 319;
exports.ids = [319];
exports.modules = {

/***/ 3165:
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


const axios = __webpack_require__(2167);






const BASE_URL = "http://localhost:4001/api";

const Register = () => {
  const {
    0: userid,
    1: setUserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: nickname,
    1: setNickname
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: userpw,
    1: setUserpw
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: confirmPassword,
    1: setConfirmPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: phonenumber,
    1: setPhonenumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: content,
    1: setContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: uploadedImg,
    1: setUploadedImg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    fileName: "",
    fillPath: ""
  });

  const onNameHandler = event => {
    setUserid(event.target.value);
  };

  const onNickname = event => {
    setNickname(event.target.value);
  };

  const onPasswordHandler = event => {
    setUserpw(event.target.value);
  };

  const onConfirmPasswordHandler = event => {
    setConfirmPassword(event.target.value);
  };

  const onPhoneHandler = event => {
    setPhonenumber(event.target.value);
  };

  const onChange = e => {
    setContent(e.target.files[0]);
  };

  const body = {
    userid,
    userpw,
    nickname,
    phonenumber
  };

  const onSubmit = async event => {
    event.preventDefault();

    try {
      if (userid == '' || nickname == '' || userpw == '' || confirmPassword == '' || phonenumber == '') {
        alert('빈칸은 있을 수 없다.');
      } else if (userpw !== confirmPassword) {
        alert('비밀번호 확인 부탁.');
      } else {
        const result = await axios.post('http://localhost:4001/api/user/register', body);

        if (content) {
          const formData = new FormData();
          formData.append("img", content);
          formData.append("token", nickname);
          axios.post("http://localhost:4001/api/upload/img", formData).then(res => {
            // console.log(fileName); 
            setUploadedImg({
              fileName,
              filePath: `${BASE_URL}/img/${fileName}`
            });
            alert("The file is successfully uploaded");
          }).catch(err => {
            console.error(err);
          });
        }

        if (result.data.errno === 0) {
          alert('계정이 생성되었다.');
          next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/user/login');
        }
      }
    } catch (error) {
      alert('응 아니되오');
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    class: "loginRegister",
    style: {
      border: '1px solid lightgray',
      width: '20%',
      margin: '0 auto',
      marginTop: '55px',
      background: '#ffffff'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Space, {
        direction: "vertical",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
          name: "userid",
          onChange: onNameHandler,
          placeholder: "input userid",
          style: {
            width: '143%'
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
          name: "nickname",
          onChange: onNickname,
          placeholder: "input nickname",
          style: {
            width: '143%'
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {
          name: "userpw",
          onChange: onPasswordHandler,
          onPhoneHandler: true,
          placeholder: "input password",
          style: {
            width: '143%'
          },
          iconRender: visible => visible ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.EyeTwoTone, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.EyeInvisibleOutlined, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {
          name: "userpw",
          onChange: onConfirmPasswordHandler,
          placeholder: "input password",
          style: {
            width: '143%'
          },
          iconRender: visible => visible ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.EyeTwoTone, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.EyeInvisibleOutlined, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
          name: "phonenumber",
          onChange: onPhoneHandler,
          placeholder: "input phone number",
          style: {
            width: '143%'
          }
        }), "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
          type: "file",
          onChange: onChange,
          style: {
            marginLeft: '40%'
          }
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          type: "submit",
          style: {
            background: '#FFFFFF',
            border: '1.5px solid lightgray',
            width: '100%',
            height: '80px',
            marginTop: '40px'
          },
          children: "\uACC4\uC815 \uC0DD\uC131"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

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
var __webpack_exports__ = (__webpack_exec__(3165));
module.exports = __webpack_exports__;

})();