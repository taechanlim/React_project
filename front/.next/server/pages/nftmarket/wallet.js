"use strict";
(() => {
var exports = {};
exports.id = 659;
exports.ids = [659,507,160,773];
exports.modules = {

/***/ 4816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _erc721Abi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


 // import TokenList from './component/TokenList.js';



const axios = __webpack_require__(2167);

function Wallet() {
  const {
    0: web3,
    1: setWeb3
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: account,
    1: setAccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: newErc721addr,
    1: setNewErc721addr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: erc721list,
    1: setErc721list
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: pressBtn,
    1: setPressBtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: pressStart,
    1: setPressStart
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof window.ethereum != "undefined") {
      try {
        const web = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []); // 메타마스크로부터 계정을 연결 && 계정 주소를 상태로 저장

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      // 메타마스크 지갑과 연결된 계정 정보를 받는 JSON-RPC Call API
      method: "eth_requestAccounts"
    });
    setAccount(accounts[0]);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (account != '') {
      try {
        async function fetchData() {
          const token = document.cookie;
          const body = {
            wallet: account,
            token
          };
          const response = await axios.post('http://localhost:4001/api/user/wallet', body);
        }

        fetchData();
      } catch (err) {
        console.log(err);
      }
    }
  }, [account]);

  const addNewErc721Token = async () => {
    setLoading(true);
    setPressBtn(true);
    const tokenContract = await new web3.eth.Contract(_erc721Abi__WEBPACK_IMPORTED_MODULE_2__["default"], newErc721addr); // 컨트랙트의 ABI와 주소로 *컨트랙트 객체 생성*

    console.log(tokenContract);
    console.log(_erc721Abi__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();
    let arr = [];

    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i);
    }

    for (let tokenId of arr) {
      const tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();

      if (String(tokenOwner).toLowerCase() === account) {
        const tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        setErc721list(prev => {
          return [...prev, {
            name,
            symbol,
            tokenId,
            tokenURI
          }];
        });
      }
    }

    setLoading(false);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      style: {
        width: '100%',
        marginTop: '55px'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        style: {
          background: '#FFFFFF',
          border: '1.5px solid lightgray',
          width: '100%',
          height: '80px',
          marginTop: '40px',
          borderRadius: '10px 10px 10px 10px'
        },
        onClick: () => {
          connectWallet();
          setPressStart(true);
          console.log('위치 확인');
        },
        children: pressStart ? account : "Connect Wallet"
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wallet);

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

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [848], () => (__webpack_exec__(4816)));
module.exports = __webpack_exports__;

})();