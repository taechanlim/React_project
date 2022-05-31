"use strict";
(() => {
var exports = {};
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 6303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const axios = __webpack_require__(2167); //   padding: 0;
//   text-align: center;
//   font-weight: bold;
//   font-size: 20px;
//   -webkit-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
//   -moz-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
//   box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
//   background: #F0F3F4


function Main(props) {
  const userdata = props.list[0];
  const userimg = props.list2.result[0];
  console.log(userimg);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "header",
      style: {
        padding: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        boxShadow: '2px 1px 5px 0px rgba(0,0,0,0.26)',
        backgroundColor: '#F0F3F4'
      },
      children: ["Welcome To ", userdata.nickname, "'S MiniHomepage"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "content",
      style: {
        float: 'left',
        display: 'inline-block',
        width: '20%',
        height: '700px',
        padding: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '15px',
        boxShadow: '2px 1px 5px 5px rgba(0,0,0,0.26)',
        backgroundColor: '#F0F3F4',
        borderRadius: '0px 10px 10px 0px',
        marginTop: '10px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        style: {
          fontSize: '30px'
        },
        children: ["\uB2C9\uB124\uC784: ", userdata.nickname]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        style: {
          fontSize: '30px'
        },
        children: ["\uC804\uD654\uBC88\uD638: ", userdata.phonenumber]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        style: {
          fontSize: '30px'
        },
        children: "\uC9C0\uAC11\uC8FC\uC18C:"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        style: {
          fontSize: '14px'
        },
        children: userdata.wallet
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        children: userimg ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          src: `../static/savedImg/${userimg.filename}`,
          style: {
            marginTop: '110px',
            width: '300px',
            height: '250px',
            borderRadius: '50%'
          }
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          style: {
            marginTop: '150px',
            width: '300px',
            height: '250px',
            border: '1px solid lightgray',
            borderRadius: '50%'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            style: {
              marginTop: '40%'
            },
            children: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "content2",
      style: {
        float: 'right',
        marginRight: '10px',
        display: 'inline-block',
        width: '78%',
        height: '700px',
        padding: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '15px',
        boxShadow: '2px 1px 5px 5px rgba(0,0,0,0.26)',
        backgroundColor: '#F0F3F4',
        borderRadius: '10px 10px 10px 10px',
        marginTop: '10px'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        style: {
          position: 'absolute',
          zIndex: '1'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          src: "/static/miniroom.png",
          style: {
            float: 'left',
            width: '1300px',
            marginLeft: '6%',
            borderRadius: '20px 20px',
            border: '3px solid lightgray'
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        style: {
          transform: 'rotate(-25deg)',
          borderRadius: '50%',
          position: 'absolute',
          zIndex: '5',
          width: '18%',
          height: '37%',
          border: '1px solid gray',
          marginLeft: '10%',
          marginTop: '2%'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          src: "/static/\uB530\uBD09\uB3C4\uCE58.png",
          style: {
            transform: 'rotate(-25deg)',
            borderRadius: '50%',
            zIndex: '5',
            width: '100%',
            height: '100%'
          }
        })
      })]
    })]
  });
}

async function getServerSideProps(context) {
  const nickname = context.query;
  const body = {
    nickname
  };
  const response = await axios.post('http://localhost:4001/api/user/info', body);
  const response2 = await axios.post('http://localhost:4001/api/upload/userimg', body);
  const list = response.data.result;
  const list2 = response2.data.result;
  console.log('여긴 리스트2', list2);
  return {
    props: {
      list: list,
      list2: list2
    }
  };
} // const StyledHeader = styled.header`
// `
// const StyledContent = styled.content`
//   width:20%;
//   height: 100vh;
//   padding: 10px;
//   overflow: initial;
//   /* border:1px solid black; */
//   border-radius:0px 10px 10px 0px;
//   margin-top:10px;
//   box-shadow: 2px 1px 5px 5px rgba(0,0,0,0.26);
// `
// const StyledContent2 = styled.content2`
//   width:60%;
//   height: 100vh;
//   padding: 10px;
//   overflow: initial;
//   /* border:1px solid black; */
//   border-radius:0px 10px 10px 0px;
//   margin-top:10px;
//   box-shadow: 2px 1px 5px 5px rgba(0,0,0,0.26);
// `

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6303));
module.exports = __webpack_exports__;

})();