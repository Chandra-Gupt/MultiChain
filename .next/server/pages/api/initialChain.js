"use strict";
(() => {
var exports = {};
exports.id = 111;
exports.ids = [111];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3839:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// import {getSession} from 'next-auth/react'
async function handler(req, res) {
    // const session = await getSession({req})
    if (req.method === "POST") {
        try {
            const { data , token  } = req.body;
            console.log(data, "data properties");
            var config = {
                method: "get",
                url: "https://bridgeapi.anyswap.exchange/data/bridgeChainInfo"
            };
            await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(config).then(function(response) {
                console.log(JSON.stringify(response.data));
                res.status(200).json({
                    data: response.data
                });
            });
        // res.status(200).json({ data: reference });
        } catch (err) {
            // console.log(err);
            res.status(500).json({
                Error: err
            });
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3839));
module.exports = __webpack_exports__;

})();