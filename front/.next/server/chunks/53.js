"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 1053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3869);
/* harmony import */ var _SaleAnimalCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7954);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const SaleAnimal = ({
  account
}) => {
  const {
    0: saleAnimalCardArray,
    1: setSaleAnimalCardArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const getOnSaleAnimalTokens = async () => {
    try {
      const onSaleAnimalTokenArrayLength = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.saleAnimalTokenContract.methods.getOnSaleAnimalTokenArrayLength().call();
      const tempOnSaleArray = [];

      for (let i = 0; i < parseInt(onSaleAnimalTokenArrayLength, 10); i++) {
        const animalTokenId = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.saleAnimalTokenContract.methods.onSaleAnimalTokenArray(i).call();
        const animalType = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.mintAnimalTokenContract.methods.animalTypes(animalTokenId).call();
        const animalPrice = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.saleAnimalTokenContract.methods.animalTokenPrices(animalTokenId).call();
        tempOnSaleArray.push({
          animalTokenId,
          animalType,
          animalPrice
        });
      }

      setSaleAnimalCardArray(tempOnSaleArray);
    } catch (error) {
      console.error(error);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getOnSaleAnimalTokens();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        position: 'absolute'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        style: {
          fontWeight: 'bold',
          fontSize: '25px',
          border: '3px solid purple',
          borderRadius: '2px 2px',
          textAlign: 'center'
        },
        children: "\uC5EC\uAE34 \uAC70\uB798\uC18C\uC57C!"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        src: "../../static/market.jpg",
        style: {
          position: 'relative',
          width: '100%',
          height: '3000px',
          zIndex: "0"
        }
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      style: {
        zIndex: '3',
        position: 'relative',
        paddingTop: '60px'
      },
      children: saleAnimalCardArray && saleAnimalCardArray.map((v, i) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SaleAnimalCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          animalType: v.animalType,
          animalPrice: v.animalPrice,
          animalTokenId: v.animalTokenId,
          account: account,
          getOnSaleAnimalTokens: getOnSaleAnimalTokens
        }, i);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaleAnimal);

/***/ })

};
;