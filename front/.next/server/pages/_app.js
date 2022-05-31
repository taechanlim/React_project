(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer.jsx




const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        zIndex: '10',
        backgroundColor: 'lightgray'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: '100%'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/logo.png",
          style: {
            float: 'left'
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          marginLeft: '5%'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "React_pj"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          style: {
            fontWeight: 'bold'
          },
          children: ["2022-05-16 ~ 2022-05-31 Team : ", /*#__PURE__*/jsx_runtime_.jsx(icons_.MehOutlined, {}), "\uC784\uD0DC\uCC2C ", /*#__PURE__*/jsx_runtime_.jsx(icons_.MehOutlined, {}), "\uAE40\uB3C4\uC6C0 ", /*#__PURE__*/jsx_runtime_.jsx(icons_.MehOutlined, {}), "\uC774\uD604\uC9C4 ", /*#__PURE__*/jsx_runtime_.jsx(icons_.MehOutlined, {}), "\uC9C0\uC815\uD658"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/cyworld.jpg",
          style: {
            float: 'right',
            marginTop: '-4.2%',
            width: '100px',
            height: '65px',
            marginRight: '10px',
            borderRadius: '10px 10px'
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/instagram.webp",
          style: {
            float: 'right',
            marginTop: '-4.2%',
            width: '100px',
            height: '65px',
            marginRight: '120px',
            borderRadius: '10px 10px'
          }
        })]
      })]
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/DefaultLayout.jsx










const DefaultLayout = ({
  children
}) => {
  const {
    0: isCookie,
    1: setisCookie
  } = (0,external_react_.useState)();

  const homepage = () => {
    if (document.cookie) {
      const token = document.cookie;
      const [, payload] = token.split('.');
      const decodingPayload = Buffer.from(payload, 'base64').toString();
      const nickname = JSON.parse(decodingPayload).nickname;
      router_default().push(`/minihomepage/${nickname}`);
    } else {
      alert('로그인 후 이용해주세요');
      router_default().push('/user/login');
    }
  };

  const router = (0,router_.useRouter)();
  const feedURL = router.pathname.split('/')[1];

  const Auth = () => {
    if (feedURL == 'feed' || feedURL == 'market') {
      if (!document.cookie) {
        alert('로그인 후 이용하세요');
        router_default().push('/user/login');
      }
    }
  }; // Auth()


  const cookiecheck = () => {
    if (document.cookie) {
      setisCookie(true);
    }
  };

  (0,external_react_.useEffect)(() => {
    cookiecheck();
  }, [isCookie]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu, {
        theme: "#FFFFFF",
        mode: "horizontal",
        style: {
          display: 'flex',
          justifyContent: "center",
          border: '1px solid lightgray',
          position: 'fixed',
          zIndex: '10',
          width: '100%'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.InstagramOutlined, {}),
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/",
              children: "Home"
            })
          }), isCookie ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.InfoCircleOutlined, {}),
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/user/login",
              children: "\uB85C\uADF8\uC544\uC6C3/\uD504\uB85C\uD544\uC218\uC815"
            })
          }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.InfoCircleOutlined, {}),
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/user/login",
              children: "\uB85C\uADF8\uC778"
            })
          }), isCookie ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.UsergroupAddOutlined, {}),
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/user/register",
              children: "\uD68C\uC6D0\uAC00\uC785"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
            onClick: homepage,
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.ShopOutlined, {}),
            children: "\uBBF8\uB2C8\uD648\uD53C"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}),
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/feed/write",
              children: "\uD53C\uB4DC\uC791\uC131"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.DollarCircleOutlined, {}),
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/market/marketApp",
              children: "NFT MARKET"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.GithubOutlined, {}),
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "https://github.com/taechanlim/React_project",
              children: "Github"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.LoadingOutlined, {}),
            children: "\uD398\uC774\uC9C0 \uB3D9\uC791\uC911!"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        backgroundColor: 'skyblue'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})
      })
    })]
  });
};

/* harmony default export */ const components_DefaultLayout = (DefaultLayout);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./pages/_app.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //layout.module.css




const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(components_DefaultLayout, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "App",
        style: {
          background: '#FAFAFA',
          width: '100%',
          marginTop: '50px'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  });
};

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664], () => (__webpack_exec__(4528)));
module.exports = __webpack_exports__;

})();