"use strict";
exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 9791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const AnimalCard = ({
  animalType
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
    src: `../static/marketImg/${animalType}.png`,
    width: "500",
    height: "500",
    alt: "AnimalCard",
    style: {
      borderRadius: '5px 5px'
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimalCard);

/***/ }),

/***/ 878:
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







const MyAnimalCard = ({
  animalTokenId,
  animalType,
  animalPrice,
  saleStatus,
  account
}) => {
  const {
    0: sellPrice,
    1: setSellPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: myAnimalPrice,
    1: setMyAnimalPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(animalPrice);

  const onChangeSellPrice = e => {
    setSellPrice(e.target.value);
  };

  const onClickSell = async () => {
    try {
      if (!account || !saleStatus) return; // console.log("account : ", account);
      // console.log("saleStatus : ", saleStatus);
      // console.log("animalTokenId : ", animalTokenId);
      // console.log("sellPrice : ", sellPrice);
      // const a = web3.utils.toWei(sellPrice, "ether");
      // console.log("wei : ", a);

      const response = await _web3Config__WEBPACK_IMPORTED_MODULE_1__.saleAnimalTokenContract.methods.setForSaleAnimalToken(animalTokenId, _web3Config__WEBPACK_IMPORTED_MODULE_1__.web3.utils.toWei(sellPrice, "ether")).send({
        from: account
      });

      if (response.status) {
        setMyAnimalPrice(_web3Config__WEBPACK_IMPORTED_MODULE_1__.web3.utils.toWei(sellPrice, "ether"));
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
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
          position: 'relative',
          textAlign: 'center'
        },
        children: myAnimalPrice === "0" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            style: {
              position: 'absolute'
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
              type: "number",
              value: sellPrice,
              onChange: onChangeSellPrice,
              style: {
                border: '3px solid black',
                borderRadius: '10px 10px',
                fontSize: '20px',
                height: '40px',
                width: '400px',
                fontWeight: 'bold',
                marginTop: '5px',
                marginBottom: '5px'
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              onClick: onClickSell,
              style: {
                fontWeight: 'bold',
                fontSize: '20px',
                height: '40px',
                width: '400px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '10px 10px'
              },
              children: "\uD314\uB2E4!"
            })]
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            fontWeight: 'bold',
            fontSize: '30px'
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            children: "\uD310\uB9E4 \uB4F1\uB85D\uB41C \uC0C1\uD488!"
          }), _web3Config__WEBPACK_IMPORTED_MODULE_1__.web3.utils.fromWei(myAnimalPrice), " ETH"]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAnimalCard);

/***/ })

};
;