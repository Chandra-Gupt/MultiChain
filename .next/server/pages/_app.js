(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9090);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(204);
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8998);
/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9737);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8577);
/* harmony import */ var react_step_progress_bar_styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3917);
/* harmony import */ var react_step_progress_bar_styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_step_progress_bar_styles_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7697);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__, wagmi__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_7__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__, wagmi_chains__WEBPACK_IMPORTED_MODULE_10__]);
([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__, wagmi__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_7__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__, wagmi_chains__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function App({ Component , pageProps  }) {
    const chains = [
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.arbitrum,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.avalanche,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.bsc,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.fantom,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.gnosis,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.mainnet,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.optimism,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.polygon,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.goerli,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.bscTestnet,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.polygonMumbai,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.fantomTestnet,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.baseGoerli,
        wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.avalancheFuji
    ];
    const { provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.configureChains)(chains, [
        (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_7__.infuraProvider)({
            apiKey: "c8fb3111e62c4b40867156ac3c3cbef4"
        }),
        (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__.publicProvider)()
    ]);
    const { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.getDefaultWallets)({
        appName: "My RainbowKit App",
        chains
    });
    const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.createClient)({
        autoConnect: true,
        connectors,
        provider
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_6__.WagmiConfig, {
                client: wagmiClient,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.RainbowKitProvider, {
                    chains: chains,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
                rel: "stylesheet",
                integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css",
                integrity: "sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
                integrity: "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js",
                integrity: "sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N",
                crossorigin: "anonymous"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css",
                integrity: "sha512-5PV92qsds/16vyYIJo3T/As4m2d8b6oWYfoqV+vtizRB6KhF1F9kYzWzQmsO6T3z3QG2Xdhrx7FQ+5R1LiQdUA==",
                crossOrigin: "anonymous",
                referrerPolicy: "no-referrer"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6921:
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ 8998:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ 7697:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ 9737:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/infura");;

/***/ }),

/***/ 8577:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,846], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();