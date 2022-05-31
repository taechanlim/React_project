"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459,656];
exports.modules = {

/***/ 7232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const axios = __webpack_require__(2167);






const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_3__.Card;





const commentList = props => {
  const {
    0: values,
    1: setValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    comment: ''
  });
  const list = props.list;
  const list2 = props.list2;
  const {
    idx
  } = props.idx;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); //idx값 따오기

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: value
    }));
  };

  const token = document.cookie;
  const body = {
    values,
    token,
    router
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (list.content == '') {
        alert('빈칸은 있을 수 없다.');
        return;
      }

      const result = await axios.post('http://localhost:4001/api/comment/write', body);
      console.log(result);

      if (result.data.errno === 0) {
        alert('작성 완료');
        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/comment/${idx}`);
      } else {
        alert('작성 실패');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateBtn = i => {
    console.log(i);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        style: {
          background: '#FAFAFA'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            children: list2 === null || list2 === void 0 ? void 0 : list2.map(info => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  style: {
                    width: '30%',
                    margin: '0 auto'
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
                    hoverable: true,
                    style: {
                      width: 600,
                      marginTop: 30,
                      border: '1px solid lightgray',
                      borderRadius: '10px 10px',
                      marginBottom: 50
                    },
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      style: {
                        fontWeight: 'bold',
                        fontSize: '30px'
                      },
                      children: info.nickname
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      style: {
                        fontSize: '18px',
                        marginTop: '10px'
                      },
                      children: info.content
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
                      hoverable: true,
                      style: {
                        width: 550,
                        marginTop: 50,
                        height: 550,
                        minWidth: 550,
                        minHeight: 550,
                        maxWidth: 550,
                        maxHeight: 550
                      },
                      cover: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                        src: `/static/feedImg/${info.filename}`,
                        style: {
                          width: '550px',
                          height: '550px'
                        }
                      })
                    })]
                  })
                }, info.idx)
              });
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          backgroundColor: '#ffffff',
          width: '30%',
          margin: '0 auto',
          height: '50%',
          border: '1px solid lightgray',
          borderRadius: '10px 10px 10px 10px'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
          children: "\uB313\uAE00 \uC4F0\uAE30"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
            direction: "vertical",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
              name: "comment",
              onChange: handleChange,
              placeholder: "input comment",
              style: {
                width: '150%'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
            type: "submit",
            value: "\uC791\uC131",
            style: {
              background: '#FFFFFF',
              border: '1.5px solid lightgray',
              width: '200px',
              height: '32px',
              marginLeft: '50px'
            }
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        children: list === null || list === void 0 ? void 0 : list.map(info => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              backgroundColor: '#ffffff',
              width: '30%',
              margin: '0 auto',
              height: '50%',
              border: '1px solid lightgray',
              marginTop: '20px',
              borderRadius: '10px 10px 10px 10px'
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              style: {
                fontSize: '35px',
                fontWeight: 'bold'
              },
              children: info.nickname
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              style: {
                fontSize: '25px'
              },
              children: info.comment
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              style: {
                fontSize: '15px'
              },
              children: info.date
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
              onClick: () => deleteBtn(info.comment_idx),
              style: {
                background: '#FFFFFF',
                border: '1.5px solid lightgray',
                marginRight: '10px',
                marginTop: '20px',
                width: '100px',
                color: 'red'
              },
              children: "\uC0AD\uC81C"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: `/comment/commentUpdate?feed=${info.idx}=comment=${info.comment_idx}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                onClick: () => updateBtn(info.comment_idx),
                style: {
                  background: '#FFFFFF',
                  border: '1.5px solid lightgray',
                  marginRight: '10px',
                  marginTop: '20px',
                  width: '100px'
                },
                children: "\uC218\uC815"
              })
            })]
          }, info.comment_idx);
        })
      })
    })]
  });
};

async function getServerSideProps(context) {
  const idx = context.query;
  const body = idx;
  const response = await axios.post('http://localhost:4001/api/comment/list', body);
  const response2 = await axios.post('http://localhost:4001/api/feed/list2', body);
  const list = response.data.result;
  const list2 = response2.data.result;
  return {
    props: {
      list: list,
      list2: list2,
      idx: idx
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentList);

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

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [922,664], () => (__webpack_exec__(7232)));
module.exports = __webpack_exports__;

})();