"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,656];
exports.modules = {

/***/ 2806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feed_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8523);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);




const axios = __webpack_require__(2167);






const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_4__.Card;

const Index = props => {
  const list = props.list;
  const {
    0: isCookie,
    1: setisCookie
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();

  const cookiecheck = () => {
    if (document.cookie) {
      const token = document.cookie;
      const [, payload] = token.split('.');
      const decodingPayload = Buffer.from(payload, 'base64').toString();
      const nickname = JSON.parse(decodingPayload).nickname;
      const matchnickname = list.map(v => v.nickname);

      for (let i = 0; i < matchnickname.length; i++) {
        // console.log(matchnickname[i])
        if (matchnickname[i] == nickname) {
          setisCookie(true);
        }
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    cookiecheck();
  }, [isCookie]);

  const deleteBtn = async i => {
    const body = {
      idx: i
    };
    const result = await axios.post('http://localhost:4001/api/feed/delete', body);
    console.log(result);
    alert('삭제되었습니다');
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
  };

  const updateBtn = i => {
    console.log(i);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      style: {
        background: '#FAFAFA'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: list === null || list === void 0 ? void 0 : list.map(info => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                style: {
                  width: '30%',
                  margin: '0 auto'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {
                  hoverable: true,
                  style: {
                    width: 600,
                    marginTop: 30,
                    border: '1px solid lightgray',
                    borderRadius: '10px 10px'
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    style: {
                      fontWeight: 'bold',
                      fontSize: '40px'
                    },
                    children: info.nickname
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    style: {
                      fontSize: '25px',
                      marginTop: '10px'
                    },
                    children: info.content
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    style: {
                      fontSize: '15px',
                      marginTop: '10px'
                    },
                    children: info.date
                  }), isCookie ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                    onClick: () => deleteBtn(info.idx),
                    style: {
                      width: '100px',
                      background: '#FFFFFF',
                      border: '1.5px solid lightgray',
                      marginRight: '10px',
                      marginTop: '20px',
                      color: 'red'
                    },
                    children: "\uC0AD\uC81C"
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {}), isCookie ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                    href: `/feed/update?${info.idx}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                      onClick: () => updateBtn(info.idx),
                      style: {
                        width: '100px',
                        background: '#FFFFFF',
                        border: '1.5px solid lightgray',
                        marginRight: '10px'
                      },
                      children: "\uC218\uC815"
                    })
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                    href: `/comment/${info.idx}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                      style: {
                        background: '#FFFFFF',
                        border: '1.5px solid lightgray',
                        marginRight: '10px',
                        width: '100px',
                        color: 'blue'
                      },
                      children: "\uB313\uAE00\uBCF4\uAE30"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {
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
    })
  });
};

async function getServerSideProps() {
  const response = await axios.get('http://localhost:4001/api/feed/list');
  const list = response.data.result;
  return {
    props: {
      list: list
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,523], () => (__webpack_exec__(2806)));
module.exports = __webpack_exports__;

})();