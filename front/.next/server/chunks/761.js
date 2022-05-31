"use strict";
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 6761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5515);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


const axios = __webpack_require__(2167);









const Update = () => {
  const {
    0: userpw,
    1: setUserpw
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

  const onPasswordHandler = event => {
    setUserpw(event.target.value);
  };

  const onPhoneHandler = event => {
    setPhonenumber(event.target.value);
  };

  const onChange = e => {
    setContent(e.target.files[0]);
  };

  const token = document.cookie;
  const body = {
    userpw,
    phonenumber,
    token
  };

  const onSubmit = async event => {
    event.preventDefault();

    if (userpw == '' || phonenumber == '' || !content) {
      alert('빈칸은 있을 수 없다.');
    } else {
      const result = await axios.post('http://localhost:4001/api/user/update', body);

      if (content) {
        const formData = new FormData();
        formData.append("img", content);
        formData.append("token", token);
        axios.post("http://localhost:4001/api/upload/userimgupdate", formData).then(res => {
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

      console.log(result.data.errno);

      if (result.data.errno === 0) {
        alert('계정의 수정이 완료');
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');
      }
    }
  };

  const COOKIE_KEY = document.cookie;
  const [,, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)([COOKIE_KEY]);

  const logout = async () => {
    removeCookie(COOKIE_KEY, {
      path: '/'
    });
    next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');
  };

  const onDelete = async event => {
    event.preventDefault();
    const result = await axios.post('http://localhost:4001/api/user/delete', body);

    if (result.data.errno === 0) {
      alert('계정의 탈퇴가 완료');
      logout();
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      class: "loginUpdate",
      style: {
        borderRadius: '10px 10px 10px 10px',
        width: '15%',
        height: '50%',
        border: '1px solid lightgray',
        marginLeft: '38%',
        marginTop: '55px',
        background: '#ffffff'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
          direction: "vertical",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {
            name: "userpw",
            onChange: onPasswordHandler,
            placeholder: "input password",
            iconRender: visible => visible ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EyeTwoTone, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EyeInvisibleOutlined, {}),
            style: {
              width: '106.5%',
              height: '50%',
              marginTop: '10px'
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
            name: "phonenumber",
            onChange: onPhoneHandler,
            placeholder: "input phonenumber",
            style: {
              width: '106.5%',
              height: '35px',
              marginTop: '10px',
              marginBottom: '10px'
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
            style: {
              color: 'pink'
            },
            children: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
            type: "file",
            onChange: onChange,
            style: {
              marginLeft: '30%'
            }
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
            type: "submit",
            style: {
              background: '#FFFFFF',
              border: '1.5px solid lightgray',
              width: '285px',
              height: '80px',
              marginTop: '30px',
              color: 'blue'
            },
            children: "\uACC4\uC815 \uC5C5\uB370\uC774\uD2B8"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("form", {
        onSubmit: onDelete,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
            type: "submit",
            style: {
              background: '#FFFFFF',
              border: '1.5px solid lightgray',
              width: '285px',
              height: '80px',
              marginTop: '30px',
              color: 'red'
            },
            children: "\uACC4\uC815 \uD0C8\uD1F4"
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Update);

/***/ })

};
;