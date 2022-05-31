"use strict";
exports.id = 93;
exports.ids = [93];
exports.modules = {

/***/ 4093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyAnimalCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(878);
/* harmony import */ var _web3Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3869);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const MyAnimal = ({
  account
}) => {
  const {
    0: animalCardArray,
    1: setAnimalCardArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: saleStatus,
    1: setSaleStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const getAnimalTokens = async () => {
    try {
      const balanceLength = await _web3Config__WEBPACK_IMPORTED_MODULE_2__.mintAnimalTokenContract.methods.balanceOf(account).call();
      if (balanceLength === "0") return;
      const tempAnimalCardArray = [];
      const response = await _web3Config__WEBPACK_IMPORTED_MODULE_2__.mintAnimalTokenContract.methods.getAnimalTokens(account).call();
      response.map(v => {
        tempAnimalCardArray.push({
          animalTokenId: v.animalTokenId,
          animalType: v.animalType,
          animalPrice: v.animalPrice
        });
      });
      console.log("tempAnimalCardArray : ", tempAnimalCardArray);
      setAnimalCardArray(tempAnimalCardArray);
    } catch (error) {
      console.error(error);
    }
  };

  const getIsApprovedForAll = async () => {
    try {
      const response = await _web3Config__WEBPACK_IMPORTED_MODULE_2__.mintAnimalTokenContract.methods.isApprovedForAll(account, _web3Config__WEBPACK_IMPORTED_MODULE_2__.saleAnimalTokenAddress).call();

      if (response) {
        setSaleStatus(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickApproveToggle = async () => {
    try {
      if (!account) return;
      const response = await _web3Config__WEBPACK_IMPORTED_MODULE_2__.mintAnimalTokenContract.methods.setApprovalForAll(_web3Config__WEBPACK_IMPORTED_MODULE_2__.saleAnimalTokenAddress, !saleStatus).send({
        from: account
      });

      if (response.status) {
        setSaleStatus(!saleStatus);
      }
    } catch (error) {
      console.error(error);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!account) return;
    getAnimalTokens();
    getIsApprovedForAll();
  }, [account]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        style: {
          textAlign: 'center',
          float: 'left',
          width: '50%',
          height: '48px',
          fontSize: '30px',
          color: '#ffffff',
          backgroundColor: 'violet',
          border: '2px solid gray'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
          children: ["Sale Status : ", saleStatus ? "True" : "False"]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        onClick: onClickApproveToggle,
        "background-color": saleStatus ? "red" : "blue",
        style: {
          width: '50%',
          height: '48px',
          fontSize: '30px',
          color: '#ffffff',
          backgroundColor: 'violet',
          border: '2px solid gray'
        },
        children: saleStatus ? "Cancel" : "Approve"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {},
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        style: {
          position: 'absolute'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          src: "../../static/market.jpg",
          style: {
            position: 'relative',
            width: '100%',
            height: '3000px',
            zIndex: "0"
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        style: {
          zIndex: '3',
          position: 'relative',
          paddingTop: '20px'
        },
        children: animalCardArray && animalCardArray.map((v, i) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_MyAnimalCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            animalTokenId: v.animalTokenId,
            animalType: v.animalType,
            animalPrice: v.animalPrice,
            saleStatus: saleStatus,
            account: account
          }, i);
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAnimal);

/***/ })

};
;