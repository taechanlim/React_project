"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 7954:
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






const SaleAnimalCard = ({
  animalType,
  animalPrice,
  animalTokenId,
  account,
  getOnSaleAnimalTokens
}) => {
  const {
    0: isBuyable,
    1: setIsBuyable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const getAnimalTokenOnwer = async () => {
    try {
      const response = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.mintAnimalTokenContract.methods.ownerOf(animalTokenId).call();
      setIsBuyable(response.toLocaleLowerCase() === account.toLocaleLowerCase());
    } catch (error) {
      console.error(error);
    }
  };

  const onClickBuy = async () => {
    try {
      if (!account) return;
      const response = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.saleAnimalTokenContract.methods.purchaseAnimalToken(animalTokenId).send({
        from: account,
        value: animalPrice
      });

      if (response.status) {
        getOnSaleAnimalTokens();
      }
    } catch (error) {
      console.error(error);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getAnimalTokenOnwer();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    style: {
      float: 'left',
      width: '26.6%',
      height: '600px',
      border: '3px solid orange',
      borderRadius: '10px 10px',
      backgroundColor: '#fafafa',
      marginLeft: '15.5%',
      marginBottom: '5%'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_AnimalCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      animalType: animalType
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      style: {
        textAlign: 'center',
        marginLeft: '-7.5%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
        style: {
          listStyle: 'none'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            style: {
              fontWeight: 'bold',
              fontSize: '30px'
            },
            children: [_web3Config__WEBPACK_IMPORTED_MODULE_1__.web3.utils.fromWei(animalPrice), " ETH"]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
            disabled: isBuyable,
            onClick: onClickBuy,
            style: {
              fontWeight: 'bold',
              fontSize: '20px',
              height: '40px',
              width: '400px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '10px 10px'
            },
            children: "\uAD6C\uB9E4\uD558\uAE30!"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaleAnimalCard);

/***/ })

};
;