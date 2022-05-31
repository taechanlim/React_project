"use strict";
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 3389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3869);
/* harmony import */ var _AnimalCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9791);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Main = ({
  account
}) => {
  const {
    0: newAnimalType,
    1: setNewAnimalType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const onClickMint = async () => {
    try {
      if (!account) return;
      const response = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.mintAnimalTokenContract.methods.mintAnimalToken().send({
        from: account
      });
      console.log(response);

      if (response.status) {
        const balanceLength = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.mintAnimalTokenContract.methods.balanceOf(account).call();
        const animalTokenId = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.mintAnimalTokenContract.methods.tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1).call();
        const animalType = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.mintAnimalTokenContract.methods.animalTypes(animalTokenId).call();
        setNewAnimalType(animalType);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: newAnimalType ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          position: 'relative'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          src: "../../static/market.jpg",
          style: {
            position: 'absolute',
            width: '100%',
            height: '700px',
            zIndex: "0"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          style: {
            position: 'absolute',
            zIndex: '10',
            fontWeight: 'bold',
            fontSize: '50px',
            color: 'black',
            marginTop: '10%',
            marginLeft: '20%'
          },
          children: "\uCE74\uB4DC\uB97C \uB9CC\uB4E4\uC790!"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
          onClick: onClickMint,
          style: {
            width: '260px',
            height: '100px',
            position: 'absolute',
            zIndex: '10',
            marginTop: '15%',
            marginLeft: '20%',
            border: '3px solid orange',
            borderRadius: '10px 10px',
            fontSize: '60px',
            fontWeight: 'bold',
            boxShadow: '0px 0px 20px 10px orange'
          },
          children: "\uB2E4\uC2DC\uB9CC\uB4E4\uAE30"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          style: {
            position: 'absolute',
            zIndex: '10',
            fontWeight: 'bold',
            fontSize: '50px',
            color: 'black',
            marginTop: '0.5%',
            marginLeft: '50%'
          },
          children: "\uC0AC\uC9C4\uC774 \uCD94\uAC00\uB418\uC5C8\uC5B4 \u2193"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          style: {
            position: 'absolute',
            zIndex: "10",
            float: 'left',
            width: '26.3%',
            height: '505px',
            border: '3px solid orange',
            borderRadius: '10px 10px',
            backgroundColor: '#fafafa',
            marginLeft: '50%',
            marginBottom: '5%',
            marginTop: '5%',
            boxShadow: '0px 0px 30px 3px orange'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_AnimalCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
            animalType: newAnimalType
          })
        })]
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          position: 'relative'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          src: "../../static/market.jpg",
          style: {
            position: 'absolute',
            width: '100%',
            height: '700px',
            zIndex: "0"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          style: {
            position: 'absolute',
            zIndex: '10',
            fontWeight: 'bold',
            fontSize: '50px',
            color: 'black',
            marginTop: '10%',
            marginLeft: '20%'
          },
          children: "\uCE74\uB4DC\uB97C \uB9CC\uB4E4\uC790!"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
          onClick: onClickMint,
          style: {
            width: '260px',
            height: '100px',
            position: 'absolute',
            zIndex: '10',
            marginTop: '15%',
            marginLeft: '20%',
            border: '3px solid orange',
            borderRadius: '10px 10px',
            fontSize: '60px',
            fontWeight: 'bold',
            boxShadow: '0px 0px 20px 10px orange'
          },
          children: "MINT"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          style: {
            position: 'absolute',
            zIndex: "10",
            float: 'left',
            width: '26.3%',
            height: '505px',
            border: '3px solid orange',
            borderRadius: '10px 10px',
            backgroundColor: '#fafafa',
            marginLeft: '50%',
            marginBottom: '5%',
            marginTop: '5%',
            boxShadow: '0px 0px 30px 3px orange'
          }
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ })

};
;